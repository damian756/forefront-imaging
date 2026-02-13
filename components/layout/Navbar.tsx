"use client";
import Link from "next/link";
import { useState } from "react";
import { Phone, ChevronDown, Menu, X, ShoppingCart, Mail, Plug } from "lucide-react";
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
      {/* Top Bar */}
      <div className="fixed top-0 w-full z-50 glass-panel border-b border-gray-700/50 py-2.5 text-xs">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors">
              <Phone className="w-3 h-3 text-cyan-400" />
              <span className="font-semibold">01704 635785</span>
            </div>
            <div className="hidden md:flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors">
              <Mail className="w-3 h-3 text-cyan-400" />
              <span className="font-semibold">hello@churchtownmedia.co.uk</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="status-indicator connected" />
            <span className="font-bold uppercase tracking-wider text-green-400">SYSTEM READY</span>
          </div>
        </div>
      </div>
      
      {/* Main Navbar */}
      <nav 
        className={`fixed top-[40px] w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'glass-panel backdrop-blur-2xl border-b border-gray-700 py-3 glow-cyan' 
            : 'glass-panel border-b border-gray-800 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div 
              className="p-2.5 rounded-xl port-module"
              style={{ width: '50px', height: '50px' }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-full h-full flex items-center justify-center">
                <Plug className="w-6 h-6 text-cyan-400" />
              </div>
            </motion.div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white tracking-tight group-hover:text-gradient transition-all uppercase">
                StreamTek
              </span>
              <span className="text-[10px] text-cyan-400 uppercase tracking-widest font-semibold -mt-1">
                MODULAR CAPTURE
              </span>
            </div>
          </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          <Link href="/" className="text-gray-300 hover:text-cyan-400 font-semibold text-sm transition-all relative group uppercase">
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-500 group-hover:w-full transition-all duration-300" />
          </Link>

          {/* Products Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <button className="text-gray-300 hover:text-cyan-400 font-semibold text-sm transition-all flex items-center gap-1 relative group uppercase">
              Products 
              <motion.div animate={{ rotate: productsOpen ? 180 : 0 }}>
                <ChevronDown className="w-4 h-4" />
              </motion.div>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-500 group-hover:w-full transition-all duration-300" />
            </button>
            <AnimatePresence>
              {productsOpen && (
                <motion.div
                  className="absolute top-full left-0 mt-2 w-64 port-module shadow-2xl overflow-hidden"
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
                          ? 'text-cyan-400 border-t border-gray-700 font-bold' 
                          : 'text-gray-300 hover:text-white font-semibold'
                      }`}
                    >
                      {cat.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/how-it-works" className="text-gray-300 hover:text-cyan-400 font-semibold text-sm transition-all relative group uppercase">
            How It Works
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-500 group-hover:w-full transition-all duration-300" />
          </Link>

          {/* Resources Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setResourcesOpen(true)}
            onMouseLeave={() => setResourcesOpen(false)}
          >
            <button className="text-gray-300 hover:text-cyan-400 font-semibold text-sm transition-all flex items-center gap-1 relative group uppercase">
              Resources 
              <motion.div animate={{ rotate: resourcesOpen ? 180 : 0 }}>
                <ChevronDown className="w-4 h-4" />
              </motion.div>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-500 group-hover:w-full transition-all duration-300" />
            </button>
            <AnimatePresence>
              {resourcesOpen && (
                <motion.div
                  className="absolute top-full right-0 mt-2 w-52 port-module shadow-2xl overflow-hidden"
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  {resources.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-cyan-500/20 transition-all font-semibold uppercase"
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
            className="relative text-gray-300 hover:text-cyan-400 transition-all group"
          >
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <ShoppingCart className="w-6 h-6" />
            </motion.div>
            {totalItems > 0 && (
              <motion.span 
                className="absolute -top-2 -right-2 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #00d4ff, #9d4edd)', boxShadow: '0 0 15px rgba(0, 212, 255, 0.5)' }}
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
            className="btn-primary px-6 py-3 text-sm uppercase flex items-center gap-2"
          >
            <Phone className="w-4 h-4" />
            Contact
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
            className="lg:hidden glass-panel border-t border-gray-700"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 py-6 space-y-4">
              <Link href="/" className="block text-gray-300 hover:text-cyan-400 font-semibold text-sm transition-all uppercase">Home</Link>
              <Link href="/products" className="block text-gray-300 hover:text-cyan-400 font-semibold text-sm transition-all uppercase">Products</Link>
              <Link href="/how-it-works" className="block text-gray-300 hover:text-cyan-400 font-semibold text-sm transition-all uppercase">How It Works</Link>
              <Link href="/support" className="block text-gray-300 hover:text-cyan-400 font-semibold text-sm transition-all uppercase">Support</Link>
              <Link href="/cart" className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 font-semibold text-sm transition-all uppercase">
                <ShoppingCart className="w-5 h-5" />
                Cart {totalItems > 0 && `(${totalItems})`}
              </Link>
              <Link href="/contact" className="block text-white text-center py-4 rounded-xl font-bold uppercase mt-4 btn-primary">
                CONTACT US
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}