'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Plug, Play, ShoppingCart, CheckCircle2, Zap, ArrowRight, Cpu, HardDrive } from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SignalFlowVisualizer from '@/components/SignalFlowVisualizer';
import QualityComparison from '@/components/QualityComparison';
import { useCart } from '@/contexts/CartContext';

export default function Home() {
  const { addItem } = useCart();
  const [addedToCart, setAddedToCart] = useState(false);

  const flagship = {
    id: 279,
    slug: "magewell-usb-capture-hdmi-gen-2",
    name: "USB Capture HDMI Gen 2",
    inputPort: "HDMI 1.4",
    outputPort: "USB 3.0",
    specs: {
      resolution: "1080p60",
      bandwidth: "10 Gbps",
      latency: "< 1ms",
      compatibility: "Universal"
    },
    features: ["Hardware Scaling", "Loop-Through", "Driver-Free", "Plug & Play", "Cross-Platform"],
    image: "https://darkturquoise-pigeon-678798.hostingersite.com/wp-content/uploads/2026/01/hdmi-usb.61gen2.png",
    price: 100,
    compatibility: ["OBS", "vMix", "Zoom", "Teams", "Skype"]
  };

  const handleAddFlagship = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem({
      id: flagship.id.toString(),
      name: flagship.name,
      price: flagship.price,
      imageUrl: flagship.image,
      slug: flagship.slug,
    });
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <div className="flex flex-col min-h-screen text-white selection:bg-fiber-blue/20 overflow-hidden" style={{ background: 'var(--fiber-gradient)' }}>
      
      {/* Fiber Grid Background */}
      <div className="fixed inset-0 builder-canvas opacity-30 pointer-events-none" />
      
      <Navbar />

      {/* FIBER OPTIC HERO SECTION */}
      <section className="relative pt-28 pb-24 md:pt-36 md:pb-32 overflow-hidden">
        
        {/* Blue Glow */}
        <div className="absolute inset-0 opacity-30" style={{ 
          background: 'radial-gradient(ellipse at 50% 0%, rgba(59, 130, 246, 0.3), transparent 60%)'
        }} />
        
        <div className="max-w-7xl mx-auto px-4 relative z-20">
          
          {/* Hero Content */}
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-lg glass-panel mb-8 studio-border"
              whileHover={{ scale: 1.03 }}
            >
              <div className="status-indicator connected" />
              <span className="text-xs font-semibold uppercase tracking-widest text-fiber-cyan">Professional Grade Equipment</span>
            </motion.div>

            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-[0.95] tracking-tight">
              <span className="block text-cool-white text-2xl md:text-3xl mb-6 font-medium tracking-wide">Premium</span>
              <span className="block text-gradient text-7xl md:text-[9rem]">
                CAPTURE
              </span>
              <span className="block text-cool-white text-3xl md:text-5xl mt-6 font-medium tracking-wide">
                Hardware
              </span>
            </h1>

            <motion.p 
              className="text-lg md:text-xl text-cool-gray mb-12 max-w-3xl mx-auto leading-relaxed font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Professional USB video capture devices engineered for broadcast studios, 
              content creators, and video production professionals. 
              <span className="text-fiber-cyan font-medium"> Uncompromising quality</span> in every signal.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Link 
                href="#products" 
                className="btn-primary text-sm px-10 py-4"
              >
                <span className="flex items-center justify-center gap-2">
                  <Play className="w-4 h-4" />
                  EXPLORE EQUIPMENT
                </span>
              </Link>
              <Link 
                href="/how-it-works" 
                className="btn-secondary text-sm px-10 py-4"
              >
                HOW IT WORKS
              </Link>
            </motion.div>
          </motion.div>

          {/* Feature Highlights */}
          <motion.div 
            className="mb-24"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                {
                  icon: Cpu,
                  title: "Professional Grade",
                  desc: "Broadcast-quality signal processing",
                },
                {
                  icon: Zap,
                  title: "Zero Latency",
                  desc: "Real-time capture, no compression",
                },
                {
                  icon: HardDrive,
                  title: "Universal Compatibility",
                  desc: "Works with all major platforms",
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="port-module p-8 relative brushed-metal"
                  whileHover={{ y: -3 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + i * 0.1 }}
                >
                  <div 
                    className="w-14 h-14 rounded-lg flex items-center justify-center mb-5 metal-surface studio-border"
                  >
                    <item.icon className="w-7 h-7 text-fiber-cyan" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 uppercase tracking-tight text-soft-white">{item.title}</h3>
                  <p className="text-cool-gray text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SIGNAL FLOW VISUALIZER - Desktop only */}
      <div className="hidden lg:block">
        <SignalFlowVisualizer />
      </div>

      {/* QUALITY COMPARISON */}
      <QualityComparison />

      {/* FLAGSHIP PRODUCT SHOWCASE */}
      <section id="products" className="py-28 relative">
        <div className="absolute inset-0 opacity-10" style={{ 
          background: 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.2), transparent)'
        }} />
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 glass-panel rounded-lg studio-border">
              <Plug className="w-4 h-4 text-fiber-cyan" />
              <span className="text-xs text-cool-gray uppercase tracking-widest font-semibold">Flagship Product</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold mb-6 uppercase tracking-tight">
              <span className="text-gradient">USB Capture HDMI Gen 2</span>
            </h2>
            <p className="text-cool-gray text-lg max-w-2xl mx-auto font-light">
              Our most popular capture device. Professional HDMI to USB conversion with zero latency and universal compatibility.
            </p>
          </motion.div>

          {/* Flagship Hero Layout */}
          <motion.div
            className="glass-panel rounded-2xl studio-border overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid md:grid-cols-2 gap-0">
              {/* Product Image */}
              <div className="relative p-8 md:p-12 flex items-center justify-center min-h-[360px] md:min-h-[480px]" style={{ background: 'linear-gradient(135deg, var(--deep-void), var(--dark-blue))' }}>
                <div className="absolute top-5 left-5 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-fiber-cyan/10 border border-fiber-cyan/30">
                  <div className="w-2 h-2 rounded-full bg-fiber-cyan animate-pulse" />
                  <span className="text-[10px] text-fiber-cyan font-semibold uppercase">In Stock</span>
                </div>
                <motion.div
                  className="relative w-full h-full max-w-sm mx-auto"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                >
                  <Image
                    src={flagship.image}
                    alt={flagship.name}
                    fill
                    className="object-contain"
                    style={{ filter: 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.5)) drop-shadow(0 0 40px rgba(59, 130, 246, 0.25))' }}
                  />
                </motion.div>
              </div>

              {/* Product Details */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="text-[10px] text-fiber-cyan font-semibold uppercase tracking-widest mb-2">Magewell</div>
                <h3 className="text-3xl md:text-4xl font-bold text-soft-white mb-4">{flagship.name}</h3>
                <p className="text-cool-gray text-sm leading-relaxed mb-8 max-w-md">
                  Capture HDMI video at up to 1080p60 with hardware scaling, loop-through output, and driver-free operation. The industry standard for professional capture.
                </p>

                {/* Specs */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {Object.entries(flagship.specs).map(([key, value], i) => (
                    <div key={i} className="bg-dark-blue/60 border border-fiber-blue/25 rounded-lg p-3">
                      <div className="text-[9px] text-cool-gray/70 uppercase tracking-wider font-semibold mb-1">{key}</div>
                      <div className="text-sm font-bold text-fiber-cyan">{value}</div>
                    </div>
                  ))}
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {flagship.features.map((feature, i) => (
                    <span key={i} className="px-3 py-1.5 bg-fiber-blue/10 border border-fiber-blue/25 rounded-lg text-[10px] font-semibold uppercase text-cool-gray">
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Price and Actions */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <div>
                    <span className="text-4xl font-bold text-gradient">£{flagship.price}</span>
                    <span className="text-cool-gray/60 text-sm ml-2">GBP</span>
                  </div>
                  <div className="flex gap-3 w-full sm:w-auto">
                    <motion.button
                      onClick={handleAddFlagship}
                      className="btn-primary px-6 py-3 text-sm font-semibold flex items-center gap-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {addedToCart ? (
                        <>
                          <CheckCircle2 className="w-4 h-4" />
                          Added!
                        </>
                      ) : (
                        <>
                          <ShoppingCart className="w-4 h-4" />
                          Add to Cart
                        </>
                      )}
                    </motion.button>
                    <Link
                      href={`/products/${flagship.slug}`}
                      className="btn-secondary px-6 py-3 text-sm font-semibold"
                    >
                      View Details
                    </Link>
                  </div>
                </div>

                {/* Compatibility */}
                <div className="mt-8 pt-6 border-t border-fiber-blue/20">
                  <div className="text-[10px] text-cool-gray/60 uppercase tracking-wider font-semibold mb-3">Works with</div>
                  <div className="flex flex-wrap gap-2">
                    {flagship.compatibility.map((app, i) => (
                      <span key={i} className="flex items-center gap-1.5 text-xs text-cool-gray bg-dark-blue/40 border border-fiber-blue/15 rounded-md px-2.5 py-1">
                        <CheckCircle2 className="w-3 h-3 text-fiber-cyan" />
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* View All CTA */}
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Link 
              href="/products"
              className="inline-flex items-center gap-3 px-10 py-4 btn-secondary text-sm font-semibold uppercase"
            >
              <span>View All Products</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* COMPATIBILITY SHOWCASE */}
      <section className="py-28 relative studio-border border-t">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 uppercase tracking-tight">
              <span className="text-gradient">Universal Compatibility</span>
            </h2>
            <p className="text-cool-gray text-lg font-light">Seamlessly integrate with industry-standard software</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {["OBS Studio", "vMix", "Zoom", "Microsoft Teams", "Wirecast", "XSplit", "Skype", "Discord"].map((app, i) => (
              <motion.div
                key={i}
                className="port-module p-6 text-center brushed-metal"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -3 }}
              >
                <div className="w-12 h-12 rounded-lg metal-surface studio-border flex items-center justify-center mx-auto mb-3">
                  <CheckCircle2 className="w-6 h-6 text-fiber-cyan" />
                </div>
                <div className="text-sm font-semibold text-soft-white">{app}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

    </div>
  );
}
