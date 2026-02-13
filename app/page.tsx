'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, ArrowRight, Mail, MapPin, ShieldCheck, Box, Truck, BadgeCheck, FileText, Package, Star, ShoppingCart, Zap, Shield, Clock } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SignalFlow from '@/components/SignalFlow';
import CompatibilityMatrix from '@/components/CompatibilityMatrix';
import Certifications from '@/components/Certifications';
import TechComparison from '@/components/TechComparison';
import { useCart } from '@/contexts/CartContext';

export default function Home() {
  const { addItem } = useCart();
  const [addedItemId, setAddedItemId] = useState<number | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleAddToCart = (product: typeof products[0], e: React.MouseEvent) => {
    e.preventDefault();
    addItem({
      id: product.id.toString(),
      name: product.name,
      price: product.price,
      imageUrl: product.image,
      slug: product.slug,
    });
    setAddedItemId(product.id);
    setTimeout(() => setAddedItemId(null), 2000);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const products = [
    {
      id: 279,
      slug: "magewell-usb-capture-hdmi-gen-2",
      name: "USB Capture HDMI Gen 2",
      specs: ["HDMI 1.4", "1080p60", "USB 3.0"],
      stockStatus: "In Stock - UK Warehouse",
      image: "https://darkturquoise-pigeon-678798.hostingersite.com/wp-content/uploads/2026/01/hdmi-usb.61gen2.png",
      tag: "Best Seller",
      price: 100
    },
    {
      id: 280,
      slug: "magewell-usb-capture-aio",
      name: "USB Capture AIO",
      specs: ["HDMI/SDI/DVI", "1080p60", "Analog I/O"],
      stockStatus: "Low Stock - Order Soon",
      image: "https://darkturquoise-pigeon-678798.hostingersite.com/wp-content/uploads/2026/01/usb-capture-aio-1.png",
      tag: "Universal",
      price: 100
    },
    {
      id: 281,
      slug: "magewell-usb-capture-sdi-gen-2",
      name: "USB Capture SDI Gen 2",
      specs: ["3G-SDI", "Loop-Through", "Driver-Free"],
      stockStatus: "In Stock - Next Day Delivery",
      image: "https://darkturquoise-pigeon-678798.hostingersite.com/wp-content/uploads/2026/01/sdi-usb.606.png",
      tag: "Broadcast",
      price: 100
    }
  ];

  return (
    <div className="flex flex-col min-h-screen font-sans text-slate-200 selection:bg-cyan-500/30" style={{ background: 'var(--bg-primary)' }}>
      
      <Navbar />

      {/* Hero Section - Tech Redesign */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden border-b border-cyan-500/20 scanline">
        {/* Circuit Board Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,217,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,217,255,0.05)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        
        {/* Animated Gradient Orbs - Cyan/Purple */}
        <motion.div 
          className="absolute top-20 -left-40 w-96 h-96 rounded-full blur-[120px]"
          style={{ background: 'radial-gradient(circle, rgba(0,217,255,0.3), transparent)' }}
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 -right-40 w-96 h-96 rounded-full blur-[120px]"
          style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.3), transparent)' }}
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left Content - Animated */}
            <motion.div 
              className="flex-1 text-center md:text-left"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg glass border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase tracking-widest mb-6 neon-cyan"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <BadgeCheck className="w-4 h-4" /> Magewell Official Distributor
              </motion.div>

              <motion.h1 
                className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Capture Any Video. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 gradient-animate">
                  Instantly.
                </span>
              </motion.h1>

              <motion.p 
                className="text-lg text-slate-400 mb-8 max-w-xl mx-auto md:mx-0 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Professional USB video capture devices that work with any HDMI or SDI source. 
                No drivers needed. Perfect for streaming, recording, and content creation. 
                In stock with free UK delivery and 3-year warranty.
              </motion.p>

              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <Link 
                  href="/products" 
                  className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-bold rounded-lg transition-all text-center neon-cyan hover:scale-105"
                >
                  <span className="flex items-center justify-center gap-2">
                    <Zap className="w-5 h-5" />
                    Shop USB Capture
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                <Link 
                  href="/how-it-works" 
                  className="px-8 py-4 glass border-2 border-cyan-500/30 hover:border-cyan-500 text-slate-300 hover:text-white font-bold rounded-lg transition-all text-center"
                >
                  How It Works
                </Link>
              </motion.div>

              {/* Trust Badges - Tech Focused */}
              <motion.div 
                className="grid grid-cols-3 gap-6 max-w-xl mx-auto md:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                {[
                  { icon: Truck, label: 'Free', sublabel: 'UK Shipping', color: 'cyan' },
                  { icon: Shield, label: '3-Yr', sublabel: 'Warranty', color: 'purple' },
                  { icon: Clock, label: 'Next', sublabel: 'Day Delivery', color: 'cyan' }
                ].map((badge, i) => (
                  <div key={i} className="glass p-4 rounded-lg border border-slate-700 text-center hover:border-cyan-500/50 transition-all">
                    <badge.icon className={`w-6 h-6 mx-auto mb-2 ${badge.color === 'cyan' ? 'text-cyan-400' : 'text-purple-400'}`} />
                    <div className="text-2xl font-bold text-white mb-1">{badge.label}</div>
                    <div className="text-xs text-slate-500 uppercase tracking-wider">{badge.sublabel}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Content - Featured Product Card with Tech Overlay */}
            <motion.div 
              className="flex-1 relative w-full max-w-md"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.div 
                className="absolute inset-0 rounded-full blur-[100px]"
                style={{ background: 'radial-gradient(circle, rgba(0,217,255,0.4), transparent)' }}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div 
                className="relative glass border-2 border-cyan-500/30 p-6 rounded-xl neon-cyan"
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                 <div className="flex justify-between items-center border-b border-cyan-500/20 pb-4 mb-4">
                    <span className="text-xs font-mono text-cyan-400 font-bold">FLAGSHIP UNIT</span>
                    <span className="text-xs font-bold text-green-400 flex items-center gap-1 font-mono">
                      <motion.div 
                        className="w-2 h-2 bg-green-500 rounded-full"
                        animate={{ opacity: [1, 0.3, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      ONLINE
                    </span>
                 </div>
                 <motion.div
                   whileHover={{ scale: 1.05, rotateY: 5, transition: { duration: 0.3 } }}
                 >
                   <Image
                      src="https://darkturquoise-pigeon-678798.hostingersite.com/wp-content/uploads/2026/01/hdmi-usb.61gen2.png"
                      alt="Magewell Unit"
                      width={400}
                      height={300}
                      className="w-full h-auto object-contain drop-shadow-2xl"
                   />
                 </motion.div>
                 {/* Tech Specs Overlay */}
                 <div className="mt-4 pt-4 border-t border-cyan-500/20 space-y-2">
                    <div className="flex justify-between items-center">
                        <span className="text-[10px] text-slate-500 uppercase font-mono">Model</span>
                        <span className="font-mono text-sm text-cyan-400 font-bold">USB-HDMI-G2</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-[10px] text-slate-500 uppercase font-mono">Chipset</span>
                        <span className="font-mono text-sm text-purple-400">FPGA</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-[10px] text-slate-500 uppercase font-mono">Latency</span>
                        <span className="font-mono text-sm text-green-400">&lt;1 Frame</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-[10px] text-slate-500 uppercase font-mono">Part #</span>
                        <span className="font-mono text-sm text-white">32060</span>
                    </div>
                 </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Distributor Benefits Bar - Tech Redesign */}
      <section className="border-y border-cyan-500/20 py-12" style={{ background: 'var(--bg-secondary)' }}>
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            {[
              { icon: BadgeCheck, title: "Official Warranty", desc: "Direct manufacturer support & RMAs.", color: 'cyan' },
              { icon: Box, title: "UK Warehouse Stock", desc: "No import duties or long lead times.", color: 'purple' },
              { icon: Truck, title: "Next Day Delivery", desc: "Order by 4pm for same-day dispatch.", color: 'cyan' }
            ].map((benefit, index) => (
              <motion.div 
                key={index}
                className="glass p-6 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-all flex items-center gap-4 justify-center md:justify-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
              >
                  <motion.div 
                    className={`p-4 rounded-xl ${benefit.color === 'cyan' ? 'bg-cyan-500/10 text-cyan-400' : 'bg-purple-500/10 text-purple-400'} shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <benefit.icon className="w-7 h-7" />
                  </motion.div>
                  <div>
                      <h3 className="text-white font-bold text-lg mb-1">{benefit.title}</h3>
                      <p className="text-sm text-slate-400">{benefit.desc}</p>
                  </div>
              </motion.div>
            ))}
        </div>
      </section>

      {/* Signal Flow Section */}
      <SignalFlow />

      {/* Product Catalog Section - Tech Redesign */}
      <section className="py-24" style={{ background: 'var(--bg-primary)' }}>
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            className="flex justify-between items-end mb-12 border-b border-cyan-500/20 pb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h2 className="text-4xl font-bold text-white uppercase tracking-wide mb-2">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Core</span> Inventory
              </h2>
              <p className="text-slate-400 text-sm">Professional-grade USB video capture solutions</p>
            </div>
            <Link href="/products" className="text-cyan-400 hover:text-cyan-300 flex items-center gap-2 text-sm font-bold uppercase group">
              View All Products
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link 
                  href={`/products/${product.slug}`}
                  className="group block h-full"
                >
                  <motion.div
                    className="h-full glass border-2 border-slate-700 overflow-hidden rounded-xl relative"
                    whileHover={{ 
                      y: -8,
                      borderColor: 'rgba(0, 217, 255, 0.5)',
                      transition: { duration: 0.3 }
                    }}
                  >
                    {/* Tech Scan Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-b from-cyan-500/0 via-cyan-500/10 to-cyan-500/0 opacity-0 group-hover:opacity-100"
                      animate={{ y: ['-100%', '200%'] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    />
                    
                    {/* Image Section */}
                    <div className="h-56 relative p-6 flex items-center justify-center border-b border-slate-700 overflow-hidden" style={{ background: 'var(--bg-secondary)' }}>
                      {/* Premium Badge */}
                      <motion.div 
                        className="absolute top-3 right-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-[10px] font-bold px-3 py-1.5 uppercase tracking-wider rounded-lg shadow-lg flex items-center gap-1 z-10"
                        whileHover={{ scale: 1.05 }}
                      >
                        <Star className="w-3 h-3 fill-current" />
                        {product.tag}
                      </motion.div>

                      {/* Image with Hover Effect */}
                      <motion.div
                        className="relative w-full h-full z-10"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.4 }}
                      >
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-contain drop-shadow-2xl"
                        />
                      </motion.div>

                      {/* Circuit overlay */}
                      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,217,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,217,255,0.03)_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    
                    {/* Content Section */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-3 line-clamp-2">
                        {product.name}
                      </h3>
                      
                      {/* Stock Status - Tech Style */}
                      <div className="flex items-center gap-2 mb-4 p-2.5 glass rounded-lg border border-slate-700">
                        <motion.div 
                          className={`w-2 h-2 rounded-full ${product.stockStatus.includes('Low') ? 'bg-amber-400' : 'bg-green-400'}`}
                          animate={{ 
                            scale: [1, 1.3, 1],
                            opacity: [1, 0.5, 1]
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                        <span className="text-xs text-slate-300 font-mono font-medium">{product.stockStatus}</span>
                      </div>

                      {/* Specs List - Tech Grid */}
                      <div className="grid grid-cols-1 gap-2 mb-5 border-t border-slate-700 pt-4">
                        {product.specs.map((spec, i) => (
                          <motion.div 
                            key={i} 
                            className="flex items-center gap-2 text-xs glass p-2 rounded border border-slate-700"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * i }}
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                            <span className="text-cyan-300 font-mono font-semibold">{spec}</span>
                          </motion.div>
                        ))}
                      </div>

                      {/* Price and Add to Cart */}
                      <div className="mb-3 flex items-baseline gap-2">
                        <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 font-mono">£{product.price}</span>
                        <span className="text-slate-500 text-sm font-mono">GBP</span>
                      </div>
                      <motion.button 
                        onClick={(e) => handleAddToCart(product, e)}
                        className="w-full py-3 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white text-sm font-bold uppercase transition-all rounded-lg shadow-lg flex items-center justify-center gap-2 neon-cyan"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <ShoppingCart className="w-4 h-4" />
                        {addedItemId === product.id ? 'Added!' : 'Add to Cart'}
                      </motion.button>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compatibility Matrix */}
      <CompatibilityMatrix />

      {/* Technical Comparison */}
      <TechComparison />

      {/* Certifications */}
      <Certifications />

      <Footer />

    </div>
  );
}