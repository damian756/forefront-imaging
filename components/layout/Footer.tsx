'use client';

import Link from "next/link";
import { Mail, Phone, MapPin, Send, Shield, Package, Truck, Facebook, Twitter, Linkedin, Youtube, Zap, Radio, CheckCircle2 } from "lucide-react";
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
    <footer className="text-gray-300 pt-20 pb-8 border-t border-cyan-500/20 relative overflow-hidden" style={{ background: 'var(--optic-dark)' }}>
      {/* Fiber Background */}
      <div className="absolute inset-0 fiber-core opacity-10 pointer-events-none" />
      <div className="absolute inset-0 spectrum-lines opacity-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Newsletter Section */}
        <motion.div 
          className="mb-16 pb-12 border-b border-cyan-500/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold prismatic-text mb-3">Signal Updates</h3>
              <p className="text-gray-400 font-mono text-sm">
                Subscribe for firmware updates, technical guides, and exclusive light-speed deals
              </p>
            </div>
            <form onSubmit={handleSubscribe} className="flex gap-3">
              <div className="flex-1 relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-cyan-400" />
                <input
                  type="email"
                  placeholder="Enter transmission address..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full glass-frosted border border-cyan-500/30 rounded-xl py-4 pl-12 pr-4 text-white placeholder:text-gray-500 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all font-mono"
                />
              </div>
              <motion.button
                type="submit"
                className="px-8 py-4 refraction-border text-white font-bold rounded-xl fiber-glow flex items-center gap-2 transition-all relative overflow-hidden font-mono"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  {subscribed ? (
                    <>
                      <CheckCircle2 className="w-5 h-5" />
                      CONNECTED
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      SUBSCRIBE
                    </>
                  )}
                </span>
                <div className="absolute inset-0 light-streak opacity-0 hover:opacity-100" />
              </motion.button>
            </form>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 mb-6">
              <motion.div 
                className="p-2.5 rounded-xl photonic"
                style={{ background: 'linear-gradient(135deg, rgba(0, 128, 255, 0.3), rgba(0, 255, 255, 0.3))' }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <Zap className="w-6 h-6 text-cyan-300" />
              </motion.div>
              <span className="text-2xl font-bold text-white">
                Stream<span className="prismatic-text">Tek</span>
              </span>
            </Link>
            <p className="max-w-md mb-6 leading-relaxed text-gray-400 text-sm">
              <strong className="text-cyan-400">Magewell Official Distributor</strong> in the UK. Professional USB video capture devices 
              delivering zero-latency, uncompressed signal transmission for content creators, streamers, and video professionals.
            </p>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3 mb-6">
              <div className="flex items-center gap-2 glass-frosted border border-cyan-500/20 text-cyan-300 text-xs font-bold px-3 py-2 rounded-lg font-mono">
                <Shield className="w-4 h-4" />
                3-YEAR WARRANTY
              </div>
              <div className="flex items-center gap-2 glass-frosted border border-green-500/20 text-green-300 text-xs font-bold px-3 py-2 rounded-lg font-mono">
                <Package className="w-4 h-4" />
                FREE UK SHIPPING
              </div>
              <div className="flex items-center gap-2 glass-frosted border border-blue-500/20 text-blue-300 text-xs font-bold px-3 py-2 rounded-lg font-mono">
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
                  className="w-10 h-10 rounded-lg glass-frosted border border-cyan-500/20 hover:border-cyan-500 text-gray-400 hover:text-cyan-300 flex items-center justify-center transition-all"
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
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider font-mono flex items-center gap-2">
              <Radio className="w-3 h-3 text-cyan-400" />
              PRODUCTS
            </h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/products" className="hover:text-cyan-400 transition-colors flex items-center gap-2 group font-mono"><span className="connection-node w-1 h-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />All USB Capture</Link></li>
              <li><Link href="/products" className="hover:text-cyan-400 transition-colors flex items-center gap-2 group font-mono"><span className="connection-node w-1 h-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />HDMI Capture</Link></li>
              <li><Link href="/products" className="hover:text-cyan-400 transition-colors flex items-center gap-2 group font-mono"><span className="connection-node w-1 h-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />SDI Capture</Link></li>
              <li><Link href="/products" className="hover:text-cyan-400 transition-colors flex items-center gap-2 group font-mono"><span className="connection-node w-1 h-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />Multi-Input</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider font-mono flex items-center gap-2">
              <Zap className="w-3 h-3 text-cyan-400" />
              COMPANY
            </h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="hover:text-cyan-400 transition-colors flex items-center gap-2 group font-mono"><span className="connection-node w-1 h-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />About Us</Link></li>
              <li><Link href="/how-it-works" className="hover:text-cyan-400 transition-colors flex items-center gap-2 group font-mono"><span className="connection-node w-1 h-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />How It Works</Link></li>
              <li><Link href="/contact" className="hover:text-cyan-400 transition-colors flex items-center gap-2 group font-mono"><span className="connection-node w-1 h-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />Contact</Link></li>
              <li><Link href="/support" className="hover:text-cyan-400 transition-colors flex items-center gap-2 group font-mono"><span className="connection-node w-1 h-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />Support</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider font-mono flex items-center gap-2">
              <Mail className="w-3 h-3 text-cyan-400" />
              CONNECT
            </h4>
            <ul className="space-y-4 text-sm">
              <li>
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-white font-semibold font-mono text-xs uppercase mb-1">Voice Channel</div>
                    <a href="tel:+441704635785" className="hover:text-cyan-400 transition-colors font-mono">01704 635785</a>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-white font-semibold font-mono text-xs uppercase mb-1">Data Channel</div>
                    <a href="mailto:hello@churchtownmedia.co.uk" className="hover:text-cyan-400 transition-colors break-all font-mono text-xs">hello@churchtownmedia.co.uk</a>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-white font-semibold font-mono text-xs uppercase mb-1">Physical Node</div>
                    <span className="font-mono text-xs">Cambridge Avenue<br />Southport, PR9 9SA</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-cyan-500/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <div className="font-mono text-xs">
              <p>© {currentYear} Churchtown Media Ltd. Company No. 16960442. All rights reserved.</p>
              <p className="text-xs mt-1">Trading as StreamTek • Light-Speed Data Transmission</p>
            </div>
            <div className="flex flex-wrap items-center gap-6 font-mono text-xs">
              <Link href="/privacy-policy" className="hover:text-cyan-400 transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-cyan-400 transition-colors">Terms & Conditions</Link>
              <span className="text-gray-700">|</span>
              <span className="text-xs opacity-60">Magewell® is a registered trademark</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
