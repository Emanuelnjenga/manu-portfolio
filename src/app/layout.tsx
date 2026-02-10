import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

import { SmoothScroll } from "@/components/SmoothScroll";
import { CookieConsent } from "@/components/CookieConsent";
import { generateProfilePageSchema } from "@/lib/jsonld";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://manu-portfolio-neon.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "NexuM Labs — Systems & AI for scalable products | Emmanuel Njenga",
  description: "NexuM Labs (founded by Emmanuel Njenga) builds cloud-native systems and AI-enabled products for startups and organisations. View case studies or start a conversation.",
  openGraph: {
    title: "NexuM Labs — Systems & AI for scalable products | Emmanuel Njenga",
    description: "NexuM Labs (founded by Emmanuel Njenga) builds cloud-native systems and AI-enabled products for startups and organisations. View case studies or start a conversation.",
    url: siteUrl,
    siteName: "NexuM Labs",
    images: [
      {
        url: `${siteUrl}/assets/og-nexumlabs.png`,
        width: 1200,
        height: 630,
        alt: "NexuM Labs - Systems & AI",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NexuM Labs — Systems & AI for scalable products | Emmanuel Njenga",
    description: "NexuM Labs (founded by Emmanuel Njenga) builds cloud-native systems and AI-enabled products for startups and organisations. View case studies or start a conversation.",
    images: [`${siteUrl}/assets/og-nexumlabs.png`],
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
    <html lang="en" className={`scroll-smooth ${inter.variable} ${spaceGrotesk.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "NexuM Labs",
              "url": "https://manu-portfolio-neon.vercel.app",
              "logo": "https://manu-portfolio-neon.vercel.app/assets/logo-m.svg",
              "sameAs": ["https://github.com/yourusername", "https://www.linkedin.com/in/yourprofile"]
            }),
          }}
        />
      </head>
      <body className="antialiased text-foreground bg-background min-h-screen flex flex-col font-sans">
        <SmoothScroll>
          {children}
        </SmoothScroll>
        <CookieConsent />
      </body>
    </html>
  );
}
