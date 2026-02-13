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
    <div className="flex flex-col min-h-screen text-white selection:bg-bronze/20 overflow-hidden" style={{ background: 'var(--metal-gradient)' }}>
      
      {/* Subtle Texture Background */}
      <div className="fixed inset-0 builder-canvas opacity-30 pointer-events-none" />
      
      <Navbar />

      {/* PREMIUM HERO SECTION */}
      <section className="relative pt-36 pb-24 md:pt-48 md:pb-32 overflow-hidden">
        
        {/* Dramatic Lighting */}
        <div className="absolute inset-0 opacity-20" style={{ 
          background: 'radial-gradient(ellipse at 50% 0%, rgba(160, 130, 109, 0.2), transparent 60%)'
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
              <span className="text-xs font-semibold uppercase tracking-widest text-bronze">Professional Grade Equipment</span>
            </motion.div>

            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-[0.95] tracking-tight">
              <span className="block text-warm-gray text-2xl md:text-3xl mb-6 font-medium tracking-wide">Premium</span>
              <span className="block text-gradient text-7xl md:text-[9rem]">
                CAPTURE
              </span>
              <span className="block text-warm-gray text-3xl md:text-5xl mt-6 font-medium tracking-wide">
                Hardware
              </span>
            </h1>

            <motion.p 
              className="text-lg md:text-xl text-warm-gray mb-12 max-w-3xl mx-auto leading-relaxed font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Professional USB video capture devices engineered for broadcast studios, 
              content creators, and video production professionals. 
              <span className="text-bronze font-medium"> Uncompromising quality</span> in every signal.
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
                    <item.icon className="w-7 h-7 text-bronze" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 uppercase tracking-tight text-soft-white">{item.title}</h3>
                  <p className="text-warm-gray text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* PREMIUM EQUIPMENT CATALOG */}
      <section id="products" className="py-28 relative">
        <div className="absolute inset-0 opacity-10" style={{ 
          background: 'radial-gradient(circle at 50% 50%, rgba(160, 130, 109, 0.15), transparent)'
        }} />
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 glass-panel rounded-lg studio-border">
              <Plug className="w-4 h-4 text-bronze" />
              <span className="text-xs text-warm-gray uppercase tracking-widest font-semibold">Professional Equipment</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold mb-6 uppercase tracking-tight">
              <span className="text-gradient">Capture Hardware</span>
            </h2>
            <p className="text-warm-gray text-lg max-w-2xl mx-auto font-light">
              Studio-grade USB video capture devices. Engineered for professionals who demand excellence.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {devices.map((device, index) => (
              <motion.div
                key={device.id}
                initial={{ opacity: 0, y: 40 }}
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
                    whileHover={{ scale: 1.01 }}
                  >
                    {/* Status Badge */}
                    <div className="flex justify-between items-start mb-6">
                      <div className="compat-badge compatible">
                        <div className="status-indicator connected" />
                        IN STOCK
                      </div>
                      <div className="signal-strength">
                        {[1,2,3,4,5].map((bar) => (
                          <div key={bar} className="signal-bar active" />
                        ))}
                      </div>
                    </div>

                    {/* Product Image with Dramatic Lighting */}
                    <div className="h-72 relative p-8 flex items-center justify-center mb-6 rounded-lg metal-surface studio-border">
                      <motion.div
                        className="relative w-full h-full"
                        whileHover={{ scale: 1.08 }}
                        transition={{ duration: 0.4 }}
                      >
                        <Image
                          src={device.image}
                          alt={device.name}
                          fill
                          className="object-contain"
                          style={{ 
                            filter: 'drop-shadow(0 12px 24px rgba(0, 0, 0, 0.5)) drop-shadow(0 0 30px rgba(160, 130, 109, 0.2))'
                          }}
                        />
                      </motion.div>

                      {/* Connection Points */}
                      <div className="connection-point" style={{ top: '50%', left: '-7px', transform: 'translateY(-50%)' }} />
                      <div className="connection-point" style={{ top: '50%', right: '-7px', transform: 'translateY(-50%)' }} />
                    </div>

                    {/* Port Visualization */}
                    <div className="flex items-center justify-center gap-4 mb-6 p-4 rounded-lg leather-texture studio-border">
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
                            duration: 2.5,
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
                    <h3 className="text-2xl font-semibold text-soft-white group-hover:text-gradient transition-all mb-4 uppercase tracking-tight">
                      {device.shortName}
                    </h3>
                    
                    {/* Specs Grid */}
                    <div className="grid grid-cols-2 gap-3 mb-5">
                      {Object.entries(device.specs).map(([key, value], i) => (
                        <div key={i} className="glass-panel p-3 rounded-lg studio-border">
                          <div className="text-[9px] text-warm-gray mb-1 uppercase tracking-wider font-semibold">{key}</div>
                          <div className="text-sm font-semibold text-bronze">{value}</div>
                        </div>
                      ))}
                    </div>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {device.features.map((feature, i) => (
                        <span 
                          key={i} 
                          className="px-3 py-1.5 glass-panel rounded-md text-[10px] font-semibold uppercase text-warm-gray studio-border"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* Price */}
                    <div className="mb-5 flex items-center justify-between p-5 glass-panel rounded-lg studio-border">
                      <span className="text-xs text-warm-gray uppercase font-semibold tracking-wider">Price</span>
                      <div>
                        <span className="text-3xl font-bold text-gradient">£{device.price}</span>
                        <span className="text-warm-gray text-sm ml-2">GBP</span>
                      </div>
                    </div>
                    
                    {/* Add to Cart */}
                    <motion.button 
                      onClick={(e) => handleAddToCart(device, e)}
                      className="w-full btn-primary py-4 text-sm font-semibold transition-all flex items-center justify-center gap-3 uppercase tracking-wide"
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                    >
                      {addedItemId === device.id ? (
                        <>
                          <CheckCircle2 className="w-5 h-5" />
                          ADDED TO CART
                        </>
                      ) : (
                        <>
                          <ShoppingCart className="w-5 h-5" />
                          ADD TO CART
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
            className="text-center mt-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <Link 
              href="/products"
              className="inline-flex items-center gap-3 px-12 py-5 btn-primary text-base font-semibold uppercase"
            >
              <span>VIEW ALL EQUIPMENT</span>
              <ArrowRight className="w-5 h-5" />
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
            <p className="text-warm-gray text-lg font-light">Seamlessly integrate with industry-standard software</p>
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
                  <CheckCircle2 className="w-6 h-6 text-bronze" />
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
