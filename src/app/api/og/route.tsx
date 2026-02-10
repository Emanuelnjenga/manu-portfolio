import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);

        const type = searchParams.get('type') || 'default';
        const title = searchParams.get('title') || 'Manu - Senior Software Engineer';
        const description = searchParams.get('description') || 'Distributed Systems | AI | Product Engineering';
        const tag = searchParams.get('tag');

        // Color scheme matching NexuM Labs (Light Theme)
        const colors = {
            background: '#ffffff',
            foreground: '#0F1724', // Charcoal
            accent: '#0B5FFF',     // NexuM Blue
            muted: '#6B7280',      // Muted Gray
            border: '#e5e7eb'
        };

        // Render different templates based on type
        if (type === 'blog' || type === 'case-study') {
            return new ImageResponse(
                (
                    <div
                        style={{
                            height: '100%',
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            justifyContent: 'space-between',
                            backgroundColor: colors.background,
                            padding: '80px',
                            position: 'relative',
                        }}
                    >
                        {/* Background Grid */}
                        <div
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                opacity: 0.4,
                                backgroundImage: `linear-gradient(${colors.border} 1px, transparent 1px), linear-gradient(90deg, ${colors.border} 1px, transparent 1px)`,
                                backgroundSize: '60px 60px',
                            }}
                        />

                        {/* Content */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', zIndex: 10 }}>
                            {tag && (
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        backgroundColor: 'rgba(11, 95, 255, 0.1)',
                                        color: colors.accent,
                                        padding: '12px 24px',
                                        borderRadius: '9999px',
                                        fontSize: '24px',
                                        fontWeight: 600,
                                        width: 'fit-content',
                                        border: `1px solid ${colors.accent}`,
                                    }}
                                >
                                    {tag}
                                </div>
                            )}

                            <h1
                                style={{
                                    fontSize: '80px',
                                    fontWeight: 800,
                                    color: colors.foreground,
                                    lineHeight: 1.1,
                                    margin: 0,
                                    maxWidth: '1000px',
                                    fontFamily: 'sans-serif',
                                }}
                            >
                                {title}
                            </h1>

                            {description && (
                                <p
                                    style={{
                                        fontSize: '32px',
                                        color: colors.muted,
                                        margin: 0,
                                        maxWidth: '900px',
                                        lineHeight: 1.5,
                                    }}
                                >
                                    {description}
                                </p>
                            )}
                        </div>

                        {/* Footer */}
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '20px',
                                zIndex: 10,
                                borderTop: `2px solid ${colors.border}`,
                                width: '100%',
                                paddingTop: '40px',
                            }}
                        >
                            <div
                                style={{
                                    width: '60px',
                                    height: '60px',
                                    borderRadius: '50%',
                                    backgroundColor: colors.accent,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'white',
                                    fontSize: '32px',
                                    fontWeight: 'bold',
                                }}
                            >
                                M
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <span style={{ fontSize: '32px', fontWeight: 700, color: colors.foreground }}>
                                    NexuM Labs
                                </span>
                                <span style={{ fontSize: '20px', color: colors.muted }}>
                                    Systems & AI Engineering
                                </span>
                            </div>
                        </div>
                    </div>
                ),
                {
                    width: 1200,
                    height: 630,
                }
            );
        }

        // Default / Home template
        return new ImageResponse(
            (
                <div
                    style={{
                        height: '100%',
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: colors.background,
                        position: 'relative',
                    }}
                >
                    {/* Background Pattern */}
                    <div
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: `radial-gradient(circle at 50% 50%, rgba(11, 95, 255, 0.05) 0%, transparent 50%)`,
                        }}
                    />

                    {/* Content */}
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textAlign: 'center',
                            zIndex: 10,
                            padding: '80px',
                            border: `1px solid ${colors.border}`,
                            borderRadius: '40px',
                            backgroundColor: 'rgba(255, 255, 255, 0.8)',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
                        }}
                    >
                        <div
                            style={{
                                width: '100px',
                                height: '100px',
                                borderRadius: '50%',
                                backgroundColor: colors.accent,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'white',
                                fontSize: '60px',
                                fontWeight: 'bold',
                                marginBottom: '40px',
                            }}
                        >
                            M
                        </div>

                        <h1
                            style={{
                                fontSize: '90px',
                                fontWeight: 800,
                                color: colors.foreground,
                                margin: 0,
                                marginBottom: '24px',
                                maxWidth: '900px',
                                lineHeight: 1.1,
                                letterSpacing: '-0.02em',
                            }}
                        >
                            {title}
                        </h1>

                        <p
                            style={{
                                fontSize: '32px',
                                color: colors.muted,
                                margin: 0,
                                maxWidth: '700px',
                                marginBottom: '40px',
                            }}
                        >
                            {description}
                        </p>
                    </div>
                </div>
            ),
            {
                width: 1200,
                height: 630,
            }
        );
    } catch (error) {
        console.error('OG Image Error:', error);
        return new Response('Failed to generate image', { status: 500 });
    }
}
