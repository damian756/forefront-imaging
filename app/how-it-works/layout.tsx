import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How It Works | USB Video Capture Explained",
  description: "Learn how Magewell USB capture devices work. Plug-and-play HDMI and SDI capture with FPGA processing, zero CPU usage, and universal compatibility.",
  keywords: "how USB capture works, HDMI capture explained, video capture technology, FPGA processing, Magewell technology",
  openGraph: {
    title: "How USB Video Capture Works | StreamTek",
    description: "Learn how Magewell USB capture devices deliver professional video capture with plug-and-play simplicity.",
    url: "https://www.streamtek.co.uk/how-it-works",
    siteName: "StreamTek",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "How USB Video Capture Works | StreamTek",
    description: "Learn how Magewell USB capture devices deliver professional video capture with plug-and-play simplicity.",
  },
  alternates: {
    canonical: "https://www.streamtek.co.uk/how-it-works",
  },
};

export default function HowItWorksLayout({ children }: { children: React.ReactNode }) {
  return children;
}
