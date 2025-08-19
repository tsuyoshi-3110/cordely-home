import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cordely.app"), // 仮の本番URL
  title: { default: "Cordely", template: "%s | Cordely" },
  description: "並ばずに注文。屋台・イベント販売に最適な注文整理システム。",
  openGraph: {
    title: "Cordely",
    description: "並ばずに注文。屋台・イベント販売に最適な注文整理システム。",
    url: "https://cordely.app",
    siteName: "Cordely",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
