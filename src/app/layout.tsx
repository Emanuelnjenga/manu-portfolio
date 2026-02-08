import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Manu — Engineer, Systems Thinker, Product Builder",
  description: "Portfolio of Manu, a product engineer and systems architect specializing in scalable systems and AI-driven experiences.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="antialiased text-foreground bg-background min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
