'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Plug, Play, ShoppingCart, CheckCircle2, Zap, ArrowRight, Cpu, HardDrive, Monitor } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useCart } from '@/contexts/CartContext';

export default function Home() {
  const { addItem } = useCart();
  const [addedItemId, setAddedItemId] = useState<number | null>(null);
  const [selectedDevice, setSelectedDevice] = useState<number | null>(null);

  const handleAddToCart = (product: typeof devices[0], e: React.MouseEvent) => {
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

  const devices = [
    {
      id: 279,
      slug: "magewell-usb-capture-hdmi-gen-2",
      name: "USB Capture HDMI Gen 2",
      shortName: "HDMI Gen 2",
      inputPort: "HDMI 1.4",
      outputPort: "USB 3.0",
      specs: {
        resolution: "1080p60",
        bandwidth: "10 Gbps",
        latency: "< 1ms",
        compatibility: "Universal"
      },
      features: ["Hardware Scaling", "Loop-Through", "Driver-Free"],
      image: "https://darkturquoise-pigeon-678798.hostingersite.com/wp-content/uploads/2026/01/hdmi-usb.61gen2.png",
      price: 100,
      compatibility: ["OBS", "vMix", "Zoom", "Teams", "Skype"]
    },
    {
      id: 280,
      slug: "magewell-usb-capture-aio",
      name: "USB Capture AIO",
      shortName: "AIO Multi",
      inputPort: "HDMI/SDI/DVI",
      outputPort: "USB 3.0",
      specs: {
        resolution: "1080p60",
        bandwidth: "10 Gbps",
        latency: "< 1ms",
        compatibility: "Multi-Input"
      },
      features: ["Triple Input", "Auto-Switch", "Universal Driver"],
      image: "https://darkturquoise-pigeon-678798.hostingersite.com/wp-content/uploads/2026/01/usb-capture-aio-1.png",
      price: 100,
      compatibility: ["OBS", "vMix", "Wirecast", "XSplit"]
    },
    {
      id: 281,
      slug: "magewell-usb-capture-sdi-gen-2",
      name: "USB Capture SDI Gen 2",
      shortName: "SDI Gen 2",
      inputPort: "3G-SDI",
      outputPort: "USB 3.0",
      specs: {
        resolution: "1080p60",
        bandwidth: "3 Gbps",
        latency: "< 1ms",
        compatibility: "Broadcast"
      },
      features: ["Professional SDI", "Loop-Through", "Embedded Audio"],
      image: "https://darkturquoise-pigeon-678798.hostingersite.com/wp-content/uploads/2026/01/sdi-usb.606.png",
      price: 100,
      compatibility: ["vMix", "Wirecast", "OBS", "Premiere Pro"]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen text-white selection:bg-cyan-500/30 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0f0f14 0%, #14141e 100%)' }}>
      
      {/* Grid Background */}
      <div className="fixed inset-0 builder-canvas opacity-40 pointer-events-none" />
      
      <Navbar />

      {/* MODULAR BUILDER HERO */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden">
        
        <div className="max-w-7xl mx-auto px-4 relative z-20">
          
          {/* Title */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-panel mb-6 border border-cyan-500/30"
              whileHover={{ scale: 1.05 }}
            >
              <div className="status-indicator connected" />
              <span className="text-sm font-bold uppercase tracking-wider">MODULAR SYSTEM BUILDER</span>
            </motion.div>

            <h1 className="text-5xl md:text-8xl font-bold mb-6 leading-tight">
              <span className="block text-gray-400 text-2xl md:text-4xl mb-4">BUILD YOUR</span>
              <span className="block text-gradient text-7xl md:text-[10rem]">
                CAPTURE CHAIN
              </span>
              <span className="block text-gray-500 text-3xl md:text-5xl mt-4">
                <span className="text-cyan-400">HDMI</span> → <span className="text-purple-400">PROCESS</span> → <span className="text-green-400">USB</span>
              </span>
            </h1>

            <motion.p 
              className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Drag, connect, and configure your perfect video capture workflow. 
              See compatibility <span className="text-cyan-400 font-semibold">in real-time</span> as you build.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Link 
                href="#builder" 
                className="btn-primary text-base px-8 py-4"
              >
                <span className="flex items-center justify-center gap-2">
                  <Play className="w-5 h-5" />
                  START BUILDING
                </span>
              </Link>
              <Link 
                href="/products" 
                className="btn-secondary text-base px-8 py-4"
              >
                VIEW ALL MODULES
              </Link>
            </motion.div>
          </motion.div>

          {/* Interactive Demo Section */}
          <motion.div 
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  step: "01",
                  icon: Monitor,
                  title: "SELECT SOURCE",
                  desc: "Choose your HDMI/SDI input device",
                  color: "#0066ff"
                },
                {
                  step: "02",
                  icon: Plug,
                  title: "CONNECT CAPTURE",
                  desc: "Drop in USB capture module",
                  color: "#9d4edd"
                },
                {
                  step: "03",
                  icon: Cpu,
                  title: "CONFIGURE OUTPUT",
                  desc: "Set your software destination",
                  color: "#00cc66"
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="port-module p-8 relative"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + i * 0.1 }}
                >
                  <div className="text-6xl font-bold text-gray-800 mb-4">{item.step}</div>
                  <div 
                    className="w-16 h-16 rounded-xl flex items-center justify-center mb-4"
                    style={{ 
                      background: `${item.color}20`,
                      border: `2px solid ${item.color}`
                    }}
                  >
                    <item.icon className="w-8 h-8" style={{ color: item.color }} />
                  </div>
                  <h3 className="text-xl font-bold mb-2 uppercase" style={{ color: item.color }}>{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* DEVICE MODULES CATALOG */}
      <section id="builder" className="py-24 relative">
        <div className="absolute inset-0 opacity-20" style={{ background: 'radial-gradient(circle at 50% 50%, rgba(0, 212, 255, 0.1), transparent)' }} />
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 glass-panel rounded-full border border-cyan-500/30">
              <Plug className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-gray-400 uppercase tracking-wide font-semibold">AVAILABLE MODULES</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold mb-6 uppercase">
              <span className="text-gradient">CAPTURE DEVICES</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Professional USB video capture modules. Connect any HDMI/SDI source to your computer.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {devices.map((device, index) => (
              <motion.div
                key={device.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="fade-in"
              >
                <Link 
                  href={`/products/${device.slug}`}
                  className="group block h-full"
                >
                  <motion.div
                    className="h-full device-module isometric-card"
                    whileHover={{ scale: 1.02 }}
                  >
                    {/* Port Indicators */}
                    <div className="flex justify-between items-start mb-6">
                      <div className="compat-badge compatible">
                        <div className="status-indicator connected" />
                        COMPATIBLE
                      </div>
                      <div className="signal-strength">
                        {[1,2,3,4,5].map((bar) => (
                          <div key={bar} className="signal-bar active" />
                        ))}
                      </div>
                    </div>

                    {/* Device Image */}
                    <div className="h-64 relative p-6 flex items-center justify-center mb-6 rounded-xl border border-gray-800">
                      <motion.div
                        className="relative w-full h-full"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Image
                          src={device.image}
                          alt={device.name}
                          fill
                          className="object-contain"
                          style={{ filter: 'drop-shadow(0 10px 30px rgba(0, 212, 255, 0.3))' }}
                        />
                      </motion.div>

                      {/* Connection Points */}
                      <div className="connection-point" style={{ top: '50%', left: '-8px', transform: 'translateY(-50%)' }} />
                      <div className="connection-point" style={{ top: '50%', right: '-8px', transform: 'translateY(-50%)' }} />
                    </div>

                    {/* Port Visualization */}
                    <div className="flex items-center justify-center gap-4 mb-6 p-4 rounded-xl" style={{ background: 'rgba(0, 0, 0, 0.3)' }}>
                      <div className="text-center">
                        <div className="hdmi-port mb-6 mx-auto" />
                        <div className="port-label">{device.inputPort}</div>
                      </div>
                      <div className="flex-1 relative">
                        <div className="trace-connector" />
                        <motion.div
                          className="connection-particle"
                          animate={{
                            x: ['0%', '100%'],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "linear"
                          }}
                        />
                      </div>
                      <div className="text-center">
                        <div className="usb-port mb-6 mx-auto" />
                        <div className="port-label">{device.outputPort}</div>
                      </div>
                    </div>

                    {/* Device Info */}
                    <h3 className="text-2xl font-bold text-white group-hover:text-gradient transition-all mb-3 uppercase">
                      {device.shortName}
                    </h3>
                    
                    {/* Specs Grid */}
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      {Object.entries(device.specs).map(([key, value], i) => (
                        <div key={i} className="glass-panel p-3 rounded-lg border border-gray-700/50">
                          <div className="text-[9px] text-gray-500 mb-1 uppercase tracking-wider font-mono">{key}</div>
                          <div className="text-sm font-bold text-cyan-400">{value}</div>
                        </div>
                      ))}
                    </div>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {device.features.map((feature, i) => (
                        <span 
                          key={i} 
                          className="px-3 py-1.5 glass-panel rounded-lg text-[10px] font-bold uppercase text-gray-300 border border-gray-700/50"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* Price */}
                    <div className="mb-4 flex items-center justify-between p-4 glass-panel rounded-xl border border-purple-500/30">
                      <span className="text-xs text-gray-400 uppercase font-bold tracking-wider">MODULE PRICE</span>
                      <div>
                        <span className="text-3xl font-bold text-gradient">£{device.price}</span>
                        <span className="text-gray-500 text-sm ml-2">GBP</span>
                      </div>
                    </div>
                    
                    {/* Add to Cart */}
                    <motion.button 
                      onClick={(e) => handleAddToCart(device, e)}
                      className="w-full btn-primary py-4 text-base font-bold transition-all flex items-center justify-center gap-3 uppercase tracking-wider"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {addedItemId === device.id ? (
                        <>
                          <CheckCircle2 className="w-5 h-5" />
                          ADDED TO CHAIN
                        </>
                      ) : (
                        <>
                          <ShoppingCart className="w-5 h-5" />
                          ADD MODULE
                        </>
                      )}
                    </motion.button>
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
            transition={{ delay: 0.5 }}
          >
            <Link 
              href="/products"
              className="inline-flex items-center gap-3 px-10 py-5 btn-primary text-lg font-bold uppercase"
            >
              <span className="text-gradient">VIEW ALL MODULES</span>
              <ArrowRight className="w-6 h-6" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* COMPATIBILITY SHOWCASE */}
      <section className="py-24 relative border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 uppercase">
              <span className="text-gradient">UNIVERSAL COMPATIBILITY</span>
            </h2>
            <p className="text-gray-400 text-lg">Connect to any software, platform, or workflow</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["OBS Studio", "vMix", "Zoom", "Microsoft Teams", "Wirecast", "XSplit", "Skype", "Discord"].map((app, i) => (
              <motion.div
                key={i}
                className="port-module p-6 text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mx-auto mb-3">
                  <CheckCircle2 className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="text-sm font-semibold text-gray-300">{app}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

    </div>
  );
}
