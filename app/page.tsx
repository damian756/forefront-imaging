'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, ArrowRight, Mail, MapPin, ShieldCheck, Box, Truck, BadgeCheck, FileText, Package, Star, ShoppingCart, Zap, Shield, Clock, Sparkles } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ParticleField from '@/components/ParticleField';
import HexGrid from '@/components/HexGrid';
import WireframeCube from '@/components/WireframeCube';
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
    <div className="flex flex-col min-h-screen font-sans text-white selection:bg-cyan-500/30 overflow-x-hidden" style={{ background: '#000000' }}>
      
      {/* Background Effects */}
      <ParticleField />
      <HexGrid />
      
      <Navbar />

      {/* Hero Section - Holographic */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Animated Holographic Orbs */}
        <motion.div 
          className="absolute top-20 -left-40 w-[600px] h-[600px] rounded-full blur-[150px]"
          style={{ background: 'radial-gradient(circle, rgba(0,240,255,0.4), transparent)' }}
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 -right-40 w-[600px] h-[600px] rounded-full blur-[150px]"
          style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.4), transparent)' }}
          animate={{ 
            scale: [1.3, 1, 1.3],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[150px]"
          style={{ background: 'radial-gradient(circle, rgba(255,0,110,0.3), transparent)' }}
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left Content - Holographic */}
            <motion.div 
              className="flex-1 text-center md:text-left"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl glass-holo border-2 border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase tracking-widest mb-6 pulse-glow"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Sparkles className="w-4 h-4 text-cyan-400" /> Magewell Official Distributor
              </motion.div>

              <motion.h1 
                className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Capture Any Video. <br />
                <span className="holo-text text-6xl md:text-8xl">
                  Instantly.
                </span>
              </motion.h1>

              <motion.p 
                className="text-lg text-slate-300 mb-8 max-w-xl mx-auto md:mx-0 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Next-generation USB video capture devices with hardware FPGA processing. 
                Zero latency. Zero drivers. Maximum performance.
              </motion.p>

              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <Link 
                  href="/products" 
                  className="group px-8 py-4 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 hover:from-cyan-400 hover:to-pink-500 text-white font-bold rounded-xl transition-all text-center holo-glow hover:scale-105 relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <Zap className="w-5 h-5" />
                    Explore Devices
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity scanline" />
                </Link>
                <Link 
                  href="/how-it-works" 
                  className="px-8 py-4 glass-holo border-2 border-cyan-500/30 hover:border-cyan-500 text-slate-200 hover:text-white font-bold rounded-xl transition-all text-center"
                >
                  How It Works
                </Link>
              </motion.div>

              {/* Tech Stats - Holographic */}
              <motion.div 
                className="grid grid-cols-3 gap-4 max-w-xl mx-auto md:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                {[
                  { icon: Zap, label: '<1ms', sublabel: 'Latency', color: 'cyan' },
                  { icon: Shield, label: '3-Year', sublabel: 'Warranty', color: 'purple' },
                  { icon: Truck, label: 'Next Day', sublabel: 'Delivery', color: 'pink' }
                ].map((badge, i) => (
                  <motion.div 
                    key={i} 
                    className="glass-holo p-4 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-all relative overflow-hidden group"
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <badge.icon className={`w-6 h-6 mx-auto mb-2 ${
                      badge.color === 'cyan' ? 'text-cyan-400' : 
                      badge.color === 'purple' ? 'text-purple-400' : 
                      'text-pink-400'
                    }`} />
                    <div className="text-2xl font-bold text-white mb-1 font-mono">{badge.label}</div>
                    <div className="text-xs text-slate-400 uppercase tracking-wider">{badge.sublabel}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Content - 3D Floating Product Card */}
            <motion.div 
              className="flex-1 relative w-full max-w-md perspective-container"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {/* Wireframe Cube Background */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30">
                <WireframeCube size={300} />
              </div>

              {/* 3D Card */}
              <motion.div 
                className="relative glass-holo border-2 border-cyan-500/30 p-6 rounded-2xl holo-glow floating card-3d"
                style={{
                  transformStyle: 'preserve-3d',
                }}
                whileHover={{ 
                  rotateY: -5,
                  rotateX: 5,
                  translateZ: 50,
                  transition: { duration: 0.3 }
                }}
              >
                 {/* Holographic Header */}
                 <div className="flex justify-between items-center border-b border-cyan-500/20 pb-4 mb-4">
                    <span className="text-xs font-mono text-cyan-400 font-bold tracking-wider">FLAGSHIP UNIT</span>
                    <div className="flex items-center gap-1.5">
                      <motion.div 
                        className="w-2 h-2 bg-cyan-400 rounded-full pulse-glow"
                        animate={{ opacity: [1, 0.3, 1], scale: [1, 1.3, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <span className="text-xs font-bold text-cyan-400 font-mono">ONLINE</span>
                    </div>
                 </div>

                 {/* Product Image with Holographic Glow */}
                 <motion.div
                   className="relative mb-4 rounded-xl overflow-hidden"
                   style={{ 
                     transformStyle: 'preserve-3d',
                     background: 'linear-gradient(135deg, rgba(0,240,255,0.1), rgba(168,85,247,0.1))'
                   }}
                   whileHover={{ scale: 1.05, rotateY: 10, transition: { duration: 0.3 } }}
                 >
                   <Image
                      src="https://darkturquoise-pigeon-678798.hostingersite.com/wp-content/uploads/2026/01/hdmi-usb.61gen2.png"
                      alt="Magewell Unit"
                      width={400}
                      height={300}
                      className="w-full h-auto object-contain drop-shadow-2xl relative z-10"
                      style={{ filter: 'drop-shadow(0 0 20px rgba(0,240,255,0.5))' }}
                   />
                   {/* Scan line effect */}
                   <div className="scanline absolute inset-0" />
                 </motion.div>

                 {/* Holographic Tech Specs */}
                 <div className="space-y-2">
                    {[
                      { label: 'MODEL', value: 'USB-HDMI-G2', color: 'cyan' },
                      { label: 'CHIPSET', value: 'FPGA', color: 'purple' },
                      { label: 'LATENCY', value: '<1 Frame', color: 'pink' },
                      { label: 'PART #', value: '32060', color: 'cyan' }
                    ].map((spec, i) => (
                      <motion.div 
                        key={i}
                        className="flex justify-between items-center glass-holo p-2 rounded-lg border border-slate-700 group hover:border-cyan-500/50 transition-all"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                      >
                        <span className="text-[10px] text-slate-500 uppercase font-mono tracking-wider">{spec.label}</span>
                        <span className={`font-mono text-sm font-bold ${
                          spec.color === 'cyan' ? 'text-cyan-400' : 
                          spec.color === 'purple' ? 'text-purple-400' : 
                          'text-pink-400'
                        }`}>{spec.value}</span>
                      </motion.div>
                    ))}
                 </div>

                 {/* Floating indicator */}
                 <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex gap-1">
                   {[0, 1, 2].map(i => (
                     <motion.div
                       key={i}
                       className="w-2 h-2 rounded-full bg-cyan-400"
                       animate={{ 
                         scale: [1, 1.5, 1],
                         opacity: [0.5, 1, 0.5]
                       }}
                       transition={{ 
                         duration: 1.5,
                         repeat: Infinity,
                         delay: i * 0.2
                       }}
                     />
                   ))}
                 </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Distributor Benefits Bar - Holographic */}
      <section className="border-y border-cyan-500/10 py-16 relative overflow-hidden">
        {/* Scan line */}
        <div className="scanline absolute inset-0" />
        
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left relative z-10">
            {[
              { icon: BadgeCheck, title: "Official Warranty", desc: "Direct manufacturer support & RMAs.", color: 'cyan' },
              { icon: Box, title: "UK Warehouse Stock", desc: "No import duties or long lead times.", color: 'purple' },
              { icon: Truck, title: "Next Day Delivery", desc: "Order by 4pm for same-day dispatch.", color: 'pink' }
            ].map((benefit, index) => (
              <motion.div 
                key={index}
                className="glass-holo p-6 rounded-2xl border border-slate-700 hover:border-cyan-500/50 transition-all flex items-center gap-4 justify-center md:justify-start group relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.2 } }}
              >
                  {/* Holographic shimmer on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity scanline" />
                  
                  <motion.div 
                    className={`p-4 rounded-xl ${
                      benefit.color === 'cyan' ? 'bg-cyan-500/10 text-cyan-400 holo-glow' : 
                      benefit.color === 'purple' ? 'bg-purple-500/10 text-purple-400' : 
                      'bg-pink-500/10 text-pink-400'
                    } shadow-lg relative z-10`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <benefit.icon className="w-7 h-7" />
                  </motion.div>
                  <div className="relative z-10">
                      <h3 className="text-white font-bold text-lg mb-1">{benefit.title}</h3>
                      <p className="text-sm text-slate-400">{benefit.desc}</p>
                  </div>
              </motion.div>
            ))}
        </div>
      </section>

      {/* Product Catalog Section - Holographic */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div 
            className="flex justify-between items-end mb-12 pb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h2 className="text-5xl font-bold text-white uppercase tracking-wide mb-3">
                <span className="holo-text">CAPTURE</span> SYSTEMS
              </h2>
              <p className="text-slate-400 text-sm font-mono">Next-generation video capture technology</p>
            </div>
            <Link href="/products" className="holo-text hover:text-cyan-300 flex items-center gap-2 text-sm font-bold uppercase group">
              View All
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3 perspective-container">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30, rotateX: 45 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="h-full"
              >
                <Link 
                  href={`/products/${product.slug}`}
                  className="group block h-full"
                >
                  <motion.div
                    className="h-full glass-holo border-2 border-slate-700 overflow-hidden rounded-2xl relative group card-3d"
                    style={{ transformStyle: 'preserve-3d' }}
                    whileHover={{ 
                      y: -10,
                      rotateY: -3,
                      rotateX: 3,
                      borderColor: 'rgba(0, 240, 255, 0.6)',
                      transition: { duration: 0.3 }
                    }}
                  >
                    {/* Holographic Scan Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent opacity-0 group-hover:opacity-100 pointer-events-none"
                      animate={{ y: ['-100%', '200%'] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    />
                    
                    {/* Image Section */}
                    <div className="h-56 relative p-6 flex items-center justify-center border-b border-cyan-500/20 overflow-hidden">
                      {/* Holographic Badge */}
                      <motion.div 
                        className="absolute top-3 right-3 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 text-white text-[10px] font-bold px-3 py-2 uppercase tracking-wider rounded-xl shadow-lg flex items-center gap-1.5 z-10 holo-glow"
                        whileHover={{ scale: 1.1 }}
                      >
                        <Sparkles className="w-3 h-3" />
                        {product.tag}
                      </motion.div>

                      {/* Image with 3D Effect */}
                      <motion.div
                        className="relative w-full h-full z-10"
                        style={{ transformStyle: 'preserve-3d' }}
                        whileHover={{ 
                          scale: 1.15,
                          rotateY: 10,
                          transition: { duration: 0.4 }
                        }}
                      >
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-contain"
                          style={{ 
                            filter: 'drop-shadow(0 10px 30px rgba(0,240,255,0.4))',
                          }}
                        />
                      </motion.div>

                      {/* Hex Pattern overlay */}
                      <div className="absolute inset-0 hex-pattern opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    
                    {/* Content Section */}
                    <div className="p-6 relative z-10">
                      <h3 className="text-xl font-bold text-white group-hover:holo-text transition-all mb-3 line-clamp-2">
                        {product.name}
                      </h3>
                      
                      {/* Stock Status - Holographic */}
                      <div className="flex items-center gap-2 mb-4 p-3 glass-holo rounded-xl border border-cyan-500/20">
                        <motion.div 
                          className={`w-2.5 h-2.5 rounded-full pulse-glow ${product.stockStatus.includes('Low') ? 'bg-amber-400' : 'bg-cyan-400'}`}
                          animate={{ 
                            scale: [1, 1.4, 1],
                            opacity: [1, 0.5, 1]
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                        <span className="text-xs text-slate-300 font-mono font-semibold">{product.stockStatus}</span>
                      </div>

                      {/* Specs List - Holographic */}
                      <div className="grid grid-cols-1 gap-2 mb-5">
                        {product.specs.map((spec, i) => (
                          <motion.div 
                            key={i} 
                            className="flex items-center gap-2 text-xs glass-holo p-2.5 rounded-lg border border-cyan-500/10 hover:border-cyan-500/50 transition-all"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * i }}
                          >
                            <motion.div 
                              className="w-1.5 h-1.5 rounded-full bg-cyan-400"
                              animate={{ 
                                scale: [1, 1.3, 1],
                                boxShadow: ['0 0 0px rgba(0,240,255,0.5)', '0 0 8px rgba(0,240,255,0.8)', '0 0 0px rgba(0,240,255,0.5)']
                              }}
                              transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                            />
                            <span className="text-cyan-300 font-mono font-bold">{spec}</span>
                          </motion.div>
                        ))}
                      </div>

                      {/* Price - Holographic */}
                      <div className="mb-4 flex items-baseline gap-2">
                        <span className="text-4xl font-bold holo-text font-mono">£{product.price}</span>
                        <span className="text-slate-500 text-sm font-mono">GBP</span>
                      </div>
                      
                      {/* Add to Cart Button - Holographic */}
                      <motion.button 
                        onClick={(e) => handleAddToCart(product, e)}
                        className="w-full py-3.5 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 hover:from-cyan-400 hover:to-pink-500 text-white text-sm font-bold uppercase transition-all rounded-xl shadow-lg flex items-center justify-center gap-2 holo-glow relative overflow-hidden"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        <span className="relative z-10 flex items-center gap-2">
                          <ShoppingCart className="w-4 h-4" />
                          {addedItemId === product.id ? 'ADDED!' : 'ADD TO CART'}
                        </span>
                        <motion.div
                          className="absolute inset-0 bg-white/20 scanline"
                          initial={{ x: '-100%' }}
                          whileHover={{ x: '100%' }}
                          transition={{ duration: 0.5 }}
                        />
                      </motion.button>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      <Footer />

    </div>
  );
}