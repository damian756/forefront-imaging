import Link from "next/link";
import { Home, ArrowLeft, Search } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen text-white flex items-center justify-center pt-20 pb-20" style={{ background: 'var(--fiber-gradient)' }}>
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="text-9xl font-extrabold text-gradient mb-6">404</div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Page Not Found</h1>
          <p className="text-slate-400 text-lg mb-10 max-w-md mx-auto leading-relaxed">
            The page you're looking for doesn't exist or has been moved. Let's get you back on track.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold rounded-xl shadow-lg transition-all"
            >
              <Home className="w-4 h-4" />
              Back to Home
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl border border-white/20 transition-all"
            >
              <Search className="w-4 h-4" />
              Browse Products
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
