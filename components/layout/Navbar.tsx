"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Phone, Menu, X, ShoppingCart, Plug } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/contexts/CartContext";

export default function Navbar() {
  const { totalItems } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
          isScrolled
            ? 'py-2 border-fiber-blue/30 shadow-lg shadow-black/30'
            : 'py-3 border-fiber-blue/15'
        }`}
        style={{ background: 'rgba(15, 22, 41, 0.92)', backdropFilter: 'blur(16px) saturate(120%)' }}
      >
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="p-2 rounded-lg border border-fiber-blue/25 bg-dark-blue/60">
              <Plug className="w-5 h-5 text-fiber-cyan" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-soft-white tracking-tight group-hover:text-fiber-cyan transition-colors uppercase">
                StreamTek
              </span>
              <span className="text-[9px] text-fiber-cyan/70 uppercase tracking-widest font-semibold -mt-0.5">
                Studio Hardware
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1">
            <NavLink href="/">Home</NavLink>

            <NavLink href="/products">Products</NavLink>

            <NavLink href="/how-it-works">How It Works</NavLink>
            <NavLink href="/support">Support</NavLink>
            <NavLink href="/downloads">Downloads</NavLink>
            <NavLink href="/knowledge-base">Guides</NavLink>

            {/* Cart */}
            <Link href="/cart" className="relative px-3 py-2 text-cool-gray hover:text-fiber-cyan transition-colors">
              <ShoppingCart className="w-5 h-5" />
              {totalItems > 0 && (
                <span
                  className="absolute -top-0.5 right-0.5 text-soft-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center bg-neon-blue"
                  style={{ boxShadow: '0 0 8px rgba(37, 99, 235, 0.6)' }}
                >
                  {totalItems}
                </span>
              )}
            </Link>

            {/* Contact CTA */}
            <Link
              href="/contact"
              className="ml-2 btn-primary px-5 py-2 text-xs flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5" />
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
            className="fixed inset-x-0 top-[56px] z-40 lg:hidden border-b border-fiber-blue/25"
            style={{ background: 'rgba(15, 22, 41, 0.97)', backdropFilter: 'blur(20px)' }}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="px-4 py-5 space-y-1">
              <MobileLink href="/" onClick={() => setMobileMenuOpen(false)}>Home</MobileLink>
              <MobileLink href="/products" onClick={() => setMobileMenuOpen(false)}>Products</MobileLink>
              <MobileLink href="/how-it-works" onClick={() => setMobileMenuOpen(false)}>How It Works</MobileLink>
              <MobileLink href="/support" onClick={() => setMobileMenuOpen(false)}>Support</MobileLink>
              <MobileLink href="/downloads" onClick={() => setMobileMenuOpen(false)}>Downloads</MobileLink>
              <MobileLink href="/knowledge-base" onClick={() => setMobileMenuOpen(false)}>Guides</MobileLink>
              <MobileLink href="/cart" onClick={() => setMobileMenuOpen(false)}>
                Cart {totalItems > 0 && `(${totalItems})`}
              </MobileLink>
              <div className="pt-3">
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-center py-3 rounded-lg font-semibold text-sm uppercase btn-primary"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="px-3 py-2 rounded-lg text-sm font-medium text-cool-gray hover:text-soft-white hover:bg-fiber-blue/10 transition-all"
    >
      {children}
    </Link>
  );
}

function MobileLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick: () => void }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block px-3 py-3 rounded-lg text-sm font-medium text-cool-gray hover:text-soft-white hover:bg-fiber-blue/10 transition-colors"
    >
      {children}
    </Link>
  );
}
