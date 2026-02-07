import type { Metadata } from "next";
import { Plus_Jakarta_Sans, DM_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fourth Lever | AI Infrastructure Agency",
  description:
    "We build, deploy, and manage AI systems for businesses that want results — not another tool to learn. Your business runs on three levers — we're the fourth.",
  keywords: [
    "AI agency",
    "AI infrastructure",
    "managed AI services",
    "business automation",
    "AI operations",
  ],
  openGraph: {
    title: "Fourth Lever | AI Infrastructure Agency",
    description:
      "We build, deploy, and manage AI systems for businesses that want results.",
    url: "https://fourthlever.com",
    siteName: "Fourth Lever",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${plusJakarta.variable} ${dmSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
