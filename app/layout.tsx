import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/contexts/CartContext";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.streamtek.co.uk"),
  title: {
    default: "StreamTek | Official Magewell Distributor UK",
    template: "%s | StreamTek",
  },
  description: "Official UK Magewell distributor. Professional USB video capture devices with free delivery, 3-year warranty, and next-day shipping. Perfect for streaming, recording, and content creation.",
  keywords: "Magewell, USB capture, video capture, HDMI capture, SDI capture, streaming hardware, UK distributor, StreamTek",
  authors: [{ name: "StreamTek", url: "https://www.streamtek.co.uk" }],
  creator: "StreamTek",
  publisher: "StreamTek",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://www.streamtek.co.uk",
    siteName: "StreamTek",
    title: "StreamTek | Official Magewell Distributor UK",
    description: "Professional USB video capture devices by Magewell. Free UK delivery, 3-year warranty, next-day shipping.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "StreamTek - Official Magewell Distributor UK",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "StreamTek | Official Magewell Distributor UK",
    description: "Professional USB video capture devices by Magewell. Free UK delivery, 3-year warranty, next-day shipping.",
    images: ["/twitter-image"],
  },
  icons: {
    icon: "/icon",
    apple: "/apple-icon",
  },
  alternates: {
    canonical: "https://www.streamtek.co.uk",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased flex flex-col min-h-screen">
        <CartProvider>
          <div className="flex-grow">
            {children}
          </div>
        </CartProvider>
      </body>
    </html>
  );
}