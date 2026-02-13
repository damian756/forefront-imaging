"use client";
import Link from "next/link";
import { useState } from "react";
import { Phone, ShieldCheck, ChevronDown, Menu, X, ShoppingCart, Mail, Trophy, Zap } from "lucide-react";
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
      {/* Gaming Top Bar */}
      <div className="fixed top-0 w-full z-50 gaming-glass border-b border-cyan-500/30 py-2.5 text-xs font-mono">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors">
              <Phone className="w-3 h-3 text-cyan-400" />
              <span className="font-bold">01704 635785</span>
            </div>
            <div className="hidden md:flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors">
              <Mail className="w-3 h-3 text-cyan-400" />
              <span className="font-bold">hello@churchtownmedia.co.uk</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <motion.div 
              className="w-2.5 h-2.5 rounded-full health-bar"
              animate={{ scale: [1, 1.4, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <span className="font-black uppercase tracking-wider" style={{ color: '#00ff41' }}>LIVE</span>
          </div>
        </div>
      </div>
      
      {/* Main Navbar - Gaming */}
      <nav 
        className={`fixed top-[40px] w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'gaming-glass backdrop-blur-2xl border-b border-cyan-500/50 py-3 rgb-underglow' 
            : 'gaming-glass border-b border-cyan-500/20 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          {/* Logo - Gaming */}
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div 
              className="p-2.5 rounded-xl bg-gradient-to-br from-cyan-500 via-pink-600 to-green-500 text-white rgb-underglow"
              whileHover={{ scale: 1.15, rotate: 10 }}
              transition={{ duration: 0.3 }}
            >
              <Zap className="w-6 h-6" />
            </motion.div>
            <div className="flex flex-col">
              <span className="text-2xl font-black text-white tracking-tight group-hover:gaming-text transition-all">
                STREAMTEK
              </span>
              <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest font-black -mt-1">
                PRO USB CAPTURE
              </span>
            </div>
          </Link>

        {/* Desktop Menu - Gaming */}
        <div className="hidden lg:flex items-center gap-8">
          <Link href="/" className="text-slate-300 hover:gaming-text font-bold uppercase text-sm transition-all relative group">
            Home
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-cyan-400 via-pink-600 to-green-500 group-hover:w-full transition-all duration-300" />
          </Link>

          {/* Products Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <button className="text-slate-300 hover:gaming-text font-bold uppercase text-sm transition-all flex items-center gap-1 relative group">
              Products 
              <motion.div animate={{ rotate: productsOpen ? 180 : 0 }}>
                <ChevronDown className="w-4 h-4" />
              </motion.div>
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-cyan-400 via-pink-600 to-green-500 group-hover:w-full transition-all duration-300" />
            </button>
            <AnimatePresence>
              {productsOpen && (
                <motion.div
                  className="absolute top-full left-0 mt-2 w-64 gaming-glass border-2 border-cyan-500/50 rounded-2xl shadow-2xl overflow-hidden rgb-underglow"
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  {productCategories.map((cat) => (
                    <Link
                      key={cat.name}
                      href={cat.href}
                      className={`block px-4 py-3 text-sm hover:bg-cyan-500/20 transition-all relative group font-bold uppercase ${
                        cat.featured 
                          ? 'gaming-text border-t-2 border-cyan-500/30' 
                          : 'text-slate-300 hover:text-white'
                      }`}
                    >
                      <span className="relative z-10">{cat.name}</span>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100"
                        initial={{ x: '-100%' }}
                        whileHover={{ x: '100%' }}
                        transition={{ duration: 0.5 }}
                      />
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/how-it-works" className="text-slate-300 hover:gaming-text font-bold uppercase text-sm transition-all relative group">
            How It Works
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-cyan-400 via-pink-600 to-green-500 group-hover:w-full transition-all duration-300" />
          </Link>

          {/* Resources Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setResourcesOpen(true)}
            onMouseLeave={() => setResourcesOpen(false)}
          >
            <button className="text-slate-300 hover:gaming-text font-bold uppercase text-sm transition-all flex items-center gap-1 relative group">
              Resources 
              <motion.div animate={{ rotate: resourcesOpen ? 180 : 0 }}>
                <ChevronDown className="w-4 h-4" />
              </motion.div>
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-cyan-400 via-pink-600 to-green-500 group-hover:w-full transition-all duration-300" />
            </button>
            <AnimatePresence>
              {resourcesOpen && (
                <motion.div
                  className="absolute top-full right-0 mt-2 w-52 gaming-glass border-2 border-cyan-500/50 rounded-2xl shadow-2xl overflow-hidden rgb-underglow"
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  {resources.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-3 text-sm text-slate-300 hover:text-white hover:bg-cyan-500/20 transition-all relative group font-bold uppercase"
                    >
                      <span className="relative z-10">{item.name}</span>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-500/20 to-transparent opacity-0 group-hover:opacity-100"
                        initial={{ x: '-100%' }}
                        whileHover={{ x: '100%' }}
                        transition={{ duration: 0.5 }}
                      />
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link 
            href="/cart" 
            className="relative text-slate-300 hover:text-cyan-400 transition-all group"
          >
            <motion.div whileHover={{ scale: 1.15, rotate: 10 }} whileTap={{ scale: 0.9 }}>
              <ShoppingCart className="w-6 h-6" />
            </motion.div>
            {totalItems > 0 && (
              <motion.span 
                className="absolute -top-2 -right-2 bg-gradient-to-r from-cyan-500 via-pink-600 to-green-500 text-white text-xs font-black rounded-full w-6 h-6 flex items-center justify-center rgb-underglow"
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
            className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 via-pink-600 to-green-500 text-white px-6 py-3 rounded-xl font-black text-sm uppercase tracking-wider hover:scale-105 transition-all shadow-lg rgb-underglow relative overflow-hidden group"
          >
            <Phone className="w-4 h-4 relative z-10" />
            <span className="relative z-10">CONTACT</span>
            <motion.div
              className="absolute inset-0 bg-white/30"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.5 }}
            />
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

      {/* Mobile Menu - Gaming */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="lg:hidden gaming-glass border-t-2 border-cyan-500/50"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 py-6 space-y-4">
              <Link href="/" className="block text-slate-300 hover:gaming-text font-black uppercase text-sm transition-all">Home</Link>
              <Link href="/products" className="block text-slate-300 hover:gaming-text font-black uppercase text-sm transition-all">Products</Link>
              <Link href="/how-it-works" className="block text-slate-300 hover:gaming-text font-black uppercase text-sm transition-all">How It Works</Link>
              <Link href="/support" className="block text-slate-300 hover:gaming-text font-black uppercase text-sm transition-all">Support</Link>
              <Link href="/cart" className="flex items-center gap-2 text-slate-300 hover:gaming-text font-black uppercase text-sm transition-all">
                <ShoppingCart className="w-5 h-5" />
                Cart {totalItems > 0 && `(${totalItems})`}
              </Link>
              <Link href="/contact" className="block bg-gradient-to-r from-cyan-500 via-pink-600 to-green-500 text-white text-center py-4 rounded-xl font-black uppercase mt-4 rgb-underglow relative overflow-hidden group">
                <span className="relative z-10">CONTACT US</span>
                <motion.div
                  className="absolute inset-0 bg-white/30"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.5 }}
                />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}