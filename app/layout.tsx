import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/contexts/CartContext";

export const metadata: Metadata = {
  title: "StreamTek | Magewell Official Distributor UK",
  description: "Professional USB video capture devices by Magewell. Free UK delivery, 3-year warranty, next-day shipping. Perfect for streaming, recording, and content creation.",
  robots: {
    index: false,
    follow: false,
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