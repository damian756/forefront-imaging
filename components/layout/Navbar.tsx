"use client";
import Link from "next/link";
import { useState } from "react";
import { Phone, ShieldCheck, ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  // Scroll listener
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      setIsScrolled(window.scrollY > 20);
    });
  }

  const productCategories = [
    { name: "USB Capture", href: "/products?category=USB+Capture" },
    { name: "PCIe Capture", href: "/products?category=PCIe+Capture" },
    { name: "Encoders", href: "/products?category=Encoders" },
    { name: "NDI Converters", href: "/products?category=NDI" },
    { name: "View All Products", href: "/products", featured: true }
  ];

  const resources = [
    { name: "Support", href: "/support" },
    { name: "Downloads", href: "/downloads" },
    { name: "Knowledge Base", href: "/knowledge-base" },
    { name: "Video Tutorials", href: "/tutorials" }
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-950/95 backdrop-blur-md border-b border-blue-900/30 py-3' 
          : 'bg-slate-950/50 border-b border-white/5 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="p-2 rounded bg-blue-600 text-white">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-extrabold text-white tracking-tight uppercase">
              ForeFront
            </span>
            <span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest -mt-1">
              Magewell Distributor
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          <Link href="/" className="text-slate-300 hover:text-white font-medium transition-colors">
            Home
          </Link>

          {/* Products Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <button className="text-slate-300 hover:text-white font-medium transition-colors flex items-center gap-1">
              Products <ChevronDown className={`w-4 h-4 transition-transform ${productsOpen ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {productsOpen && (
                <motion.div
                  className="absolute top-full left-0 mt-2 w-56 bg-slate-900 border border-slate-800 rounded-lg shadow-xl overflow-hidden"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  {productCategories.map((cat) => (
                    <Link
                      key={cat.name}
                      href={cat.href}
                      className={`block px-4 py-3 text-sm hover:bg-slate-800 transition-colors ${
                        cat.featured 
                          ? 'text-blue-400 font-bold border-t border-slate-800' 
                          : 'text-slate-300 hover:text-white'
                      }`}
                    >
                      {cat.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/solutions" className="text-slate-300 hover:text-white font-medium transition-colors">
            Solutions
          </Link>

          {/* Resources Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setResourcesOpen(true)}
            onMouseLeave={() => setResourcesOpen(false)}
          >
            <button className="text-slate-300 hover:text-white font-medium transition-colors flex items-center gap-1">
              Resources <ChevronDown className={`w-4 h-4 transition-transform ${resourcesOpen ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {resourcesOpen && (
                <motion.div
                  className="absolute top-full right-0 mt-2 w-48 bg-slate-900 border border-slate-800 rounded-lg shadow-xl overflow-hidden"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  {resources.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-3 text-sm text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/resellers" className="text-slate-300 hover:text-white font-medium transition-colors">
            Resellers
          </Link>

          <Link 
            href="/contact" 
            className="flex items-center gap-2 bg-white text-slate-950 px-5 py-2.5 rounded-md font-bold text-sm hover:bg-blue-50 transition-all shadow-lg"
          >
            <Phone className="w-4 h-4" />
            <span>Contact</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="lg:hidden bg-slate-900 border-t border-slate-800"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 py-6 space-y-4">
              <Link href="/" className="block text-slate-300 hover:text-white font-medium">Home</Link>
              <Link href="/products" className="block text-slate-300 hover:text-white font-medium">Products</Link>
              <Link href="/solutions" className="block text-slate-300 hover:text-white font-medium">Solutions</Link>
              <Link href="/support" className="block text-slate-300 hover:text-white font-medium">Support</Link>
              <Link href="/resellers" className="block text-slate-300 hover:text-white font-medium">Resellers</Link>
              <Link href="/contact" className="block bg-blue-600 text-white text-center py-3 rounded-md font-bold mt-4">
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}