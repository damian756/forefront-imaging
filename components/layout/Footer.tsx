'use client';

import Link from "next/link";
import { Mail, MapPin, Send, Shield, Package, Truck, Facebook, Twitter, Linkedin, Youtube, Zap, Radio, CheckCircle2, Plug } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 3000);
    }
  };

  return (
    <footer className="text-cool-gray pt-16 pb-6 border-t border-fiber-blue/20 relative overflow-hidden" style={{ background: 'var(--graphite)' }}>
      {/* Subtle overlay for depth */}
      <div className="absolute inset-0 opacity-30 pointer-events-none" style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(10, 15, 25, 0.4) 100%)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Newsletter Section */}
        <motion.div
          className="mb-14 pb-12 border-b border-fiber-blue/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gradient mb-2">Stay Connected</h3>
              <p className="text-cool-gray/90 text-sm font-light max-w-md">
                Subscribe for firmware updates, technical guides, and exclusive professional equipment offers.
              </p>
            </div>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 w-full min-w-0">
              <div className="flex-1 min-w-0 relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-fiber-cyan pointer-events-none" />
                <input
                  type="email"
                  placeholder="Enter your email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full min-w-0 rounded-lg py-3.5 pl-12 pr-4 text-soft-white placeholder:text-cool-gray/50 focus:ring-2 focus:ring-fiber-cyan/40 outline-none transition-all border border-fiber-blue/30 bg-dark-blue/60"
                />
              </div>
              <motion.button
                type="submit"
                className="px-6 py-3.5 btn-primary text-soft-white font-bold rounded-lg flex items-center justify-center gap-2 shrink-0 w-full sm:w-auto"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  {subscribed ? (
                    <>
                      <CheckCircle2 className="w-5 h-5" />
                      SUBSCRIBED
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      SUBSCRIBE
                    </>
                  )}
                </span>
              </motion.button>
            </form>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-12 mb-12">
          {/* Company Info */}
          <div className="sm:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 mb-5">
              <div className="p-2.5 rounded-lg bg-dark-blue/60 border border-fiber-blue/25">
                <Plug className="w-6 h-6 text-fiber-cyan" />
              </div>
              <span className="text-xl font-bold text-soft-white">
                Stream<span className="text-gradient">Tek</span>
              </span>
            </Link>
            <p className="max-w-sm mb-5 leading-relaxed text-cool-gray/90 text-sm font-light">
              <strong className="text-fiber-cyan font-semibold">Official Magewell Distributor</strong> in the UK. Premium USB video capture hardware for broadcast studios and production professionals.
            </p>
            <div className="flex flex-wrap gap-2 mb-5">
              {[
                { icon: Shield, label: '3-YEAR WARRANTY' },
                { icon: Package, label: 'FREE UK SHIPPING' },
                { icon: Truck, label: 'NEXT DAY SHIP' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-fiber-blue/25 bg-dark-blue/40 text-fiber-cyan text-xs font-semibold">
                  <Icon className="w-3.5 h-3.5" />
                  {label}
                </div>
              ))}
            </div>
            <div className="flex gap-2">
              {[Facebook, Twitter, Linkedin, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg border border-fiber-blue/25 bg-dark-blue/40 text-cool-gray hover:text-fiber-cyan hover:border-fiber-cyan/40 flex items-center justify-center transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-soft-white font-bold mb-4 text-xs uppercase tracking-wider flex items-center gap-2">
              <Zap className="w-3 h-3 text-fiber-cyan" />
              Products
            </h4>
            <ul className="space-y-2.5 text-sm">
              {['All USB Capture', 'HDMI Capture', 'SDI Capture', 'Multi-Input'].map((label) => (
                <li key={label}>
                  <Link href="/products" className="text-cool-gray/90 hover:text-fiber-cyan transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-soft-white font-bold mb-4 text-xs uppercase tracking-wider flex items-center gap-2">
              <Radio className="w-3 h-3 text-fiber-cyan" />
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/" className="text-cool-gray/90 hover:text-fiber-cyan transition-colors">About Us</Link></li>
              <li><Link href="/how-it-works" className="text-cool-gray/90 hover:text-fiber-cyan transition-colors">How It Works</Link></li>
              <li><Link href="/contact" className="text-cool-gray/90 hover:text-fiber-cyan transition-colors">Contact</Link></li>
              <li><Link href="/support" className="text-cool-gray/90 hover:text-fiber-cyan transition-colors">Support</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-soft-white font-bold mb-4 text-xs uppercase tracking-wider flex items-center gap-2">
              <Mail className="w-3 h-3 text-fiber-cyan" />
              Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-fiber-cyan mt-0.5 flex-shrink-0" />
                <a href="mailto:support@streamtek.co.uk" className="text-cool-gray/90 hover:text-fiber-cyan transition-colors">support@streamtek.co.uk</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-fiber-cyan mt-0.5 flex-shrink-0" />
                <span className="text-cool-gray/90">United Kingdom</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-fiber-blue/20">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-cool-gray/70">
            <div className="text-center sm:text-left">
              <p>© {currentYear} Churchtown Media Ltd. Company No. 16960442. All rights reserved.</p>
              <p className="mt-1 opacity-70">Trading as StreamTek • Professional Studio Hardware</p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              <Link href="/privacy-policy" className="hover:text-fiber-cyan transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-fiber-cyan transition-colors">Terms & Conditions</Link>
              <span className="opacity-40">|</span>
              <span className="opacity-60">Magewell® is a registered trademark</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
