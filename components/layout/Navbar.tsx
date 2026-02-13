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
      {/* Holographic Top Bar */}
      <div className="fixed top-0 w-full z-50 holo-panel border-b border-cyan-500/30 py-2.5 text-xs scan-lines">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors">
              <Phone className="w-3 h-3 holo-text" />
              <span className="font-semibold">01704 635785</span>
            </div>
            <div className="hidden md:flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors">
              <Mail className="w-3 h-3 holo-text" />
              <span className="font-semibold">hello@churchtownmedia.co.uk</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="status-online" />
            <span className="font-bold uppercase tracking-wider text-cyan-400 font-mono">TRANSMISSION ACTIVE</span>
          </div>
        </div>
      </div>
      
      {/* Main Navbar - Holographic */}
      <nav 
        className={`fixed top-[40px] w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'holo-panel backdrop-blur-2xl border-b border-cyan-500/50 py-3 holo-glow' 
            : 'holo-panel border-b border-cyan-500/30 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          {/* Logo - Holographic */}
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div 
              className="p-2.5 rounded-xl holo-border relative energy-pulse"
              style={{ background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.2), rgba(255, 107, 0, 0.2))' }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <Radio className="w-6 h-6 holo-text" />
            </motion.div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white tracking-tight group-hover:holo-text transition-all uppercase">
                StreamTek
              </span>
              <span className="text-[10px] holo-text uppercase tracking-widest font-semibold -mt-1 font-mono">
                HOLOGRAPHIC INTERFACE
              </span>
            </div>
          </Link>

        {/* Desktop Menu - Holographic */}
        <div className="hidden lg:flex items-center gap-8">
          <Link href="/" className="text-gray-300 hover:holo-text font-semibold text-sm transition-all relative group uppercase">
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-500 group-hover:w-full transition-all duration-300 holo-glow" />
          </Link>

          {/* Products Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <button className="text-gray-300 hover:holo-text font-semibold text-sm transition-all flex items-center gap-1 relative group uppercase">
              Products 
              <motion.div animate={{ rotate: productsOpen ? 180 : 0 }}>
                <ChevronDown className="w-4 h-4" />
              </motion.div>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-500 group-hover:w-full transition-all duration-300 holo-glow" />
            </button>
            <AnimatePresence>
              {productsOpen && (
                <motion.div
                  className="absolute top-full left-0 mt-2 w-64 holo-panel holo-border rounded-xl shadow-2xl overflow-hidden holo-glow static-noise"
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  {productCategories.map((cat) => (
                    <Link
                      key={cat.name}
                      href={cat.href}
                      className={`block px-4 py-3 text-sm hover:bg-cyan-500/20 transition-all relative group uppercase ${
                        cat.featured 
                          ? 'holo-text border-t border-cyan-500/50 font-bold' 
                          : 'text-gray-300 hover:text-white font-semibold'
                      }`}
                    >
                      <span className="relative z-10">{cat.name}</span>
                      <div className="absolute inset-0 transmission-line opacity-0 group-hover:opacity-100" />
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/how-it-works" className="text-gray-300 hover:holo-text font-semibold text-sm transition-all relative group uppercase">
            How It Works
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-500 group-hover:w-full transition-all duration-300 holo-glow" />
          </Link>

          {/* Resources Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setResourcesOpen(true)}
            onMouseLeave={() => setResourcesOpen(false)}
          >
            <button className="text-gray-300 hover:holo-text font-semibold text-sm transition-all flex items-center gap-1 relative group uppercase">
              Resources 
              <motion.div animate={{ rotate: resourcesOpen ? 180 : 0 }}>
                <ChevronDown className="w-4 h-4" />
              </motion.div>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-500 group-hover:w-full transition-all duration-300 holo-glow" />
            </button>
            <AnimatePresence>
              {resourcesOpen && (
                <motion.div
                  className="absolute top-full right-0 mt-2 w-52 holo-panel holo-border rounded-xl shadow-2xl overflow-hidden holo-glow static-noise"
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  {resources.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-cyan-500/20 transition-all relative group font-semibold uppercase"
                    >
                      <span className="relative z-10">{item.name}</span>
                      <div className="absolute inset-0 transmission-line opacity-0 group-hover:opacity-100" />
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link 
            href="/cart" 
            className="relative text-gray-300 hover:text-cyan-400 transition-all group"
          >
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <ShoppingCart className="w-6 h-6" />
            </motion.div>
            {totalItems > 0 && (
              <motion.span 
                className="absolute -top-2 -right-2 text-black text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center font-mono"
                style={{ background: 'linear-gradient(135deg, #00d4ff, #0080ff)', boxShadow: '0 0 15px #00d4ff' }}
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
            className="flex items-center gap-2 text-white px-6 py-3 rounded-xl font-bold text-sm hover:scale-105 transition-all shadow-lg holo-button relative overflow-hidden uppercase"
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

      {/* Mobile Menu - Holographic */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="lg:hidden holo-panel border-t border-cyan-500/50 static-noise"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 py-6 space-y-4">
              <Link href="/" className="block text-gray-300 hover:holo-text font-semibold text-sm transition-all uppercase">Home</Link>
              <Link href="/products" className="block text-gray-300 hover:holo-text font-semibold text-sm transition-all uppercase">Products</Link>
              <Link href="/how-it-works" className="block text-gray-300 hover:holo-text font-semibold text-sm transition-all uppercase">How It Works</Link>
              <Link href="/support" className="block text-gray-300 hover:holo-text font-semibold text-sm transition-all uppercase">Support</Link>
              <Link href="/cart" className="flex items-center gap-2 text-gray-300 hover:holo-text font-semibold text-sm transition-all uppercase">
                <ShoppingCart className="w-5 h-5" />
                Cart {totalItems > 0 && `(${totalItems})`}
              </Link>
              <Link href="/contact" className="block text-white text-center py-4 rounded-xl font-bold uppercase mt-4 holo-button relative overflow-hidden">
                <span className="relative z-10">CONTACT US</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}