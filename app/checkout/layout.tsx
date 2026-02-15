import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Checkout",
  description: "Complete your StreamTek order. Secure checkout with free UK shipping on all orders.",
};

export default function CheckoutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
