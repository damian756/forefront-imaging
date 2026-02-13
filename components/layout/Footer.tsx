'use client';

import Link from "next/link";
import { Mail, Phone, MapPin, Send, Shield, Package, Truck, Facebook, Twitter, Linkedin, Youtube, Zap, Radio, CheckCircle2, Plug } from "lucide-react";
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
    <footer className="text-warm-gray pt-24 pb-8 studio-border border-t relative overflow-hidden" style={{ background: 'var(--graphite)' }}>
      {/* Subtle Studio Texture */}
      <div className="absolute inset-0 builder-canvas opacity-20 pointer-events-none" />
      <div className="absolute inset-0 opacity-5 brushed-metal pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Newsletter Section */}
        <motion.div 
          className="mb-20 pb-16 studio-divider"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gradient mb-3">Stay Connected</h3>
              <p className="text-warm-gray text-sm font-light">
                Subscribe for firmware updates, technical guides, and exclusive professional equipment offers
              </p>
            </div>
            <form onSubmit={handleSubscribe} className="flex gap-3">
              <div className="flex-1 relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-bronze" />
                <input
                  type="email"
                  placeholder="Enter your email address..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full glass-panel studio-border rounded-lg py-4 pl-12 pr-4 text-soft-white placeholder:text-warm-gray/50 focus:border-bronze focus:ring-2 focus:ring-bronze/20 outline-none transition-all bg-warm-charcoal/50"
                />
              </div>
              <motion.button
                type="submit"
                className="px-8 py-4 btn-primary text-soft-white font-bold rounded-lg flex items-center gap-2 transition-all relative overflow-hidden"
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 mb-6">
              <motion.div 
                className="p-2.5 rounded-lg port-module brushed-metal"
                whileHover={{ scale: 1.08, rotate: 3 }}
              >
                <Plug className="w-6 h-6 text-bronze" />
              </motion.div>
              <span className="text-2xl font-bold text-soft-white">
                Stream<span className="text-gradient">Tek</span>
              </span>
            </Link>
            <p className="max-w-md mb-6 leading-relaxed text-warm-gray text-sm font-light">
              <strong className="text-bronze font-semibold">Official Magewell Distributor</strong> in the UK. Premium USB video capture hardware 
              delivering professional-grade signal integrity for broadcast studios, content creators, and production professionals.
            </p>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3 mb-6">
              <div className="flex items-center gap-2 glass-panel studio-border text-bronze text-xs font-semibold px-3 py-2 rounded-lg">
                <Shield className="w-4 h-4" />
                3-YEAR WARRANTY
              </div>
              <div className="flex items-center gap-2 glass-panel studio-border text-bronze text-xs font-semibold px-3 py-2 rounded-lg">
                <Package className="w-4 h-4" />
                FREE UK SHIPPING
              </div>
              <div className="flex items-center gap-2 glass-panel studio-border text-bronze text-xs font-semibold px-3 py-2 rounded-lg">
                <Truck className="w-4 h-4" />
                NEXT DAY SHIP
              </div>
            </div>

            {/* Social Media */}
            <div className="flex gap-3">
              {[Facebook, Twitter, Linkedin, Youtube].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-lg glass-panel studio-border hover:border-bronze text-warm-gray hover:text-bronze flex items-center justify-center transition-all"
                  whileHover={{ y: -3, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-soft-white font-bold mb-6 text-sm uppercase tracking-wider flex items-center gap-2">
              <Zap className="w-3 h-3 text-bronze" />
              PRODUCTS
            </h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/products" className="hover:text-bronze transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-bronze opacity-0 group-hover:opacity-100 transition-opacity" />All USB Capture</Link></li>
              <li><Link href="/products" className="hover:text-bronze transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-bronze opacity-0 group-hover:opacity-100 transition-opacity" />HDMI Capture</Link></li>
              <li><Link href="/products" className="hover:text-bronze transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-bronze opacity-0 group-hover:opacity-100 transition-opacity" />SDI Capture</Link></li>
              <li><Link href="/products" className="hover:text-bronze transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-bronze opacity-0 group-hover:opacity-100 transition-opacity" />Multi-Input</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-soft-white font-bold mb-6 text-sm uppercase tracking-wider flex items-center gap-2">
              <Radio className="w-3 h-3 text-bronze" />
              COMPANY
            </h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="hover:text-bronze transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-bronze opacity-0 group-hover:opacity-100 transition-opacity" />About Us</Link></li>
              <li><Link href="/how-it-works" className="hover:text-bronze transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-bronze opacity-0 group-hover:opacity-100 transition-opacity" />How It Works</Link></li>
              <li><Link href="/contact" className="hover:text-bronze transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-bronze opacity-0 group-hover:opacity-100 transition-opacity" />Contact</Link></li>
              <li><Link href="/support" className="hover:text-bronze transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-bronze opacity-0 group-hover:opacity-100 transition-opacity" />Support</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-soft-white font-bold mb-6 text-sm uppercase tracking-wider flex items-center gap-2">
              <Mail className="w-3 h-3 text-bronze" />
              CONTACT
            </h4>
            <ul className="space-y-4 text-sm">
              <li>
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-bronze mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-soft-white font-semibold text-xs uppercase mb-1">Phone</div>
                    <a href="tel:+441704635785" className="hover:text-bronze transition-colors">01704 635785</a>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-bronze mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-soft-white font-semibold text-xs uppercase mb-1">Email</div>
                    <a href="mailto:hello@churchtownmedia.co.uk" className="hover:text-bronze transition-colors break-all text-xs">hello@churchtownmedia.co.uk</a>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-bronze mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-soft-white font-semibold text-xs uppercase mb-1">Address</div>
                    <span className="text-xs">Cambridge Avenue<br />Southport, PR9 9SA</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 studio-divider">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-warm-gray/70">
            <div className="text-xs">
              <p>© {currentYear} Churchtown Media Ltd. Company No. 16960442. All rights reserved.</p>
              <p className="text-xs mt-1 opacity-70">Trading as StreamTek • Professional Studio Hardware</p>
            </div>
            <div className="flex flex-wrap items-center gap-6 text-xs">
              <Link href="/privacy-policy" className="hover:text-bronze transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-bronze transition-colors">Terms & Conditions</Link>
              <span className="text-warm-gray/30">|</span>
              <span className="text-xs opacity-50">Magewell® is a registered trademark</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
