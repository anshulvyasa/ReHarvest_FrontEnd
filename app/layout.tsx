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
  title: "Reharvest",
  description: "AI for Sustananle Supply Chain",
};

export const googleMetadata:Metadata = {
  title: "Reharvest",
  description: "Your app description",
  other: {
    "google-site-verification": "EYviaahP6-PaQKwcQlVGz5p6sUsSExayTOVjw4PqiII"
  }
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
        {children}
      </body>
    </html>
  );
}
