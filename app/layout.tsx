import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Optional: Using Next/Font for performance
const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "James Nesbitt | Software Engineer",
  description: "A modern, animated portfolio showcasing the work of James Nesbitt.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={inter.variable}>{children}</body>
    </html>
  );
}