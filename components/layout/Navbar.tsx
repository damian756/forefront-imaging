"use client";
import Link from "next/link";
import { Phone } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 h-20 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-slate-900">
          ForeFront<span className="text-blue-600">Imaging</span>
        </Link>
        <div className="flex items-center gap-8">
          <Link 
            href="/" 
            className="text-slate-600 hover:text-blue-600 font-medium transition-colors"
          >
            Home
          </Link>
          <Link 
            href="/products" 
            className="text-slate-600 hover:text-blue-600 font-medium transition-colors"
          >
            Products
          </Link>
          <Link 
            href="/contact" 
            className="flex items-center gap-2 bg-slate-900 text-white px-5 py-2 rounded-md transition-colors hover:bg-slate-800 shadow-md shadow-slate-200"
          >
            <Phone className="w-4 h-4" /> Contact Sales
          </Link>
        </div>
      </div>
    </nav>
  );
}