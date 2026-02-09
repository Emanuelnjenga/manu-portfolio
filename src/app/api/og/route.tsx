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

        // Color scheme matching portfolio
        const colors = {
            background: '#0a0a0a',
            foreground: '#fafafa',
            accent: '#22c55e',
            muted: '#171717',
        };

        // Render different templates based on type
        if (type === 'blog') {
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
                                opacity: 0.1,
                                backgroundImage: `linear-gradient(${colors.muted} 1px, transparent 1px), linear-gradient(90deg, ${colors.muted} 1px, transparent 1px)`,
                                backgroundSize: '50px 50px',
                            }}
                        />

                        {/* Content */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', zIndex: 10 }}>
                            {tag && (
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        backgroundColor: colors.accent,
                                        color: colors.background,
                                        padding: '12px 24px',
                                        borderRadius: '9999px',
                                        fontSize: '24px',
                                        fontWeight: 600,
                                        width: 'fit-content',
                                    }}
                                >
                                    {tag}
                                </div>
                            )}

                            <h1
                                style={{
                                    fontSize: '72px',
                                    fontWeight: 700,
                                    color: colors.foreground,
                                    lineHeight: 1.1,
                                    margin: 0,
                                    maxWidth: '900px',
                                }}
                            >
                                {title}
                            </h1>

                            {description && (
                                <p
                                    style={{
                                        fontSize: '32px',
                                        color: colors.foreground,
                                        opacity: 0.6,
                                        margin: 0,
                                        maxWidth: '800px',
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
                                gap: '16px',
                                zIndex: 10,
                            }}
                        >
                            <div
                                style={{
                                    width: '48px',
                                    height: '48px',
                                    borderRadius: '50%',
                                    backgroundColor: colors.accent,
                                }}
                            />
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <span style={{ fontSize: '28px', fontWeight: 600, color: colors.foreground }}>
                                    Manu
                                </span>
                                <span style={{ fontSize: '20px', color: colors.foreground, opacity: 0.6 }}>
                                    Senior Software Engineer
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

        // Default / Project template
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
                    {/* Background Gradient */}
                    <div
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: `radial-gradient(circle at 50% 50%, ${colors.accent}15, transparent 70%)`,
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
                        }}
                    >
                        <h1
                            style={{
                                fontSize: '80px',
                                fontWeight: 700,
                                color: colors.foreground,
                                margin: 0,
                                marginBottom: '32px',
                                maxWidth: '900px',
                                lineHeight: 1.1,
                            }}
                        >
                            {title}
                        </h1>

                        <p
                            style={{
                                fontSize: '36px',
                                color: colors.foreground,
                                opacity: 0.7,
                                margin: 0,
                                maxWidth: '700px',
                            }}
                        >
                            {description}
                        </p>

                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '16px',
                                marginTop: '64px',
                            }}
                        >
                            <div
                                style={{
                                    width: '8px',
                                    height: '8px',
                                    borderRadius: '50%',
                                    backgroundColor: colors.accent,
                                }}
                            />
                            <span style={{ fontSize: '24px', color: colors.foreground, opacity: 0.6 }}>
                                manu.dev
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
    } catch (error) {
        console.error('OG Image Error:', error);
        return new Response('Failed to generate image', { status: 500 });
    }
}
