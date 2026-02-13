'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, ArrowRight, Radio, Users, Wifi, TrendingUp, ShoppingCart, Check, Activity, Signal } from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import LiveViewerCount from '@/components/LiveViewerCount';
import StreamMetrics from '@/components/StreamMetrics';
import ChatOverlay from '@/components/ChatOverlay';
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
      stockStatus: "In Stock",
      image: "https://darkturquoise-pigeon-678798.hostingersite.com/wp-content/uploads/2026/01/hdmi-usb.61gen2.png",
      bitrate: "6.0 Gbps",
      latency: "< 1ms",
      platform: "All Platforms",
      price: 100
    },
    {
      id: 280,
      slug: "magewell-usb-capture-aio",
      name: "USB Capture AIO",
      specs: ["HDMI/SDI/DVI", "1080p60", "Multi-Input"],
      stockStatus: "Low Stock",
      image: "https://darkturquoise-pigeon-678798.hostingersite.com/wp-content/uploads/2026/01/usb-capture-aio-1.png",
      bitrate: "6.0 Gbps",
      latency: "< 1ms",
      platform: "All Platforms",
      price: 100
    },
    {
      id: 281,
      slug: "magewell-usb-capture-sdi-gen-2",
      name: "USB Capture SDI Gen 2",
      specs: ["3G-SDI", "Loop-Through", "Driver-Free"],
      stockStatus: "In Stock",
      image: "https://darkturquoise-pigeon-678798.hostingersite.com/wp-content/uploads/2026/01/sdi-usb.606.png",
      bitrate: "3.0 Gbps",
      latency: "< 1ms",
      platform: "All Platforms",
      price: 100
    }
  ];

  return (
    <div className="flex flex-col min-h-screen font-sans text-white selection:bg-purple-500/30 overflow-x-hidden" style={{ background: 'var(--stream-black)' }}>
      
      {/* Streaming Background Effects */}
      <div className="fixed inset-0 scanlines opacity-50 pointer-events-none z-0" />
      <div className="fixed top-0 left-1/4 w-96 h-96 rounded-full blur-[150px] opacity-20" 
           style={{ background: 'radial-gradient(circle, #9146ff, transparent)' }} />
      <div className="fixed top-1/4 right-1/4 w-96 h-96 rounded-full blur-[150px] opacity-20"
           style={{ background: 'radial-gradient(circle, #00f593, transparent)' }} />
      
      {/* Chat Overlay */}
      <ChatOverlay />
      
      <Navbar />

      {/* LIVE STREAM HUD HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        
        {/* Stream Control Room Overlay */}
        <div className="absolute top-24 right-8 z-30">
          <motion.div 
            className="stream-glass px-6 py-4 rounded-xl border border-purple-500/30"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <LiveViewerCount />
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-20">
          <div className="text-center">
            {/* Live Badge */}
            <motion.div 
              className="inline-flex items-center gap-3 px-6 py-3 rounded-xl stream-glass border border-red-500/30 mb-8"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div 
                className="w-3 h-3 rounded-full live-indicator"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <span className="text-base font-bold uppercase tracking-wider text-red-400">LIVE</span>
              <span className="text-sm text-gray-400">•</span>
              <span className="text-sm text-gray-300 font-semibold">Magewell Official Distributor</span>
            </motion.div>

            {/* Main Title - Broadcast Style */}
            <motion.h1 
              className="text-5xl md:text-8xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="block text-white">Professional USB</span>
              <span className="block stream-text text-7xl md:text-9xl font-black">
                CAPTURE
              </span>
              <span className="block text-gray-400 text-3xl md:text-5xl font-medium">for Live Streaming</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              className="text-lg md:text-xl text-gray-400 mb-10 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Zero-latency capture cards trusted by <span className="text-purple-400 font-semibold">Twitch streamers</span>, <span className="text-red-400 font-semibold">YouTube creators</span> & <span className="text-green-400 font-semibold">professional broadcasters</span>
            </motion.p>

            {/* CTAs - Streaming Style */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <Link 
                href="/products" 
                className="group px-8 py-4 twitch-gradient hover:shadow-2xl text-white font-bold rounded-xl transition-all text-center text-base relative overflow-hidden stream-glow"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Radio className="w-5 h-5" />
                  Browse Equipment
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </span>
              </Link>
              <Link 
                href="/how-it-works" 
                className="px-8 py-4 stream-glass border border-purple-500/30 hover:border-purple-500 text-gray-200 hover:text-white font-bold rounded-xl transition-all text-center text-base"
              >
                How It Works
              </Link>
            </motion.div>

            {/* Stream Metrics Display */}
            <motion.div 
              className="inline-flex stream-glass px-8 py-6 rounded-2xl border border-purple-500/30"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <StreamMetrics />
            </motion.div>
          </div>
        </div>

        {/* Alert notification overlay */}
        <motion.div
          className="absolute bottom-8 right-8 max-w-sm z-30"
          initial={{ x: 400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 2 }}
        >
          <div className="sub-alert p-4 rounded-xl stream-glass border border-purple-500/50 shadow-2xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center">
                <Users className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm font-bold text-white">TechStreamer_UK just ordered!</p>
                <p className="text-xs text-gray-400">USB Capture HDMI Gen 2</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Platform Features Bar - Streaming Style */}
      <section className="border-y border-purple-500/20 py-12 relative overflow-hidden" style={{ background: 'var(--stream-dark)' }}>
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            {[
              { icon: Activity, title: "Zero Latency", value: "< 1ms", desc: "Real-time capture", color: 'var(--online-green)' },
              { icon: Wifi, title: "Universal", value: "All Platforms", desc: "OBS, XSplit, vMix", color: 'var(--twitch-purple)' },
              { icon: Signal, title: "High Quality", value: "1080p60", desc: "Uncompressed video", color: 'var(--bitrate-blue)' }
            ].map((feat, index) => (
              <motion.div 
                key={index}
                className="stream-glass p-6 rounded-2xl overlay-border relative overflow-hidden group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.03 }}
              >
                  <div className="flex items-center gap-4">
                    <motion.div 
                      className="p-4 rounded-xl stream-glass border border-purple-500/30"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <feat.icon className="w-8 h-8" style={{ color: feat.color }} />
                    </motion.div>
                    <div className="flex-1">
                      <div className="text-xs text-gray-500 uppercase font-semibold tracking-wide mb-1">{feat.title}</div>
                      <div className="text-2xl font-bold mb-1" style={{ color: feat.color }}>{feat.value}</div>
                      <div className="text-sm text-gray-400">{feat.desc}</div>
                    </div>
                  </div>
                  
                  {/* Quality bar */}
                  <div className="mt-4 h-1.5 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full quality-bar"
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                    />
                  </div>
              </motion.div>
            ))}
        </div>
      </section>

      {/* Streaming Equipment - Product Cards */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 stream-glass rounded-full border border-purple-500/30">
              <Radio className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-gray-400 uppercase tracking-wide font-semibold">Professional Equipment</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="stream-text">Streaming</span> <span className="text-white">Gear</span>
            </h2>
            <p className="text-gray-400 text-lg">Broadcast-grade USB capture devices</p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="h-full stream-fade-in"
              >
                <Link 
                  href={`/products/${product.slug}`}
                  className="group block h-full"
                >
                  <motion.div
                    className="h-full stream-glass border overflow-hidden rounded-2xl relative group overlay-border"
                    whileHover={{ 
                      y: -10,
                      scale: 1.02,
                      transition: { duration: 0.3 }
                    }}
                  >
                    {/* Live Badge if in stock */}
                    {product.stockStatus === "In Stock" && (
                      <div className="absolute top-4 left-4 z-30">
                        <motion.div 
                          className="flex items-center gap-2 px-3 py-1.5 rounded-lg badge-twitch"
                          animate={{ scale: [1, 1.05, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <motion.div 
                            className="w-2 h-2 rounded-full bg-white"
                            animate={{ opacity: [1, 0.5, 1] }}
                            transition={{ duration: 1, repeat: Infinity }}
                          />
                          <span className="text-xs font-bold uppercase">Available</span>
                        </motion.div>
                      </div>
                    )}

                    {/* Low Stock Badge */}
                    {product.stockStatus === "Low Stock" && (
                      <div className="absolute top-4 left-4 z-30">
                        <motion.div 
                          className="flex items-center gap-2 px-3 py-1.5 rounded-lg youtube-gradient"
                          animate={{ scale: [1, 1.05, 1] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <TrendingUp className="w-3 h-3" />
                          <span className="text-xs font-bold uppercase">Low Stock</span>
                        </motion.div>
                      </div>
                    )}
                    
                    {/* Image Section */}
                    <div className="h-64 relative p-6 flex items-center justify-center border-b border-purple-500/20 overflow-hidden" 
                         style={{ background: 'linear-gradient(135deg, #18181b 0%, #1f1f23 100%)' }}>
                      
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
                            filter: 'drop-shadow(0 10px 40px rgba(145, 70, 255, 0.4))',
                          }}
                        />
                      </motion.div>

                      {/* Glow effect */}
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-20 bg-gradient-to-t from-purple-500/20 to-transparent blur-xl" />
                    </div>
                    
                    {/* Content Section */}
                    <div className="p-6 relative z-10">
                      <h3 className="text-2xl font-bold text-white group-hover:stream-text transition-all mb-4 leading-tight">
                        {product.name}
                      </h3>
                      
                      {/* Stream Quality Indicators */}
                      <div className="grid grid-cols-3 gap-2 mb-4">
                        <div className="stream-glass p-3 rounded-lg text-center border border-purple-500/20">
                          <div className="text-xs text-gray-500 uppercase font-semibold mb-1">Bitrate</div>
                          <div className="text-sm font-bold text-blue-400">{product.bitrate}</div>
                        </div>
                        <div className="stream-glass p-3 rounded-lg text-center border border-purple-500/20">
                          <div className="text-xs text-gray-500 uppercase font-semibold mb-1">Latency</div>
                          <div className="text-sm font-bold text-green-400">{product.latency}</div>
                        </div>
                        <div className="stream-glass p-3 rounded-lg text-center border border-purple-500/20">
                          <div className="text-xs text-gray-500 uppercase font-semibold mb-1">Platform</div>
                          <div className="text-xs font-bold text-purple-400">All</div>
                        </div>
                      </div>

                      {/* Specs */}
                      <div className="flex flex-wrap gap-2 mb-5">
                        {product.specs.map((spec, i) => (
                          <motion.span 
                            key={i} 
                            className="px-3 py-1.5 stream-glass border border-purple-500/20 rounded-lg text-xs font-semibold text-purple-300"
                            whileHover={{ scale: 1.05, y: -2 }}
                          >
                            {spec}
                          </motion.span>
                        ))}
                      </div>

                      {/* Price */}
                      <div className="mb-4 flex items-center justify-between p-3 stream-glass rounded-xl border border-green-500/20">
                        <span className="text-xs text-gray-500 uppercase font-semibold">Price</span>
                        <div>
                          <span className="text-3xl font-bold text-green-400">£{product.price}</span>
                          <span className="text-gray-500 text-sm ml-2">GBP</span>
                        </div>
                      </div>
                      
                      {/* Add to Cart Button */}
                      <motion.button 
                        onClick={(e) => handleAddToCart(product, e)}
                        className="w-full py-4 twitch-gradient text-white text-base font-bold transition-all rounded-xl flex items-center justify-center gap-3 stream-glow relative overflow-hidden"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        <span className="relative z-10 flex items-center gap-2">
                          {addedItemId === product.id ? (
                            <>
                              <Check className="w-5 h-5" />
                              Added to Cart!
                            </>
                          ) : (
                            <>
                              <ShoppingCart className="w-5 h-5" />
                              Add to Cart
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
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            <Link 
              href="/products"
              className="inline-flex items-center gap-3 px-8 py-4 stream-glass border overlay-border hover:scale-105 transition-all rounded-xl text-base font-bold stream-glow"
            >
              <span className="stream-text">View All Equipment</span>
              <ArrowRight className="w-5 h-5 text-purple-400" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />

    </div>
  );
}
