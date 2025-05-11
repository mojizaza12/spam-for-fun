import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "สแปมข้อความ",
  description: "สร้างโดย Moji Dev",
  openGraph: {
    title: "สแปมข้อความ",
    description: "สร้างโดย Moji Dev",
    url: "https://spam.bannawat.store/",
    siteName: "Moji Dev",
    images: [
      {
        url: "https://spam.bannawat.store/og-image.png",
        width: 1200,
        height: 630,
        alt: "Spam Text Generator",
      },
    ],
    locale: "th_TH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "สแปมข้อความ",
    description: "สร้างโดย Moji Dev",
    images: ["https://spam.bannawat.store/og-image.png"],
    creator: "@xzaza561956",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
