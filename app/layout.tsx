import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Carlos Navarro Jr. — Fullstack Engineer",
  description:
    "Portfolio of Carlos Navarro Jr., a fullstack software engineer building scalable web applications and reliable backend systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className} scroll-smooth`}>
      <body className="bg-[#0a0a0f] text-[#e2e8f0] antialiased">{children}</body>
    </html>
  );
}
