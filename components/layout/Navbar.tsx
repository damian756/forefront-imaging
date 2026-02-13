"use client";
import Link from "next/link";
import { useState } from "react";
import { Phone, ShieldCheck, ChevronDown, Menu, X, ShoppingCart, Mail, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/contexts/CartContext";

export default function Navbar() {
  const { totalItems } = useCart();
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
    { name: "View All USB Capture", href: "/products", featured: true },
    { name: "HDMI Capture", href: "/products?category=USB+Capture" },
    { name: "SDI Capture", href: "/products?category=USB+Capture" },
    { name: "Multi-Input Capture", href: "/products?category=USB+Capture" }
  ];

  const resources = [
    { name: "Support", href: "/support" },
    { name: "Downloads", href: "/downloads" },
    { name: "Knowledge Base", href: "/knowledge-base" },
    { name: "Video Tutorials", href: "/tutorials" }
  ];

  return (
    <>
      {/* Tech Top Bar */}
      <div className="fixed top-0 w-full z-50 glass border-b border-cyan-500/20 py-2 text-xs font-mono">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-slate-400">
              <Phone className="w-3 h-3 text-cyan-400" />
              <span>01704 635785</span>
            </div>
            <div className="hidden md:flex items-center gap-2 text-slate-400">
              <Mail className="w-3 h-3 text-cyan-400" />
              <span>hello@churchtownmedia.co.uk</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <motion.div 
              className="w-2 h-2 rounded-full bg-green-400"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-green-400 font-bold">SYSTEM ONLINE</span>
          </div>
        </div>
      </div>
      
      {/* Main Navbar */}
      <nav 
        className={`fixed top-[36px] w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'glass backdrop-blur-xl border-b border-cyan-500/30 py-3' 
            : 'glass border-b border-cyan-500/10 py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="p-2 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600 text-white neon-cyan">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold text-white tracking-tight">
                StreamTek
              </span>
              <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest -mt-1">
                USB Video Capture
              </span>
            </div>
          </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          <Link href="/" className="text-slate-300 hover:text-cyan-400 font-medium transition-colors">
            Home
          </Link>

          {/* Products Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <button className="text-slate-300 hover:text-cyan-400 font-medium transition-colors flex items-center gap-1">
              Products <ChevronDown className={`w-4 h-4 transition-transform ${productsOpen ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {productsOpen && (
                <motion.div
                  className="absolute top-full left-0 mt-2 w-56 glass border border-cyan-500/30 rounded-xl shadow-xl overflow-hidden"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  {productCategories.map((cat) => (
                    <Link
                      key={cat.name}
                      href={cat.href}
                      className={`block px-4 py-3 text-sm hover:bg-cyan-500/10 transition-colors ${
                        cat.featured 
                          ? 'text-cyan-400 font-bold border-t border-cyan-500/20' 
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

          <Link href="/how-it-works" className="text-slate-300 hover:text-cyan-400 font-medium transition-colors">
            How It Works
          </Link>

          {/* Resources Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setResourcesOpen(true)}
            onMouseLeave={() => setResourcesOpen(false)}
          >
            <button className="text-slate-300 hover:text-cyan-400 font-medium transition-colors flex items-center gap-1">
              Resources <ChevronDown className={`w-4 h-4 transition-transform ${resourcesOpen ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {resourcesOpen && (
                <motion.div
                  className="absolute top-full right-0 mt-2 w-48 glass border border-cyan-500/30 rounded-xl shadow-xl overflow-hidden"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  {resources.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-3 text-sm text-slate-300 hover:text-white hover:bg-cyan-500/10 transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link 
            href="/cart" 
            className="relative text-slate-300 hover:text-cyan-400 transition-colors"
          >
            <ShoppingCart className="w-6 h-6" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>

          <Link 
            href="/contact" 
            className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-5 py-2.5 rounded-lg font-bold text-sm hover:from-cyan-400 hover:to-purple-500 transition-all shadow-lg neon-cyan"
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
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="lg:hidden glass border-t border-cyan-500/30"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 py-6 space-y-4">
              <Link href="/" className="block text-slate-300 hover:text-cyan-400 font-medium">Home</Link>
              <Link href="/products" className="block text-slate-300 hover:text-cyan-400 font-medium">Products</Link>
              <Link href="/how-it-works" className="block text-slate-300 hover:text-cyan-400 font-medium">How It Works</Link>
              <Link href="/support" className="block text-slate-300 hover:text-cyan-400 font-medium">Support</Link>
              <Link href="/cart" className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 font-medium">
                <ShoppingCart className="w-5 h-5" />
                Cart {totalItems > 0 && `(${totalItems})`}
              </Link>
              <Link href="/contact" className="block bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-center py-3 rounded-lg font-bold mt-4">
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}