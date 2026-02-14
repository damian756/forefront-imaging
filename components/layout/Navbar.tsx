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
      {/* Top Bar - Studio Status */}
      <div className="fixed top-0 w-full z-50 studio-border border-b py-2.5 text-xs backdrop-blur-md" style={{ background: 'var(--graphite)' }}>
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-warm-gray">
              <Phone className="w-3 h-3 text-bronze" />
              <span className="font-semibold">Coming soon</span>
            </div>
            <div className="hidden md:flex items-center gap-2 text-warm-gray">
              <Mail className="w-3 h-3 text-bronze" />
              <span className="font-semibold">Coming soon</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="status-indicator connected" />
            <span className="font-semibold uppercase tracking-wider text-bronze">READY</span>
          </div>
        </div>
      </div>
      
      {/* Main Navbar - Premium Control Surface */}
      <nav 
        className={`fixed top-[40px] w-full z-50 transition-all duration-500 backdrop-blur-md studio-border border-b ${
          isScrolled 
            ? 'py-3 glow-bronze' 
            : 'py-4'
        }`}
        style={{ background: 'var(--graphite)' }}
      >
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          {/* Logo - Studio Brand */}
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div 
              className="p-2.5 rounded-lg port-module brushed-metal"
              style={{ width: '50px', height: '50px' }}
              whileHover={{ scale: 1.08, rotate: 3 }}
              transition={{ duration: 0.4 }}
            >
              <div className="w-full h-full flex items-center justify-center">
                <Plug className="w-6 h-6 text-bronze" />
              </div>
            </motion.div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-soft-white tracking-tight group-hover:text-gradient transition-all uppercase">
                StreamTek
              </span>
              <span className="text-[10px] text-bronze uppercase tracking-widest font-semibold -mt-1">
                STUDIO HARDWARE
              </span>
            </div>
          </Link>

        {/* Desktop Menu - Refined Controls */}
        <div className="hidden lg:flex items-center gap-8">
          <Link href="/" className="text-warm-gray hover:text-bronze font-semibold text-sm transition-all relative group uppercase tracking-wide">
            Home
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-bronze group-hover:w-full transition-all duration-300" />
          </Link>

          {/* Products Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <button className="text-warm-gray hover:text-bronze font-semibold text-sm transition-all flex items-center gap-1 relative group uppercase tracking-wide">
              Products 
              <motion.div animate={{ rotate: productsOpen ? 180 : 0 }}>
                <ChevronDown className="w-4 h-4" />
              </motion.div>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-bronze group-hover:w-full transition-all duration-300" />
            </button>
            <AnimatePresence>
              {productsOpen && (
                <motion.div
                  className="absolute top-full left-0 mt-2 w-64 port-module brushed-metal shadow-2xl overflow-hidden"
                  initial={{ opacity: 0, y: -10, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.96 }}
                  transition={{ duration: 0.3 }}
                >
                  {productCategories.map((cat) => (
                    <Link
                      key={cat.name}
                      href={cat.href}
                      className={`block px-4 py-3 text-sm hover:bg-bronze/10 transition-all relative group uppercase tracking-wide ${
                        cat.featured 
                          ? 'text-bronze studio-border border-t font-bold' 
                          : 'text-warm-gray hover:text-soft-white font-semibold'
                      }`}
                    >
                      {cat.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/how-it-works" className="text-warm-gray hover:text-bronze font-semibold text-sm transition-all relative group uppercase tracking-wide">
            How It Works
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-bronze group-hover:w-full transition-all duration-300" />
          </Link>

          {/* Resources Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setResourcesOpen(true)}
            onMouseLeave={() => setResourcesOpen(false)}
          >
            <button className="text-warm-gray hover:text-bronze font-semibold text-sm transition-all flex items-center gap-1 relative group uppercase tracking-wide">
              Resources 
              <motion.div animate={{ rotate: resourcesOpen ? 180 : 0 }}>
                <ChevronDown className="w-4 h-4" />
              </motion.div>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-bronze group-hover:w-full transition-all duration-300" />
            </button>
            <AnimatePresence>
              {resourcesOpen && (
                <motion.div
                  className="absolute top-full right-0 mt-2 w-52 port-module brushed-metal shadow-2xl overflow-hidden"
                  initial={{ opacity: 0, y: -10, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.96 }}
                  transition={{ duration: 0.3 }}
                >
                  {resources.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-3 text-sm text-warm-gray hover:text-soft-white hover:bg-bronze/10 transition-all font-semibold uppercase tracking-wide"
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
            className="relative text-warm-gray hover:text-bronze transition-all group"
          >
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <ShoppingCart className="w-6 h-6" />
            </motion.div>
            {totalItems > 0 && (
              <motion.span 
                className="absolute -top-2 -right-2 text-soft-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center"
                style={{ 
                  background: 'linear-gradient(135deg, var(--deep-burgundy), var(--muted-burgundy))', 
                  boxShadow: '0 0 12px rgba(153, 27, 27, 0.5)' 
                }}
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
            className="btn-primary px-6 py-3 text-xs uppercase flex items-center gap-2 tracking-wide"
          >
            <Phone className="w-4 h-4" />
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-soft-white p-2"
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
            className="lg:hidden glass-panel studio-border border-t"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 py-6 space-y-4">
              <Link href="/" className="block text-warm-gray hover:text-bronze font-semibold text-sm transition-all uppercase tracking-wide">Home</Link>
              <Link href="/products" className="block text-warm-gray hover:text-bronze font-semibold text-sm transition-all uppercase tracking-wide">Products</Link>
              <Link href="/how-it-works" className="block text-warm-gray hover:text-bronze font-semibold text-sm transition-all uppercase tracking-wide">How It Works</Link>
              <Link href="/support" className="block text-warm-gray hover:text-bronze font-semibold text-sm transition-all uppercase tracking-wide">Support</Link>
              <Link href="/cart" className="flex items-center gap-2 text-warm-gray hover:text-bronze font-semibold text-sm transition-all uppercase tracking-wide">
                <ShoppingCart className="w-5 h-5" />
                Cart {totalItems > 0 && `(${totalItems})`}
              </Link>
              <Link href="/contact" className="block text-soft-white text-center py-4 rounded-lg font-bold uppercase mt-4 btn-primary tracking-wide">
                CONTACT US
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}