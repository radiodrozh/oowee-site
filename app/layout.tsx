import type { Metadata } from "next";
import { Dela_Gothic_One, Inter } from "next/font/google";

import { Header } from "@/components/header";
import { SITE_NAME } from "@/lib/site";

import "./globals.css";

const delaGothicOne = Dela_Gothic_One({
  subsets: ["latin", "cyrillic"],
  variable: "--font-heading",
  weight: "400"
});

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-body"
});

export const metadata: Metadata = {
  title: SITE_NAME,
  description: "Editorial website scaffold for OOWEE Union."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${delaGothicOne.variable} ${inter.variable} font-[family-name:var(--font-body)] antialiased`}
      >
        <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
