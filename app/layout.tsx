import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Leopold Horne | React & Next.js Developer",
  description:
    "Former JP Morgan M&A analyst turned software engineer. I build fast, clean products with React, Next.js, and TypeScript — including PawCircle and the Amex Points Visualizer.",
  keywords: [
    "Leopold Horne",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Full Stack Engineer",
    "Frontend Developer",
    "Software Engineer Portfolio",
    "PawCircle",
    "Amex Points Visualizer",
  ],
  openGraph: {
    title: "Leopold Horne – React & Next.js Developer",
    description: "From JPMorgan to full-stack developer. I build and ship tools like PawCircle and the Amex Points Visualizer, focusing on clean design and real utility.",
    url: "leopoldhorne.com",
    siteName: "Leopold Horne Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Leopold Horne | React & Next.js Developer",
    description: "Former JP Morgan analyst turned software engineer. Building PawCircle and other real products with React, Next.js, and TypeScript.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased scroll-smooth`}
      >
        {children}
      </body>
    </html>
  );
}
