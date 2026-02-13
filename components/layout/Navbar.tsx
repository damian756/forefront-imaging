"use client";
import Link from "next/link";
import { useState } from "react";
import { Phone, ChevronDown, Menu, X, ShoppingCart, Mail, Radio } from "lucide-react";
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
      {/* Streaming Top Bar */}
      <div className="fixed top-0 w-full z-50 stream-glass border-b border-purple-500/20 py-2.5 text-xs font-mono">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors">
              <Phone className="w-3 h-3 text-purple-400" />
              <span className="font-semibold">01704 635785</span>
            </div>
            <div className="hidden md:flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors">
              <Mail className="w-3 h-3 text-purple-400" />
              <span className="font-semibold">hello@churchtownmedia.co.uk</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <motion.div 
              className="w-2.5 h-2.5 rounded-full live-indicator"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <span className="font-bold uppercase tracking-wider text-red-400">LIVE</span>
          </div>
        </div>
      </div>
      
      {/* Main Navbar - Streaming */}
      <nav 
        className={`fixed top-[40px] w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'stream-glass backdrop-blur-2xl border-b border-purple-500/40 py-3 stream-glow' 
            : 'stream-glass border-b border-purple-500/20 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          {/* Logo - Streaming */}
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div 
              className="p-2.5 rounded-xl twitch-gradient text-white stream-glow"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <Radio className="w-6 h-6" />
            </motion.div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white tracking-tight group-hover:stream-text transition-all">
                StreamTek
              </span>
              <span className="text-[10px] font-mono text-purple-400 uppercase tracking-wider font-semibold -mt-1">
                USB VIDEO CAPTURE
              </span>
            </div>
          </Link>

        {/* Desktop Menu - Streaming */}
        <div className="hidden lg:flex items-center gap-8">
          <Link href="/" className="text-gray-300 hover:stream-text font-semibold text-sm transition-all relative group">
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-green-500 group-hover:w-full transition-all duration-300" />
          </Link>

          {/* Products Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <button className="text-gray-300 hover:stream-text font-semibold text-sm transition-all flex items-center gap-1 relative group">
              Products 
              <motion.div animate={{ rotate: productsOpen ? 180 : 0 }}>
                <ChevronDown className="w-4 h-4" />
              </motion.div>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-green-500 group-hover:w-full transition-all duration-300" />
            </button>
            <AnimatePresence>
              {productsOpen && (
                <motion.div
                  className="absolute top-full left-0 mt-2 w-64 stream-glass border border-purple-500/30 rounded-2xl shadow-2xl overflow-hidden stream-glow"
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  {productCategories.map((cat) => (
                    <Link
                      key={cat.name}
                      href={cat.href}
                      className={`block px-4 py-3 text-sm hover:bg-purple-500/20 transition-all relative group ${
                        cat.featured 
                          ? 'stream-text border-t border-purple-500/30 font-bold' 
                          : 'text-gray-300 hover:text-white font-semibold'
                      }`}
                    >
                      <span className="relative z-10">{cat.name}</span>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/how-it-works" className="text-gray-300 hover:stream-text font-semibold text-sm transition-all relative group">
            How It Works
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-green-500 group-hover:w-full transition-all duration-300" />
          </Link>

          {/* Resources Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setResourcesOpen(true)}
            onMouseLeave={() => setResourcesOpen(false)}
          >
            <button className="text-gray-300 hover:stream-text font-semibold text-sm transition-all flex items-center gap-1 relative group">
              Resources 
              <motion.div animate={{ rotate: resourcesOpen ? 180 : 0 }}>
                <ChevronDown className="w-4 h-4" />
              </motion.div>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-green-500 group-hover:w-full transition-all duration-300" />
            </button>
            <AnimatePresence>
              {resourcesOpen && (
                <motion.div
                  className="absolute top-full right-0 mt-2 w-52 stream-glass border border-purple-500/30 rounded-2xl shadow-2xl overflow-hidden stream-glow"
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  {resources.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-purple-500/20 transition-all relative group font-semibold"
                    >
                      <span className="relative z-10">{item.name}</span>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link 
            href="/cart" 
            className="relative text-gray-300 hover:text-purple-400 transition-all group"
          >
            <motion.div whileHover={{ scale: 1.1, rotate: 5 }} whileTap={{ scale: 0.9 }}>
              <ShoppingCart className="w-6 h-6" />
            </motion.div>
            {totalItems > 0 && (
              <motion.span 
                className="absolute -top-2 -right-2 notification-badge text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              >
                {totalItems}
              </motion.span>
            )}
          </Link>

          <Link 
            href="/contact" 
            className="flex items-center gap-2 twitch-gradient text-white px-6 py-3 rounded-xl font-bold text-sm hover:scale-105 transition-all shadow-lg stream-glow relative overflow-hidden"
          >
            <Phone className="w-4 h-4 relative z-10" />
            <span className="relative z-10">Contact</span>
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

      {/* Mobile Menu - Streaming */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="lg:hidden stream-glass border-t border-purple-500/30"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 py-6 space-y-4">
              <Link href="/" className="block text-gray-300 hover:stream-text font-semibold text-sm transition-all">Home</Link>
              <Link href="/products" className="block text-gray-300 hover:stream-text font-semibold text-sm transition-all">Products</Link>
              <Link href="/how-it-works" className="block text-gray-300 hover:stream-text font-semibold text-sm transition-all">How It Works</Link>
              <Link href="/support" className="block text-gray-300 hover:stream-text font-semibold text-sm transition-all">Support</Link>
              <Link href="/cart" className="flex items-center gap-2 text-gray-300 hover:stream-text font-semibold text-sm transition-all">
                <ShoppingCart className="w-5 h-5" />
                Cart {totalItems > 0 && `(${totalItems})`}
              </Link>
              <Link href="/contact" className="block twitch-gradient text-white text-center py-4 rounded-xl font-bold uppercase mt-4 stream-glow">
                CONTACT US
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}