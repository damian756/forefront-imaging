"use client";
import Link from "next/link";
import { useState } from "react";
import { Phone, ChevronDown, Menu, X, ShoppingCart, Mail, Satellite } from "lucide-react";
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
      {/* Space Top Bar */}
      <div className="fixed top-0 w-full z-50 planet-card border-b border-green-500/30 py-2.5 text-xs">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors">
              <Phone className="w-3 h-3 pcb-text" />
              <span className="font-semibold">01704 635785</span>
            </div>
            <div className="hidden md:flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors">
              <Mail className="w-3 h-3 pcb-text" />
              <span className="font-semibold">hello@churchtownmedia.co.uk</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="led-star" />
            <span className="font-bold uppercase tracking-wider text-green-400 space-text">SYSTEM ONLINE</span>
          </div>
        </div>
      </div>
      
      {/* Main Navbar - PCB Space */}
      <nav 
        className={`fixed top-[40px] w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'planet-card backdrop-blur-2xl border-b border-green-500/50 py-3' 
            : 'planet-card border-b border-green-500/30 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          {/* Logo - Space PCB */}
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div 
              className="p-2.5 rounded-xl planet-surface planet-glow relative"
              style={{ width: '50px', height: '50px' }}
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <div className="copper-traces" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Satellite className="w-6 h-6 pcb-text relative z-10" />
              </div>
            </motion.div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white tracking-tight group-hover:pcb-text transition-all uppercase space-text">
                StreamTek
              </span>
              <span className="text-[10px] pcb-text uppercase tracking-widest font-semibold -mt-1 space-text">
                PCB SOLAR SYSTEM
              </span>
            </div>
          </Link>

        {/* Desktop Menu - Space PCB */}
        <div className="hidden lg:flex items-center gap-8">
          <Link href="/" className="text-gray-300 hover:pcb-text font-semibold text-sm transition-all relative group uppercase space-text">
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-500 group-hover:w-full transition-all duration-300 shadow-[0_0_5px_rgba(0,255,136,0.8)]" />
          </Link>

          {/* Products Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <button className="text-gray-300 hover:pcb-text font-semibold text-sm transition-all flex items-center gap-1 relative group uppercase space-text">
              Products 
              <motion.div animate={{ rotate: productsOpen ? 180 : 0 }}>
                <ChevronDown className="w-4 h-4" />
              </motion.div>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-500 group-hover:w-full transition-all duration-300 shadow-[0_0_5px_rgba(0,255,136,0.8)]" />
            </button>
            <AnimatePresence>
              {productsOpen && (
                <motion.div
                  className="absolute top-full left-0 mt-2 w-64 planet-card circuit-border rounded-xl shadow-2xl overflow-hidden"
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  {productCategories.map((cat) => (
                    <Link
                      key={cat.name}
                      href={cat.href}
                      className={`block px-4 py-3 text-sm hover:bg-green-500/20 transition-all relative group uppercase space-text ${
                        cat.featured 
                          ? 'pcb-text border-t border-green-500/50 font-bold' 
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

          <Link href="/how-it-works" className="text-gray-300 hover:pcb-text font-semibold text-sm transition-all relative group uppercase space-text">
            How It Works
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-500 group-hover:w-full transition-all duration-300 shadow-[0_0_5px_rgba(0,255,136,0.8)]" />
          </Link>

          {/* Resources Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setResourcesOpen(true)}
            onMouseLeave={() => setResourcesOpen(false)}
          >
            <button className="text-gray-300 hover:pcb-text font-semibold text-sm transition-all flex items-center gap-1 relative group uppercase space-text">
              Resources 
              <motion.div animate={{ rotate: resourcesOpen ? 180 : 0 }}>
                <ChevronDown className="w-4 h-4" />
              </motion.div>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-500 group-hover:w-full transition-all duration-300 shadow-[0_0_5px_rgba(0,255,136,0.8)]" />
            </button>
            <AnimatePresence>
              {resourcesOpen && (
                <motion.div
                  className="absolute top-full right-0 mt-2 w-52 planet-card circuit-border rounded-xl shadow-2xl overflow-hidden"
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  {resources.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-green-500/20 transition-all relative group font-semibold uppercase space-text"
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
            className="relative text-gray-300 hover:text-green-400 transition-all group"
          >
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <ShoppingCart className="w-6 h-6" />
            </motion.div>
            {totalItems > 0 && (
              <motion.span 
                className="absolute -top-2 -right-2 text-black text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center space-text"
                style={{ background: '#00ff88', boxShadow: '0 0 15px #00ff88' }}
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
            className="flex items-center gap-2 text-white px-6 py-3 rounded-xl font-bold text-sm hover:scale-105 transition-all shadow-lg space-button relative overflow-hidden uppercase space-text"
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

      {/* Mobile Menu - Space PCB */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="lg:hidden planet-card border-t border-green-500/50"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 py-6 space-y-4">
              <Link href="/" className="block text-gray-300 hover:pcb-text font-semibold text-sm transition-all uppercase space-text">Home</Link>
              <Link href="/products" className="block text-gray-300 hover:pcb-text font-semibold text-sm transition-all uppercase space-text">Products</Link>
              <Link href="/how-it-works" className="block text-gray-300 hover:pcb-text font-semibold text-sm transition-all uppercase space-text">How It Works</Link>
              <Link href="/support" className="block text-gray-300 hover:pcb-text font-semibold text-sm transition-all uppercase space-text">Support</Link>
              <Link href="/cart" className="flex items-center gap-2 text-gray-300 hover:pcb-text font-semibold text-sm transition-all uppercase space-text">
                <ShoppingCart className="w-5 h-5" />
                Cart {totalItems > 0 && `(${totalItems})`}
              </Link>
              <Link href="/contact" className="block text-white text-center py-4 rounded-xl font-bold uppercase mt-4 space-button relative overflow-hidden">
                <span className="relative z-10">CONTACT US</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}