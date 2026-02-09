import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Forefront Imaging | Magewell UK Distributor",
  description: "High-performance Magewell video capture for medical and broadcast.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased flex flex-col min-h-screen">
        <div className="flex-grow">
          {children}
        </div>
      </body>
    </html>
  );
}