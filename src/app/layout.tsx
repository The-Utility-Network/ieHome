import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: 'cover',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#A855F7' },
    { media: '(prefers-color-scheme: dark)', color: '#A855F7' },
  ],
};

export const metadata: Metadata = {
  title: "Invisible Enemies | Veterans Advocacy Through Blockchain",
  description: "Fighting for recognition and support for veterans exposed to toxic hazards. Invisible Enemies leverages NFTs and blockchain technology to fund advocacy, raise awareness, and create a decentralized community dedicated to supporting those who served.",
  keywords: [
    "Invisible Enemies",
    "Veterans Advocacy",
    "Toxic Exposure",
    "NTTR Veterans",
    "Burn Pit Awareness",
    "PACT Act",
    "Agent Orange",
    "Camp Lejeune",
    "NFT Veterans",
    "Veteran Support DAO",
    "Military Veterans",
    "The Utility Foundation",
    "Zeta Reticulin",
    "501c3 Nonprofit"
  ],
  authors: [{ name: "Invisible Enemies" }],
  creator: "The Utility Foundation",
  publisher: "The Utility Foundation",
  metadataBase: new URL('https://ie.theutilityfoundation.org'),
  icons: {
    icon: '/icon.png',
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: "Invisible Enemies | Advocacy. Awareness. Accountability.",
    description: "Fighting for veterans exposed to toxic hazards. Join our blockchain-powered community dedicated to recognition, healthcare, and support for those who served.",
    type: "website",
    locale: "en_US",
    siteName: "Invisible Enemies",
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Invisible Enemies - Veterans Advocacy',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Invisible Enemies | Veterans Advocacy",
    description: "Fighting for recognition and support for veterans exposed to toxic hazards through blockchain-powered advocacy.",
    creator: "@invisibleenemi",
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Invisible Enemies',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
