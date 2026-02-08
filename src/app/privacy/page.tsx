import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";
import { ManuAssistant } from "@/components/ManuAssistant";

export default function PrivacyPage() {
    return (
        <>
            <Header />
            <ManuAssistant />

            <main className="flex-1 pt-24">
                <Section className="max-w-3xl">
                    <h1 className="text-4xl md:text-5xl font-serif mb-8">Privacy Policy</h1>
                    <div className="prose prose-neutral dark:prose-invert max-w-none">
                        <p className="text-muted-foreground mb-6">Last updated: {new Date().toLocaleDateString()}</p>

                        <h2 className="text-2xl font-bold mt-8 mb-4">1. Introduction</h2>
                        <p>
                            This website ("Manu Portfolio") is a personal portfolio. I respect your privacy and am committed to protecting it. This policy explains what information is collected and how it is used.
                        </p>

                        <h2 className="text-2xl font-bold mt-8 mb-4">2. Data Collection</h2>
                        <h3 className="text-xl font-bold mt-6 mb-2">2.1 Analytics</h3>
                        <p>
                            This site may use privacy-preserving analytics (like Plausible or Vercel Analytics) to track page views and usage patterns. No personally identifiable information (PII) is collected or stored.
                        </p>

                        <h3 className="text-xl font-bold mt-6 mb-2">2.2 Contact Form</h3>
                        <p>
                            When you submit the contact form, the information you provide (name, email, message) is processed solely for the purpose of communicating with you. It is not shared with third parties.
                        </p>

                        <h3 className="text-xl font-bold mt-6 mb-2">2.3 AI Assistant</h3>
                        <p>
                            Interactions with the "Manu Assistant" chatbot are processed locally in the browser or via stateless API calls. Chat logs are not permanently stored unless you explicitly opt-in for quality assurance purposes (currently disabled).
                        </p>

                        <h2 className="text-2xl font-bold mt-8 mb-4">3. Cookies</h2>
                        <p>
                            This site operates without essential cookies. LocalStorage may be used to store preferences (like theme or UI state) on your device.
                        </p>

                        <h2 className="text-2xl font-bold mt-8 mb-4">4. Retention</h2>
                        <p>
                            Data submitted via email/contact form is retained only as long as necessary for business communication. You may request deletion of your correspondence at any time by contacting hello@manu.dev.
                        </p>
                    </div>
                </Section>
            </main>

            <Footer />
        </>
    );
}
