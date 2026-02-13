'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Play, Zap, Shield, Activity, ShoppingCart, CheckCircle2, Radio, Cpu, HardDrive } from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HolographicBackground from '@/components/HolographicBackground';
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
      specs: {
        resolution: "1080p60",
        interface: "USB 3.0",
        latency: "< 1ms",
        bandwidth: "10 Gbps"
      },
      features: ["Hardware Scaling", "Zero Latency", "Driver-Free"],
      stockStatus: "ONLINE",
      image: "https://darkturquoise-pigeon-678798.hostingersite.com/wp-content/uploads/2026/01/hdmi-usb.61gen2.png",
      price: 100
    },
    {
      id: 280,
      slug: "magewell-usb-capture-aio",
      name: "USB Capture AIO",
      specs: {
        resolution: "1080p60",
        interface: "Multi-Input",
        latency: "< 1ms",
        bandwidth: "10 Gbps"
      },
      features: ["HDMI/SDI/DVI", "Loop-Through", "Universal"],
      stockStatus: "ONLINE",
      image: "https://darkturquoise-pigeon-678798.hostingersite.com/wp-content/uploads/2026/01/usb-capture-aio-1.png",
      price: 100
    },
    {
      id: 281,
      slug: "magewell-usb-capture-sdi-gen-2",
      name: "USB Capture SDI Gen 2",
      specs: {
        resolution: "1080p60",
        interface: "3G-SDI",
        latency: "< 1ms",
        bandwidth: "3 Gbps"
      },
      features: ["Professional SDI", "Loop-Through", "Broadcast Grade"],
      stockStatus: "ONLINE",
      image: "https://darkturquoise-pigeon-678798.hostingersite.com/wp-content/uploads/2026/01/sdi-usb.606.png",
      price: 100
    }
  ];

  return (
    <div className="flex flex-col min-h-screen text-white selection:bg-cyan-500/30 overflow-x-hidden relative" style={{ background: '#000000' }}>
      
      {/* Holographic Background */}
      <HolographicBackground />
      
      <Navbar />

      {/* HOLOGRAPHIC HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        
        {/* Deep space gradient */}
        <div className="absolute inset-0 bg-gradient-radial from-blue-950/20 via-transparent to-transparent opacity-50" />
        
        <div className="max-w-7xl mx-auto px-4 relative z-20">
          <div className="text-center">
            
            {/* Status Badge */}
            <motion.div 
              className="inline-flex items-center gap-3 px-6 py-3 rounded-lg holo-panel holo-glow mb-8"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="status-online" />
              <span className="text-sm font-bold uppercase tracking-wider">TRANSMISSION ACTIVE</span>
              <span className="text-sm text-gray-500">•</span>
              <span className="text-sm text-orange-400 font-semibold">MAGEWELL AUTHORIZED</span>
            </motion.div>

            {/* Main Title - Holographic */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <h1 className="text-6xl md:text-9xl font-bold mb-4 leading-tight uppercase relative">
                <span className="block text-gray-400 text-2xl md:text-4xl mb-4">PROFESSIONAL</span>
                <span className="block holo-text text-7xl md:text-[10rem] relative" data-text="USB CAPTURE">
                  USB CAPTURE
                </span>
                <span className="block text-gray-500 text-3xl md:text-5xl mt-4">
                  <span className="text-orange-400">HOLOGRAPHIC</span> INTERFACE
                </span>
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p 
              className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Next-generation <span className="holo-text">video capture technology</span> with{' '}
              <span className="text-orange-400">zero-latency transmission</span>, hardware acceleration, 
              and universal compatibility
            </motion.p>

            {/* CTAs */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <Link 
                href="/products" 
                className="group px-8 py-5 holo-button rounded-xl text-white font-bold text-lg relative overflow-hidden holo-glow"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Radio className="w-5 h-5" />
                  EXPLORE DEVICES
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </span>
              </Link>
              <Link 
                href="/how-it-works" 
                className="px-8 py-5 holo-panel border-2 border-cyan-500/50 hover:border-cyan-500 text-gray-200 hover:text-white font-bold rounded-xl transition-all text-center text-lg group"
              >
                <span className="flex items-center justify-center gap-2">
                  <Play className="w-5 h-5" />
                  SEE TECHNOLOGY
                </span>
              </Link>
            </motion.div>

            {/* Holographic Spec Display */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto perspective-1000"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              {[
                { 
                  label: 'SIGNAL INPUT', 
                  value: 'HDMI/SDI', 
                  unit: 'UNCOMPRESSED', 
                  icon: Activity,
                  color: '#00d4ff'
                },
                { 
                  label: 'PROCESSING', 
                  value: '< 1ms', 
                  unit: 'LATENCY', 
                  icon: Zap,
                  color: '#ff6b00'
                },
                { 
                  label: 'DATA BUS', 
                  value: 'USB 3.0', 
                  unit: '10 Gbps', 
                  icon: Cpu,
                  color: '#00d4ff'
                }
              ].map((spec, i) => (
                <motion.div
                  key={i}
                  className="holo-panel p-8 rounded-xl relative overflow-hidden floating-panel holo-projection static-noise hud-corners"
                  whileHover={{ 
                    y: -10,
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                  style={{ animationDelay: `${i * 0.5}s` }}
                >
                  {/* Corner brackets */}
                  <div className="corner-bl" style={{ position: 'absolute', bottom: 0, left: 0, width: '20px', height: '20px', borderTop: 'none', borderRight: 'none' }} />
                  <div className="corner-br" style={{ position: 'absolute', bottom: 0, right: 0, width: '20px', height: '20px', borderTop: 'none', borderLeft: 'none' }} />
                  
                  <div className="flex items-center gap-4 mb-4">
                    <motion.div 
                      className="p-3 rounded-lg holo-border"
                      style={{ background: `${spec.color}10`, borderColor: spec.color }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <spec.icon className="w-7 h-7" style={{ color: spec.color }} />
                    </motion.div>
                    <div className="text-left">
                      <div className="text-[10px] text-gray-500 uppercase tracking-wider font-bold font-mono">
                        {spec.label}
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-5xl font-bold holo-text mb-2 font-mono">
                    {spec.value}
                  </div>
                  <div className="text-sm text-gray-400 uppercase tracking-wide font-mono mb-4">
                    {spec.unit}
                  </div>

                  {/* Energy bar */}
                  <div className="h-1 bg-gray-900/50 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full"
                      style={{ 
                        background: `linear-gradient(90deg, ${spec.color}, ${spec.color}99)`,
                        boxShadow: `0 0 10px ${spec.color}`
                      }}
                      initial={{ width: '0%' }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 1.5, delay: 1 + i * 0.2 }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technical Features Bar */}
      <section className="border-y border-cyan-500/20 py-12 relative overflow-hidden">
        <div className="absolute inset-0 projection-grid opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-950/20 via-transparent to-orange-950/20" />
        
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {[
            { icon: Zap, title: "ZERO LATENCY", value: "< 1ms", desc: "Real-Time Processing", color: '#00d4ff' },
            { icon: Shield, title: "UNIVERSAL", value: "DRIVER-FREE", desc: "Instant Recognition", color: '#ff6b00' },
            { icon: HardDrive, title: "HARDWARE", value: "ACCELERATED", desc: "Dedicated Processing", color: '#00d4ff' }
          ].map((feat, index) => (
            <motion.div 
              key={index}
              className="holo-panel p-8 rounded-xl relative overflow-hidden transmission-line"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="flex items-center gap-5">
                <motion.div 
                  className="p-4 rounded-xl holo-border energy-pulse"
                  style={{ background: `${feat.color}15`, borderColor: feat.color }}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <feat.icon className="w-10 h-10" style={{ color: feat.color }} />
                </motion.div>
                <div className="flex-1">
                  <div className="text-[11px] text-gray-500 uppercase font-bold tracking-wider mb-2 font-mono">{feat.title}</div>
                  <div className="text-3xl font-bold mb-1" style={{ color: feat.color, textShadow: `0 0 10px ${feat.color}` }}>{feat.value}</div>
                  <div className="text-sm text-gray-400">{feat.desc}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Holographic Product Catalog */}
      <section className="py-24 relative">
        <div className="absolute inset-0 tech-grid-fine opacity-20" />
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 holo-panel rounded-full">
              <div className="status-online" />
              <span className="text-sm text-gray-400 uppercase tracking-wide font-semibold font-mono">DEVICE CATALOG</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold mb-6 uppercase">
              <span className="holo-text">HOLOGRAPHIC</span> <span className="text-white">PROJECTIONS</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Explore our range of professional USB capture devices with advanced holographic interface
            </p>
          </motion.div>

          <div className="grid gap-10 md:grid-cols-3">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                className="h-full holo-fade-in"
              >
                <Link 
                  href={`/products/${product.slug}`}
                  className="group block h-full"
                >
                  <motion.div
                    className="h-full holo-panel rounded-2xl overflow-hidden relative holo-projection static-noise"
                    whileHover={{ 
                      y: -15,
                      scale: 1.03,
                      transition: { duration: 0.4 }
                    }}
                  >
                    {/* Status Badge */}
                    <div className="absolute top-6 right-6 z-30">
                      <motion.div 
                        className="flex items-center gap-2 px-4 py-2 holo-panel rounded-lg"
                        animate={{
                          boxShadow: [
                            '0 0 20px rgba(0, 212, 255, 0.3)',
                            '0 0 30px rgba(0, 212, 255, 0.5)',
                            '0 0 20px rgba(0, 212, 255, 0.3)'
                          ]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <div className="status-online" />
                        <span className="text-[10px] font-bold uppercase tracking-wider holo-text font-mono">
                          {product.stockStatus}
                        </span>
                      </motion.div>
                    </div>
                    
                    {/* Holographic Product Image */}
                    <div className="h-80 relative p-8 flex items-center justify-center border-b border-cyan-500/20 holo-shimmer" 
                         style={{ background: 'linear-gradient(135deg, rgba(0, 20, 40, 0.5) 0%, rgba(0, 10, 20, 0.8) 100%)' }}>
                      
                      <div className="absolute inset-0 projection-grid opacity-20" />
                      
                      {/* Hologram base plate */}
                      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50 blur-sm" />
                      
                      <motion.div
                        className="relative w-full h-full z-10 holo-projection"
                        whileHover={{ 
                          scale: 1.15,
                          rotateY: 10,
                          transition: { duration: 0.5 }
                        }}
                        style={{ transformStyle: 'preserve-3d' }}
                      >
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-contain chromatic"
                          style={{ 
                            filter: 'drop-shadow(0 0 30px rgba(0, 212, 255, 0.4)) drop-shadow(0 10px 40px rgba(0, 212, 255, 0.2))',
                          }}
                        />
                      </motion.div>

                      {/* Corner HUD elements */}
                      <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-cyan-500" />
                      <div className="absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 border-cyan-500" />
                      <div className="absolute bottom-4 left-4 w-6 h-6 border-l-2 border-b-2 border-cyan-500" />
                      <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-cyan-500" />
                    </div>
                    
                    {/* Product Info */}
                    <div className="p-8 relative z-10">
                      
                      <h3 className="text-2xl font-bold text-white group-hover:holo-text transition-all mb-4 leading-tight uppercase">
                        {product.name}
                      </h3>
                      
                      {/* Technical Specs Grid */}
                      <div className="grid grid-cols-2 gap-3 mb-5">
                        {Object.entries(product.specs).map(([key, value], i) => (
                          <div key={i} className="hud-readout rounded">
                            <div className="text-[9px] text-gray-500 mb-1">{key.toUpperCase()}</div>
                            <div className="text-xs font-bold holo-text">{value}</div>
                          </div>
                        ))}
                      </div>

                      {/* Features */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {product.features.map((feature, i) => (
                          <motion.span 
                            key={i} 
                            className="px-3 py-1.5 holo-panel rounded text-[10px] font-bold uppercase text-cyan-300 tracking-wider font-mono"
                            whileHover={{ scale: 1.05, y: -2 }}
                          >
                            {feature}
                          </motion.span>
                        ))}
                      </div>

                      {/* Price */}
                      <div className="mb-5 flex items-center justify-between p-4 holo-panel rounded-xl">
                        <span className="text-xs text-gray-400 uppercase font-bold tracking-wider font-mono">UNIT PRICE</span>
                        <div>
                          <span className="text-4xl font-bold text-orange-400" style={{ textShadow: '0 0 10px #ff6b00' }}>£{product.price}</span>
                          <span className="text-gray-500 text-sm ml-2">GBP</span>
                        </div>
                      </div>
                      
                      {/* Add to Cart Button */}
                      <motion.button 
                        onClick={(e) => handleAddToCart(product, e)}
                        className="w-full py-4 holo-button rounded-xl text-white text-base font-bold transition-all flex items-center justify-center gap-3 uppercase tracking-wider"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        <span className="relative z-10 flex items-center gap-2">
                          {addedItemId === product.id ? (
                            <>
                              <CheckCircle2 className="w-5 h-5" />
                              PROJECTION SAVED
                            </>
                          ) : (
                            <>
                              <ShoppingCart className="w-5 h-5" />
                              ADD TO CART
                            </>
                          )}
                        </span>
                      </motion.button>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* View All CTA */}
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            <Link 
              href="/products"
              className="inline-flex items-center gap-3 px-10 py-5 holo-button rounded-xl text-lg font-bold uppercase energy-pulse"
            >
              <span className="holo-text">VIEW ALL PROJECTIONS</span>
              <ArrowRight className="w-6 h-6 text-cyan-400" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />

    </div>
  );
}
