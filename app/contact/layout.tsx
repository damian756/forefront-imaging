import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with StreamTek for product enquiries, technical support, and trade account requests. Official UK Magewell distributor.",
  keywords: "contact StreamTek, Magewell support UK, video capture help, technical support",
  openGraph: {
    title: "Contact StreamTek | UK Magewell Distributor",
    description: "Get in touch for product enquiries, technical support, and trade account requests.",
    url: "https://www.streamtek.co.uk/contact",
    siteName: "StreamTek",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Contact StreamTek",
    description: "Get in touch for product enquiries, technical support, and trade account requests.",
  },
  alternates: {
    canonical: "https://www.streamtek.co.uk/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
