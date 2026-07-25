import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aevon — Software Development Agency",
  description:
    "Aevon builds world-class apps, web platforms, AI agents, and digital solutions for ambitious businesses. Expert software development agency specializing in React, Next.js, Node.js, AI, and cloud deployment.",
  keywords: [
    "software development agency",
    "web development",
    "app development",
    "AI agents",
    "chatbots",
    "backend development",
    "Aevon",
    "Next.js",
    "React",
    "Node.js",
    "SEO",
    "Shopify",
    "WordPress",
    "Figma",
  ],
  authors: [{ name: "Aevon" }],
  creator: "Aevon",
  openGraph: {
    title: "Aevon — Software Development Agency",
    description:
      "Building world-class digital products for ambitious businesses.",
    type: "website",
    locale: "en_US",
    siteName: "Aevon",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aevon — Software Development Agency",
    description:
      "Building world-class digital products for ambitious businesses.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans bg-background text-foreground antialiased`}>
        {children}
      </body>
    </html>
  );
}
