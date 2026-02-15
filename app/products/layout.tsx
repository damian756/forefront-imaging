import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional USB Video Capture Devices | Magewell Products",
  description: "Browse Magewell USB capture devices — HDMI, SDI, DVI, and multi-format. Free UK shipping, 3-year warranty, next-day delivery. From £289.",
  keywords: "Magewell products, USB capture devices, HDMI capture, SDI capture, video capture card, buy Magewell UK",
  openGraph: {
    title: "Magewell USB Capture Devices | StreamTek UK",
    description: "Professional USB video capture devices with free UK delivery and 3-year warranty.",
    url: "https://www.streamtek.co.uk/products",
    siteName: "StreamTek",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Magewell USB Capture Devices | StreamTek UK",
    description: "Professional USB video capture devices with free UK delivery and 3-year warranty.",
  },
  alternates: {
    canonical: "https://www.streamtek.co.uk/products",
  },
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
