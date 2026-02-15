import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopping Cart",
  description: "Review your StreamTek shopping cart. Professional Magewell USB capture devices with free UK shipping.",
};

export default function CartLayout({ children }: { children: React.ReactNode }) {
  return children;
}
