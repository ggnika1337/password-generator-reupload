import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en" className="h-full antialiased">
      <body
        className="px-[16px] whitespace-nowrap min-h-full flex flex-col bg-[#08070B] items-center justify-center"
      >
        {children}
      </body>
    </html>
  );
}
