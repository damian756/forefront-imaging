'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ChevronRight, Activity, Shield, Zap, ShoppingCart, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CircuitBackground from '@/components/CircuitBackground';
import SignalFlow from '@/components/SignalFlow';
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
      specs: ["HDMI 1.4", "1080p60", "USB 3.0", "Hardware Scaling"],
      stockStatus: "In Stock",
      image: "https://darkturquoise-pigeon-678798.hostingersite.com/wp-content/uploads/2026/01/hdmi-usb.61gen2.png",
      input: "HDMI",
      output: "USB 3.0",
      bandwidth: "10 Gbps",
      price: 100
    },
    {
      id: 280,
      slug: "magewell-usb-capture-aio",
      name: "USB Capture AIO",
      specs: ["HDMI/SDI/DVI", "1080p60", "Multi-Input", "Loop-Through"],
      stockStatus: "Low Stock",
      image: "https://darkturquoise-pigeon-678798.hostingersite.com/wp-content/uploads/2026/01/usb-capture-aio-1.png",
      input: "HDMI/SDI/DVI",
      output: "USB 3.0",
      bandwidth: "10 Gbps",
      price: 100
    },
    {
      id: 281,
      slug: "magewell-usb-capture-sdi-gen-2",
      name: "USB Capture SDI Gen 2",
      specs: ["3G-SDI", "Loop-Through", "Driver-Free", "Professional"],
      stockStatus: "In Stock",
      image: "https://darkturquoise-pigeon-678798.hostingersite.com/wp-content/uploads/2026/01/sdi-usb.606.png",
      input: "3G-SDI",
      output: "USB 3.0",
      bandwidth: "3 Gbps",
      price: 100
    }
  ];

  return (
    <div className="flex flex-col min-h-screen font-mono text-white selection:bg-green-500/30 overflow-x-hidden pcb-substrate">
      
      {/* Circuit Background */}
      <CircuitBackground />
      <SignalFlow />
      
      <Navbar />

      {/* SIGNAL FLOW HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        
        <div className="max-w-7xl mx-auto px-4 relative z-20">
          <div className="text-center">
            {/* Technical Badge */}
            <motion.div 
              className="inline-flex items-center gap-3 px-6 py-3 rounded-lg component-outline mb-8 pcb-substrate"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="led-indicator" />
              <span className="text-base font-bold uppercase tracking-wider silkscreen-text">SYSTEM ACTIVE</span>
              <span className="text-sm text-gray-500">•</span>
              <span className="text-sm text-gray-400 font-semibold">MAGEWELL AUTHORIZED</span>
            </motion.div>

            {/* Main Title - Schematic Style */}
            <motion.h1 
              className="text-5xl md:text-8xl font-bold mb-6 leading-tight uppercase"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="block text-gray-400 text-2xl md:text-4xl mb-2">PROFESSIONAL USB</span>
              <span className="block schematic-text text-7xl md:text-9xl">
                VIDEO CAPTURE
              </span>
              <span className="block text-gray-500 text-3xl md:text-5xl mt-2">
                SIGNAL PROCESSING SYSTEMS
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              className="text-base md:text-lg text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Engineering-grade signal capture with <span className="schematic-text">zero-latency processing</span>, <span className="text-orange-400">hardware scaling</span>, and <span className="text-blue-400">universal compatibility</span>
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
                className="group px-8 py-4 trace-border rounded-lg text-white font-bold text-base relative overflow-hidden tech-glow"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Activity className="w-5 h-5" />
                  VIEW COMPONENTS
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </span>
                <div className="absolute inset-0 signal-trace" />
              </Link>
              <Link 
                href="/how-it-works" 
                className="px-8 py-4 circuit-glass border border-green-500/30 hover:border-green-500 text-gray-200 hover:text-white font-bold rounded-lg transition-all text-center text-base"
              >
                SIGNAL FLOW DIAGRAM
              </Link>
            </motion.div>

            {/* Technical Specs Display */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              {[
                { label: 'INPUT SIGNAL', value: 'HDMI / SDI', unit: 'UNCOMPRESSED', icon: Activity },
                { label: 'PROCESSING', value: '< 1', unit: 'ms LATENCY', icon: Zap },
                { label: 'OUTPUT BUS', value: 'USB 3.0', unit: '10 Gbps', icon: ChevronRight }
              ].map((spec, i) => (
                <motion.div
                  key={i}
                  className="component-outline p-6 pcb-substrate relative overflow-hidden"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute top-2 right-2 via-point" />
                  <div className="absolute bottom-2 left-2 via-point" />
                  
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-green-500/10 rounded border border-green-500/30">
                      <spec.icon className="w-5 h-5 schematic-text" />
                    </div>
                    <div className="text-[10px] text-gray-500 uppercase tracking-wider font-bold">
                      {spec.label}
                    </div>
                  </div>
                  
                  <div className="text-3xl font-bold schematic-text mb-1">
                    {spec.value}
                  </div>
                  <div className="text-xs text-gray-500 uppercase tracking-wide">
                    {spec.unit}
                  </div>

                  {/* Signal meter */}
                  <div className="mt-4">
                    <div className="signal-meter" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technical Features Bar */}
      <section className="border-y border-green-500/20 py-12 relative overflow-hidden" style={{ background: '#0a1612' }}>
        <div className="absolute inset-0 tech-grid opacity-50" />
        
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          {[
            { icon: Zap, title: "ZERO LATENCY", value: "< 1ms", desc: "Hardware Processing", color: '#00ff88' },
            { icon: Shield, title: "UNIVERSAL DRIVER", value: "PLUG & PLAY", desc: "No Software Required", color: '#ff9500' },
            { icon: Activity, title: "HIGH FIDELITY", value: "1080p60", desc: "Uncompressed Signal", color: '#00aaff' }
          ].map((feat, index) => (
            <motion.div 
              key={index}
              className="component-outline p-6 pcb-substrate relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="absolute top-2 left-2 via-point" />
              <div className="absolute top-2 right-2 via-point" />
              <div className="absolute bottom-2 left-2 via-point" />
              <div className="absolute bottom-2 right-2 via-point" />
              
              <div className="flex items-center gap-4">
                <motion.div 
                  className="p-4 rounded-lg"
                  style={{ background: `${feat.color}15`, border: `1px solid ${feat.color}30` }}
                  whileHover={{ scale: 1.1 }}
                >
                  <feat.icon className="w-8 h-8" style={{ color: feat.color }} />
                </motion.div>
                <div className="flex-1">
                  <div className="text-[10px] text-gray-500 uppercase font-bold tracking-wider mb-1">{feat.title}</div>
                  <div className="text-2xl font-bold mb-1" style={{ color: feat.color }}>{feat.value}</div>
                  <div className="text-xs text-gray-500">{feat.desc}</div>
                </div>
              </div>
              
              {/* Trace line at bottom */}
              <div className="mt-4 trace-line" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Product Catalog - Engineering Style */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 component-outline pcb-substrate">
              <div className="led-indicator" />
              <span className="text-sm text-gray-400 uppercase tracking-wide font-semibold">COMPONENT LIBRARY</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold mb-4 uppercase">
              <span className="schematic-text">SIGNAL CAPTURE</span> <span className="text-white">DEVICES</span>
            </h2>
            <p className="text-gray-400 text-lg">Engineering-grade USB video capture systems</p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="h-full schematic-fade-in"
              >
                <Link 
                  href={`/products/${product.slug}`}
                  className="group block h-full"
                >
                  <motion.div
                    className="h-full circuit-glass component-outline rounded-lg overflow-hidden relative"
                    whileHover={{ 
                      y: -10,
                      scale: 1.02,
                      transition: { duration: 0.3 }
                    }}
                  >
                    {/* Corner Via Points */}
                    <div className="absolute top-3 left-3 via-point z-20" />
                    <div className="absolute top-3 right-3 via-point z-20" />
                    <div className="absolute bottom-3 left-3 via-point z-20" />
                    <div className="absolute bottom-3 right-3 via-point z-20" />

                    {/* Status Badge */}
                    <div className="absolute top-6 right-6 z-30">
                      <motion.div 
                        className={`flex items-center gap-2 px-3 py-1.5 pcb-substrate border rounded ${
                          product.stockStatus === 'In Stock' 
                            ? 'border-green-500/50' 
                            : 'border-orange-500/50'
                        }`}
                        animate={{
                          borderColor: product.stockStatus === 'In Stock' 
                            ? ['rgba(0, 255, 0, 0.5)', 'rgba(0, 255, 0, 1)', 'rgba(0, 255, 0, 0.5)']
                            : ['rgba(255, 149, 0, 0.5)', 'rgba(255, 149, 0, 1)', 'rgba(255, 149, 0, 0.5)']
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <div className={`w-2 h-2 rounded-full ${
                          product.stockStatus === 'In Stock' ? 'bg-green-400' : 'bg-orange-400'
                        }`} style={{
                          boxShadow: product.stockStatus === 'In Stock' 
                            ? '0 0 5px #00ff00' 
                            : '0 0 5px #ff9500'
                        }} />
                        <span className={`text-[10px] font-bold uppercase tracking-wider ${
                          product.stockStatus === 'In Stock' ? 'text-green-400' : 'text-orange-400'
                        }`}>
                          {product.stockStatus === 'In Stock' ? 'ACTIVE' : 'LOW QTY'}
                        </span>
                      </motion.div>
                    </div>
                    
                    {/* Image Section */}
                    <div className="h-64 relative p-6 flex items-center justify-center border-b border-green-500/20" 
                         style={{ background: 'linear-gradient(135deg, #0a1612 0%, #0d1f1a 100%)' }}>
                      
                      <div className="absolute inset-0 tech-grid opacity-30" />
                      
                      <motion.div
                        className="relative w-full h-full z-10"
                        whileHover={{ 
                          scale: 1.1,
                          transition: { duration: 0.4 }
                        }}
                      >
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-contain"
                          style={{ 
                            filter: 'drop-shadow(0 10px 30px rgba(0, 255, 136, 0.3))',
                          }}
                        />
                      </motion.div>

                      {/* Connection points at corners */}
                      {[
                        { top: '20px', left: '20px' },
                        { top: '20px', right: '20px' },
                        { bottom: '20px', left: '20px' },
                        { bottom: '20px', right: '20px' },
                      ].map((pos, i) => (
                        <motion.div
                          key={i}
                          className="absolute solder-point"
                          style={{ ...pos, width: '6px', height: '6px' }}
                          animate={{
                            opacity: [0.5, 1, 0.5],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.3,
                          }}
                        />
                      ))}
                    </div>
                    
                    {/* Content Section */}
                    <div className="p-6 relative z-10">
                      <div className="tech-label mb-3">{product.input} → {product.output}</div>
                      
                      <h3 className="text-xl font-bold text-white group-hover:schematic-text transition-all mb-4 leading-tight uppercase">
                        {product.name}
                      </h3>
                      
                      {/* Signal Flow Diagram */}
                      <div className="mb-4 p-4 pcb-substrate rounded border border-green-500/20 relative">
                        <div className="flex items-center justify-between text-xs mb-2">
                          <span className="text-gray-500 uppercase">INPUT</span>
                          <span className="text-gray-500 uppercase">PROCESSING</span>
                          <span className="text-gray-500 uppercase">OUTPUT</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="connection-node-large" />
                          <div className="flex-1 mx-2 trace-line" />
                          <div className="connection-node-large" style={{ background: 'radial-gradient(circle, #ff9500 0%, #aa6600 50%, transparent 100%)' }} />
                          <div className="flex-1 mx-2 trace-line" />
                          <div className="connection-node-large" style={{ background: 'radial-gradient(circle, #00aaff 0%, #0077aa 50%, transparent 100%)' }} />
                        </div>
                        <div className="flex items-center justify-between text-[10px] mt-2 text-green-400">
                          <span>{product.input}</span>
                          <span>ENCODE</span>
                          <span>USB 3.0</span>
                        </div>
                      </div>

                      {/* Specs */}
                      <div className="flex flex-wrap gap-2 mb-5">
                        {product.specs.map((spec, i) => (
                          <motion.span 
                            key={i} 
                            className="px-3 py-1.5 pcb-substrate border border-green-500/20 rounded text-[10px] font-bold uppercase text-green-300 tracking-wider"
                            whileHover={{ scale: 1.05, y: -2, borderColor: 'rgba(0, 255, 136, 0.5)' }}
                          >
                            {spec}
                          </motion.span>
                        ))}
                      </div>

                      {/* Price */}
                      <div className="mb-4 flex items-center justify-between p-4 pcb-substrate rounded border border-orange-500/30">
                        <span className="text-xs text-gray-500 uppercase font-bold tracking-wider">UNIT COST</span>
                        <div>
                          <span className="text-3xl font-bold text-orange-400">£{product.price}</span>
                          <span className="text-gray-500 text-sm ml-2">GBP</span>
                        </div>
                      </div>
                      
                      {/* Add to Cart Button */}
                      <motion.button 
                        onClick={(e) => handleAddToCart(product, e)}
                        className="w-full py-4 trace-border text-white text-base font-bold transition-all rounded-lg flex items-center justify-center gap-3 tech-glow relative overflow-hidden uppercase tracking-wider"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        <span className="relative z-10 flex items-center gap-2">
                          {addedItemId === product.id ? (
                            <>
                              <CheckCircle2 className="w-5 h-5" />
                              ADDED TO QUEUE
                            </>
                          ) : (
                            <>
                              <ShoppingCart className="w-5 h-5" />
                              ADD TO CART
                            </>
                          )}
                        </span>
                        <div className="absolute inset-0 signal-trace" />
                      </motion.button>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* View All CTA */}
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            <Link 
              href="/products"
              className="inline-flex items-center gap-3 px-8 py-4 component-outline hover:scale-105 transition-all rounded-lg text-base font-bold tech-glow pcb-substrate uppercase"
            >
              <span className="schematic-text">VIEW FULL SCHEMATIC</span>
              <ArrowRight className="w-5 h-5 text-green-400" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />

    </div>
  );
}
