import { createOpenAI } from '@ai-sdk/openai';
import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { streamText } from 'ai';
import { PROJECTS, SKILLS, ARTICLES } from '@/lib/data';

// Portfolio context for AI responses
const PORTFOLIO_CONTEXT = `
You are Manu Assistant, an AI chatbot representing Manu, a senior software engineer specializing in distributed systems, AI, and product engineering.

## About Manu
- 8+ years of experience in building scalable products
- Expertise: Distributed systems, AI/ML, Product Engineering
- Currently open to new opportunities
- Contact: hello@manu.dev

## Projects
${PROJECTS.map(p => `- ${p.title}: ${p.content.problem} Solution: ${p.content.solution} Stack: ${p.stack.join(', ')}`).join('\n')}

## Skills
${SKILLS.map(s => `${s.category}: ${s.items.join(', ')}`).join('\n')}

## Blog Articles
${ARTICLES.map(a => `- ${a.title}: ${a.excerpt}`).join('\n')}

Guidelines:
- Be concise and helpful
- Reference specific projects, articles, or skills when relevant
- If asked about hiring/rates, direct them to the Contact page
- Stay in character as Manu's assistant
- Don't make up information not in the context
`;

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { messages } = body;

        // Check if API keys are configured
        const openaiKey = process.env.OPENAI_API_KEY;
        const googleKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY;

        // Use demo mode if no API keys are configured
        if (!openaiKey && !googleKey) {
            return new Response(
                JSON.stringify({
                    error: 'Demo Mode',
                    message: 'AI API keys not configured. Using simulated responses.',
                    suggestion: 'Add OPENAI_API_KEY or GOOGLE_GENERATIVE_AI_API_KEY to environment variables.'
                }),
                {
                    status: 200,
                    headers: { 'Content-Type': 'application/json' }
                }
            );
        }

        // Select AI provider based on available keys
        let model;
        if (openaiKey) {
            const openai = createOpenAI({
                apiKey: openaiKey,
            });
            model = openai('gpt-4-turbo-preview');
        } else if (googleKey) {
            const google = createGoogleGenerativeAI({
                apiKey: googleKey,
            });
            model = google('gemini-1.5-pro');
        }

        if (!model) {
            throw new Error('No AI model available');
        }

        // Generate streaming response
        const result = await streamText({
            model,
            system: PORTFOLIO_CONTEXT,
            messages,
            temperature: 0.7,
        });

        return result.toDataStreamResponse();
    } catch (error) {
        console.error('Chat API Error:', error);
        return new Response(
            JSON.stringify({
                error: 'Internal Server Error',
                message: error instanceof Error ? error.message : 'Unknown error'
            }),
            {
                status: 500,
                headers: { 'Content-Type': 'application/json' }
            }
        );
    }
}
