import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import "../styles/vendor.css";
import "../styles/globals.scss";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Şentürk Mobilya | Modern Tasarım Atölyesi",
  description: "El yapımı modern mobilya tasarımları. Şentürk Mobilya, 20 yılı aşkın süredir modern ve özgün mobilya tasarımları üreten bir aile şirketidir.",
  keywords: "mobilya, modern mobilya, el yapımı mobilya, tasarım mobilya, özel üretim mobilya, şentürk mobilya",
  authors: [{ name: "Şentürk Mobilya" }],
  openGraph: {
    title: "Şentürk Mobilya | Modern Tasarım Atölyesi",
    description: "El yapımı modern mobilya tasarımları. Şentürk Mobilya, 20 yılı aşkın süredir modern ve özgün mobilya tasarımları üreten bir aile şirketidir.",
    url: "https://senturkmobilya.com",
    siteName: "Şentürk Mobilya",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Şentürk Mobilya",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Şentürk Mobilya | Modern Tasarım Atölyesi",
    description: "El yapımı modern mobilya tasarımları",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${montserrat.variable} ${playfair.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
