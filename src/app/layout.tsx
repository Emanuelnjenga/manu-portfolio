import type { Metadata } from "next";
import "./globals.css";

import { SmoothScroll } from "@/components/SmoothScroll";
import { generateProfilePageSchema } from "@/lib/jsonld";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://manu.dev';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Manu — Engineer, Systems Thinker, Product Builder",
  description: "Portfolio of Manu, a product engineer and systems architect specializing in scalable systems and AI-driven experiences.",
  openGraph: {
    title: "Manu — Engineer, Systems Thinker, Product Builder",
    description: "Portfolio of Manu, a product engineer and systems architect specializing in scalable systems and AI-driven experiences.",
    url: siteUrl,
    siteName: "Manu Portfolio",
    images: [
      {
        url: `${siteUrl}/api/og`,
        width: 1200,
        height: 630,
        alt: "Manu - Senior Software Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Manu — Engineer, Systems Thinker, Product Builder",
    description: "Portfolio of Manu, a product engineer and systems architect specializing in scalable systems and AI-driven experiences.",
    images: [`${siteUrl}/api/og`],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const profilePageSchema = generateProfilePageSchema();

  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(profilePageSchema),
          }}
        />
      </head>
      <body className="antialiased text-foreground bg-background min-h-screen flex flex-col">
        {/* Noise Texture Overlay */}
        <div className="fixed inset-0 z-[9999] pointer-events-none opacity-[0.03] mix-blend-overlay"
          style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
        />


        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
