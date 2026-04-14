import type { Metadata } from "next";
import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const JetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Password Generator",
  description: "A website for generating passwords.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${JetBrainsMono.variable} h-full antialiased`}>
      <body
        className={`${JetBrainsMono.className} px-[16px] whitespace-nowrap min-h-full flex flex-col bg-[#08070B] items-center justify-center`}
      >
        {children}
      </body>
    </html>
  );
}
