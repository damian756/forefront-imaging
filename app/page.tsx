'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Zap, Shield, Gauge, CheckCircle2, ShoppingCart, Activity, Radio, WifiOff } from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FiberOpticBackground from '@/components/FiberOpticBackground';
import FiberCore from '@/components/FiberCore';
import SpeedIndicator from '@/components/SpeedIndicator';
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
      specs: ["HDMI 1.4", "1080p60", "USB 3.0", "Uncompressed"],
      stockStatus: "In Stock",
      image: "https://darkturquoise-pigeon-678798.hostingersite.com/wp-content/uploads/2026/01/hdmi-usb.61gen2.png",
      bandwidth: "10 Gbps",
      latency: "< 1ms",
      quality: "Uncompressed",
      price: 100
    },
    {
      id: 280,
      slug: "magewell-usb-capture-aio",
      name: "USB Capture AIO",
      specs: ["HDMI/SDI/DVI", "1080p60", "Multi-Input", "Loop-Through"],
      stockStatus: "Low Stock",
      image: "https://darkturquoise-pigeon-678798.hostingersite.com/wp-content/uploads/2026/01/usb-capture-aio-1.png",
      bandwidth: "10 Gbps",
      latency: "< 1ms",
      quality: "Uncompressed",
      price: 100
    },
    {
      id: 281,
      slug: "magewell-usb-capture-sdi-gen-2",
      name: "USB Capture SDI Gen 2",
      specs: ["3G-SDI", "Loop-Through", "Driver-Free", "Hardware Scaling"],
      stockStatus: "In Stock",
      image: "https://darkturquoise-pigeon-678798.hostingersite.com/wp-content/uploads/2026/01/sdi-usb.606.png",
      bandwidth: "3 Gbps",
      latency: "< 1ms",
      quality: "Uncompressed",
      price: 100
    }
  ];

  return (
    <div className="flex flex-col min-h-screen font-sans text-white selection:bg-cyan-500/30 overflow-x-hidden" style={{ background: 'var(--optic-black)' }}>
      
      {/* Fiber Optic Background Effects */}
      <FiberOpticBackground />
      <div className="fixed inset-0 spectrum-lines opacity-20 pointer-events-none z-0" />
      
      <Navbar />

      {/* FIBER OPTIC HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        
        {/* Fiber Core Visualization */}
        <FiberCore />
        
        <div className="max-w-7xl mx-auto px-4 relative z-20">
          <div className="text-center">
            {/* Signal Badge */}
            <motion.div 
              className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl glass-frosted border border-cyan-500/30 mb-8 photonic"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div 
                className="connection-node w-3 h-3 rounded-full"
                animate={{
                  boxShadow: [
                    '0 0 10px rgba(0, 255, 255, 0.8)',
                    '0 0 20px rgba(0, 255, 255, 1)',
                    '0 0 10px rgba(0, 255, 255, 0.8)',
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-base font-bold uppercase tracking-wider text-cyan-400 font-mono">LIGHT SPEED DATA</span>
              <span className="text-sm text-gray-400">•</span>
              <span className="text-sm text-gray-300 font-semibold">Magewell Official Distributor</span>
            </motion.div>

            {/* Main Title - Fiber Optic Style */}
            <motion.h1 
              className="text-5xl md:text-8xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="block text-white">Professional USB</span>
              <span className="block prismatic-text text-7xl md:text-9xl font-black">
                CAPTURE
              </span>
              <span className="block text-gray-400 text-3xl md:text-5xl font-light">
                at <span className="prismatic-text font-bold">Light Speed</span>
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Fiber-fast USB capture cards delivering <span className="text-cyan-400 font-bold">zero-latency</span>, <span className="text-blue-400 font-bold">uncompressed video</span> through cutting-edge signal processing technology
            </motion.p>

            {/* CTAs - Fiber Optic Style */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <Link 
                href="/products" 
                className="group px-8 py-4 refraction-border rounded-2xl text-white font-bold text-base relative overflow-hidden fiber-glow transition-all"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Radio className="w-5 h-5" />
                  Explore Technology
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </span>
                <div className="absolute inset-0 light-streak opacity-0 group-hover:opacity-100" />
              </Link>
              <Link 
                href="/how-it-works" 
                className="px-8 py-4 glass-frosted border border-cyan-500/30 hover:border-cyan-500/60 text-gray-200 hover:text-white font-bold rounded-2xl transition-all text-center text-base"
              >
                How It Works
              </Link>
            </motion.div>

            {/* Speed Indicators */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <SpeedIndicator speed="10" label="Bandwidth" unit="Gbps" icon="zap" />
              <SpeedIndicator speed="< 1" label="Latency" unit="ms" icon="activity" />
              <SpeedIndicator speed="100" label="Signal Quality" unit="%" icon="radio" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Transmission Features Bar */}
      <section className="border-y border-cyan-500/20 py-12 relative overflow-hidden" style={{ background: 'var(--optic-dark)' }}>
        <div className="absolute inset-0 light-beam opacity-10" />
        
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            {[
              { icon: WifiOff, title: "Zero Latency", value: "< 1ms", desc: "Real-time signal", color: 'var(--fiber-green)' },
              { icon: Activity, title: "Uncompressed", value: "10 Gbps", desc: "Pristine quality", color: 'var(--fiber-cyan)' },
              { icon: Zap, title: "Light Speed", value: "USB 3.0", desc: "Instant transfer", color: 'var(--fiber-blue)' }
            ].map((feat, index) => (
              <motion.div 
                key={index}
                className="fiber-glass p-6 rounded-2xl refraction-border relative overflow-hidden group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.03 }}
              >
                  <motion.div
                    className="absolute inset-0 transmission-line opacity-0 group-hover:opacity-100"
                  />
                  
                  <div className="flex items-center gap-4 relative z-10">
                    <motion.div 
                      className="p-4 rounded-xl photonic"
                      style={{ background: 'rgba(0, 128, 255, 0.1)' }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <feat.icon className="w-8 h-8" style={{ color: feat.color }} />
                    </motion.div>
                    <div className="flex-1">
                      <div className="text-xs text-gray-500 uppercase font-semibold tracking-wide mb-1 font-mono">{feat.title}</div>
                      <div className="text-2xl font-bold mb-1 font-mono" style={{ color: feat.color }}>{feat.value}</div>
                      <div className="text-sm text-gray-400">{feat.desc}</div>
                    </div>
                  </div>
                  
                  {/* Signal strength bar */}
                  <div className="mt-4 h-1.5 bg-gray-900/50 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full"
                      style={{ 
                        background: `linear-gradient(90deg, ${feat.color}, rgba(0, 255, 255, 0.6))`,
                        boxShadow: `0 0 10px ${feat.color}`,
                      }}
                      initial={{ width: '0%' }}
                      whileInView={{ width: '100%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                    />
                  </div>
              </motion.div>
            ))}
        </div>
      </section>

      {/* Product Catalog - Fiber Optic Style */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 glass-frosted rounded-full border border-cyan-500/30">
              <Zap className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-gray-400 uppercase tracking-wide font-semibold font-mono">Light-Speed Technology</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="prismatic-text">Photonic</span> <span className="text-white">Devices</span>
            </h2>
            <p className="text-gray-400 text-lg">Uncompressed signal transmission at the speed of light</p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="h-full fiber-fade-in"
              >
                <Link 
                  href={`/products/${product.slug}`}
                  className="group block h-full"
                >
                  <motion.div
                    className="h-full fiber-glass border overflow-hidden rounded-2xl relative group refraction-border"
                    whileHover={{ 
                      y: -10,
                      scale: 1.02,
                      transition: { duration: 0.3 }
                    }}
                  >
                    {/* Quality Badge */}
                    <div className="absolute top-4 left-4 z-30">
                      <motion.div 
                        className="px-4 py-2 rounded-lg uncompressed-badge text-black font-bold text-xs uppercase tracking-wider"
                        animate={{
                          boxShadow: [
                            '0 0 20px rgba(0, 255, 136, 0.6)',
                            '0 0 30px rgba(0, 255, 255, 0.8)',
                            '0 0 20px rgba(0, 255, 136, 0.6)',
                          ],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        {product.quality}
                      </motion.div>
                    </div>

                    {/* Stock Status */}
                    {product.stockStatus === "Low Stock" && (
                      <div className="absolute top-4 right-4 z-30">
                        <motion.div 
                          className="flex items-center gap-2 px-3 py-1.5 rounded-lg glass-frosted border border-magenta-500/50"
                          animate={{
                            borderColor: ['rgba(255, 0, 170, 0.5)', 'rgba(255, 0, 170, 1)', 'rgba(255, 0, 170, 0.5)'],
                          }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <motion.div 
                            className="w-2 h-2 rounded-full bg-magenta-400"
                            animate={{ opacity: [1, 0.3, 1] }}
                            transition={{ duration: 1, repeat: Infinity }}
                          />
                          <span className="text-xs font-bold uppercase text-magenta-300 font-mono">Low Stock</span>
                        </motion.div>
                      </div>
                    )}
                    
                    {/* Image Section */}
                    <div className="h-64 relative p-6 flex items-center justify-center border-b border-cyan-500/20 overflow-hidden" 
                         style={{ background: 'linear-gradient(135deg, #0a0a18 0%, #151520 100%)' }}>
                      
                      {/* Fiber core glow behind product */}
                      <div className="absolute inset-0 fiber-core" />
                      
                      <motion.div
                        className="relative w-full h-full z-10"
                        whileHover={{ 
                          scale: 1.1,
                          rotateY: 5,
                          transition: { duration: 0.4 }
                        }}
                      >
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-contain"
                          style={{ 
                            filter: 'drop-shadow(0 10px 40px rgba(0, 255, 255, 0.6)) drop-shadow(0 20px 60px rgba(0, 128, 255, 0.4))',
                          }}
                        />
                      </motion.div>

                      {/* Light beam underglow */}
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-gradient-to-t from-cyan-500/30 via-blue-500/20 to-transparent blur-2xl" />
                    </div>
                    
                    {/* Content Section */}
                    <div className="p-6 relative z-10">
                      <h3 className="text-2xl font-bold text-white group-hover:prismatic-text transition-all mb-4 leading-tight">
                        {product.name}
                      </h3>
                      
                      {/* Transmission Specs */}
                      <div className="grid grid-cols-3 gap-2 mb-4">
                        <div className="glass-frosted p-3 rounded-lg text-center border border-cyan-500/20">
                          <div className="text-xs text-gray-500 uppercase font-semibold mb-1 font-mono">Speed</div>
                          <div className="text-sm font-bold text-cyan-400 font-mono">{product.bandwidth}</div>
                        </div>
                        <div className="glass-frosted p-3 rounded-lg text-center border border-cyan-500/20">
                          <div className="text-xs text-gray-500 uppercase font-semibold mb-1 font-mono">Delay</div>
                          <div className="text-sm font-bold latency-low font-mono">{product.latency}</div>
                        </div>
                        <div className="glass-frosted p-3 rounded-lg text-center border border-cyan-500/20">
                          <div className="text-xs text-gray-500 uppercase font-semibold mb-1 font-mono">Signal</div>
                          <div className="text-xs font-bold text-green-400 font-mono">100%</div>
                        </div>
                      </div>

                      {/* Specs as fiber tags */}
                      <div className="flex flex-wrap gap-2 mb-5">
                        {product.specs.map((spec, i) => (
                          <motion.span 
                            key={i} 
                            className="px-3 py-1.5 glass-frosted border border-cyan-500/20 rounded-lg text-xs font-semibold text-cyan-300 font-mono"
                            whileHover={{ scale: 1.05, y: -2, borderColor: 'rgba(0, 255, 255, 0.5)' }}
                          >
                            {spec}
                          </motion.span>
                        ))}
                      </div>

                      {/* Price with photonic glow */}
                      <div className="mb-4 flex items-center justify-between p-3 glass-frosted rounded-xl border border-green-500/20">
                        <span className="text-xs text-gray-500 uppercase font-semibold font-mono">Price</span>
                        <div>
                          <span className="text-3xl font-bold text-green-400 font-mono">£{product.price}</span>
                          <span className="text-gray-500 text-sm ml-2 font-mono">GBP</span>
                        </div>
                      </div>
                      
                      {/* Add to Cart - Fiber Style */}
                      <motion.button 
                        onClick={(e) => handleAddToCart(product, e)}
                        className="w-full py-4 refraction-border text-white text-base font-bold transition-all rounded-xl flex items-center justify-center gap-3 fiber-glow relative overflow-hidden"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        <span className="relative z-10 flex items-center gap-2 font-mono">
                          {addedItemId === product.id ? (
                            <>
                              <CheckCircle2 className="w-5 h-5" />
                              SIGNAL ACQUIRED
                            </>
                          ) : (
                            <>
                              <ShoppingCart className="w-5 h-5" />
                              ADD TO CART
                            </>
                          )}
                        </span>
                        <div className="absolute inset-0 light-streak opacity-0 hover:opacity-100" />
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
              className="inline-flex items-center gap-3 px-8 py-4 glass-frosted border refraction-border hover:scale-105 transition-all rounded-xl text-base font-bold fiber-glow"
            >
              <span className="prismatic-text font-mono">VIEW ALL TECHNOLOGY</span>
              <ArrowRight className="w-5 h-5 text-cyan-400" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />

    </div>
  );
}
