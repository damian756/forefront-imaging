'use client';

import Link from "next/link";
import { Mail, Phone, MapPin, Send, ShieldCheck, Package, Truck, Facebook, Twitter, Linkedin, Youtube } from "lucide-react";
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
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-8 border-t border-slate-800 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-blue-950/10 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Newsletter Section */}
        <motion.div 
          className="mb-16 pb-12 border-b border-slate-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-3">Stay Updated</h3>
              <p className="text-slate-400">
                Get the latest StreamTek product updates, exclusive deals, and helpful tutorials for content creators.
              </p>
            </div>
            <form onSubmit={handleSubscribe} className="flex gap-3">
              <div className="flex-1 relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                <input
                  type="email"
                  placeholder="Enter your email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg py-3.5 pl-12 pr-4 text-white placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                />
              </div>
              <motion.button
                type="submit"
                className="px-8 py-3.5 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-bold rounded-lg shadow-lg shadow-blue-500/30 flex items-center gap-2 transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {subscribed ? (
                  <>
                    <ShieldCheck className="w-5 h-5" />
                    Subscribed!
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Subscribe
                  </>
                )}
              </motion.button>
            </form>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2 mb-6">
              <div className="p-2 rounded bg-blue-600">
                <ShieldCheck className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">
                Stream<span className="text-blue-500">Tek</span>
              </span>
            </Link>
            <p className="max-w-md mb-6 leading-relaxed text-slate-400">
              Magewell Official Distributor in the UK. Professional USB video capture devices 
              for content creators, streamers, educators, and video professionals. 
              Fast delivery, expert support, and authentic products backed by full warranty.
            </p>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3 mb-6">
              <div className="flex items-center gap-2 bg-blue-600/10 text-blue-400 text-xs font-bold px-3 py-2 rounded-lg border border-blue-500/20">
                <ShieldCheck className="w-4 h-4" />
                3-Year Warranty
              </div>
              <div className="flex items-center gap-2 bg-green-600/10 text-green-400 text-xs font-bold px-3 py-2 rounded-lg border border-green-500/20">
                <Package className="w-4 h-4" />
                Free UK Shipping
              </div>
              <div className="flex items-center gap-2 bg-purple-600/10 text-purple-400 text-xs font-bold px-3 py-2 rounded-lg border border-purple-500/20">
                <Truck className="w-4 h-4" />
                Next Day Delivery
              </div>
            </div>

            {/* Social Media */}
            <div className="flex gap-3">
              {[Facebook, Twitter, Linkedin, Youtube].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 hover:border-blue-500 hover:bg-blue-600 text-slate-400 hover:text-white flex items-center justify-center transition-all"
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
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Products</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/products" className="hover:text-blue-400 transition-colors flex items-center gap-2 group"><span className="w-1 h-1 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />All USB Capture</Link></li>
              <li><Link href="/products" className="hover:text-blue-400 transition-colors flex items-center gap-2 group"><span className="w-1 h-1 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />HDMI Capture</Link></li>
              <li><Link href="/products" className="hover:text-blue-400 transition-colors flex items-center gap-2 group"><span className="w-1 h-1 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />SDI Capture</Link></li>
              <li><Link href="/products" className="hover:text-blue-400 transition-colors flex items-center gap-2 group"><span className="w-1 h-1 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />Multi-Input</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="hover:text-blue-400 transition-colors flex items-center gap-2 group"><span className="w-1 h-1 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />About Us</Link></li>
              <li><Link href="/how-it-works" className="hover:text-blue-400 transition-colors flex items-center gap-2 group"><span className="w-1 h-1 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />How It Works</Link></li>
              <li><Link href="/contact" className="hover:text-blue-400 transition-colors flex items-center gap-2 group"><span className="w-1 h-1 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />Contact</Link></li>
              <li><Link href="/support" className="hover:text-blue-400 transition-colors flex items-center gap-2 group"><span className="w-1 h-1 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />Support</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-white font-medium">Customer Service</div>
                    <a href="tel:+441704635785" className="hover:text-blue-400 transition-colors">01704 635785</a>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-white font-medium">Email</div>
                    <a href="mailto:hello@churchtownmedia.co.uk" className="hover:text-blue-400 transition-colors break-all">hello@churchtownmedia.co.uk</a>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-white font-medium">Location</div>
                    <span>Cambridge Avenue<br />Southport, PR9 9SA</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
            <div>
              <p>© {currentYear} Churchtown Media Ltd. Company No. 16960442. All rights reserved.</p>
              <p className="text-xs mt-1">Trading as StreamTek</p>
            </div>
            <div className="flex items-center gap-6">
              <Link href="/privacy-policy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-slate-300 transition-colors">Terms & Conditions</Link>
              <span className="text-slate-600">|</span>
              <span className="text-xs">Magewell® is a registered trademark of Nanjing Magewell Electronics Co., Ltd.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}