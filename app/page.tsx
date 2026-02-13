'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, ArrowRight, ShieldCheck, Trophy, Zap, Target, Award, ShoppingCart, Gamepad2, Crown } from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import RGBParticles from '@/components/RGBParticles';
import StadiumCrowd from '@/components/StadiumCrowd';
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
      tag: "LEGENDARY",
      tier: "S",
      stats: { capture: 100, latency: 95, compat: 100 },
      price: 100
    },
    {
      id: 280,
      slug: "magewell-usb-capture-aio",
      name: "USB Capture AIO",
      specs: ["HDMI/SDI/DVI", "1080p60", "Multi-Input"],
      stockStatus: "Low Stock",
      image: "https://darkturquoise-pigeon-678798.hostingersite.com/wp-content/uploads/2026/01/usb-capture-aio-1.png",
      tag: "EPIC",
      tier: "A",
      stats: { capture: 100, latency: 90, compat: 100 },
      price: 100
    },
    {
      id: 281,
      slug: "magewell-usb-capture-sdi-gen-2",
      name: "USB Capture SDI Gen 2",
      specs: ["3G-SDI", "Loop-Through", "Driver-Free"],
      stockStatus: "In Stock",
      image: "https://darkturquoise-pigeon-678798.hostingersite.com/wp-content/uploads/2026/01/sdi-usb.606.png",
      tag: "PRO",
      tier: "S",
      stats: { capture: 100, latency: 98, compat: 95 },
      price: 100
    }
  ];

  return (
    <div className="flex flex-col min-h-screen font-sans text-white selection:bg-cyan-500/30 overflow-x-hidden" style={{ background: '#000000' }}>
      
      {/* RGB Gaming Background Effects */}
      <RGBParticles />
      <div className="fixed inset-0 hex-gaming opacity-30 pointer-events-none" />
      
      <Navbar />

      {/* ESPORTS ARENA HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Stadium Crowd */}
        <StadiumCrowd />
        
        {/* Jumbotron Spotlights */}
        <div className="absolute top-20 left-1/4 w-96 h-96 rounded-full blur-[150px] opacity-50" 
             style={{ background: 'radial-gradient(circle, #00ffff, transparent)' }} />
        <div className="absolute top-20 right-1/4 w-96 h-96 rounded-full blur-[150px] opacity-50"
             style={{ background: 'radial-gradient(circle, #ff0080, transparent)' }} />
        <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full blur-[150px] opacity-40"
             style={{ background: 'radial-gradient(circle, #00ff41, transparent)' }} />

        <div className="max-w-7xl mx-auto px-4 relative z-20">
          <div className="text-center">
            {/* Tournament Badge */}
            <motion.div 
              className="inline-flex items-center gap-3 px-6 py-3 rounded-xl gaming-glass border-2 rgb-border mb-8"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Trophy className="w-6 h-6 text-yellow-400" />
              <span className="text-lg font-bold uppercase tracking-wider">Magewell Official Distributor</span>
              <Crown className="w-6 h-6 text-yellow-400" />
            </motion.div>

            {/* Main Title - Stadium Style */}
            <motion.h1 
              className="text-6xl md:text-9xl font-black uppercase tracking-tight mb-6 leading-none"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="block gaming-text">CAPTURE</span>
              <span className="block text-white">THE</span>
              <span className="block" style={{
                background: 'linear-gradient(90deg, #00ffff 0%, #ff0080 50%, #00ff41 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                VICTORY
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              className="text-xl md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto font-semibold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Pro-Level USB Capture for <span className="gaming-text">Streamers</span>, <span style={{ color: '#ff0080' }}>Gamers</span> & <span style={{ color: '#00ff41' }}>Creators</span>
            </motion.p>

            {/* CTAs - Gaming Style */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <Link 
                href="/products" 
                className="group px-10 py-5 bg-gradient-to-r from-cyan-500 via-pink-600 to-green-500 hover:from-cyan-400 hover:to-green-400 text-white font-black rounded-xl transition-all text-center text-lg uppercase tracking-wider rgb-underglow relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  <Gamepad2 className="w-6 h-6" />
                  ENTER ARENA
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.5 }}
                />
              </Link>
              <Link 
                href="/how-it-works" 
                className="px-10 py-5 gaming-glass border-2 border-cyan-500/50 hover:border-cyan-500 text-slate-200 hover:text-white font-black rounded-xl transition-all text-center text-lg uppercase tracking-wider"
              >
                View Stats
              </Link>
            </motion.div>

            {/* Gaming Stats Display */}
            <motion.div 
              className="grid grid-cols-3 gap-6 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              {[
                { icon: Zap, label: '<1ms', sublabel: 'LATENCY', color: '#00ffff' },
                { icon: Award, label: '3-YEAR', sublabel: 'WARRANTY', color: '#ffd700' },
                { icon: Target, label: '1080p60', sublabel: 'MAX RES', color: '#00ff41' }
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  className="gaming-glass p-6 rounded-xl border-2 border-slate-700 hover:border-cyan-500 transition-all relative overflow-hidden group"
                  whileHover={{ y: -5, scale: 1.05 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <stat.icon className="w-10 h-10 mx-auto mb-3" style={{ color: stat.color }} />
                  <div className="text-3xl font-black mb-1 font-mono" style={{ color: stat.color }}>{stat.label}</div>
                  <div className="text-xs text-slate-400 uppercase tracking-widest font-bold">{stat.sublabel}</div>
                  {/* XP Bar underneath */}
                  <div className="mt-3 h-1 bg-slate-800 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full xp-bar"
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 1, delay: 1 + i * 0.2 }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Neon Divider */}
        <div className="absolute bottom-0 left-0 right-0 neon-divider" />
      </section>

      {/* Tournament Features Bar - Gaming Style */}
      <section className="border-y border-cyan-500/20 py-12 relative overflow-hidden" style={{ background: 'var(--arena-dark)' }}>
        {/* RGB Light sweep */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent"
          animate={{ x: ['-100%', '200%'] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        />
        
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            {[
              { icon: ShieldCheck, title: "WARRANTY", value: "3 YEARS", desc: "Official Support", color: '#00ffff' },
              { icon: Zap, title: "LATENCY", value: "<1MS", desc: "Zero Lag", color: '#ff0080' },
              { icon: Trophy, title: "STOCK", value: "UK READY", desc: "Next Day Ship", color: '#00ff41' }
            ].map((feat, index) => (
              <motion.div 
                key={index}
                className="gaming-glass p-6 rounded-2xl rgb-border relative overflow-hidden group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.03 }}
              >
                  {/* RGB Sweep on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-pink-500/10 to-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="flex items-center gap-4">
                    <motion.div 
                      className="p-4 rounded-xl rgb-underglow"
                      style={{ background: `${feat.color}20` }}
                      whileHover={{ scale: 1.1, rotate: 10 }}
                    >
                      <feat.icon className="w-8 h-8" style={{ color: feat.color }} />
                    </motion.div>
                    <div className="flex-1">
                      <div className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">{feat.title}</div>
                      <div className="text-3xl font-black mb-1 font-mono" style={{ color: feat.color }}>{feat.value}</div>
                      <div className="text-sm text-slate-400">{feat.desc}</div>
                    </div>
                  </div>
                  
                  {/* Stat bar */}
                  <div className="mt-4 h-2 bg-slate-900 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full"
                      style={{ background: `linear-gradient(90deg, ${feat.color}, ${feat.color}80)` }}
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

      {/* PRO LOADOUT - Product Cards Gaming Style */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-block mb-4">
              <div className="text-sm text-slate-500 uppercase tracking-widest font-bold mb-2">SELECT YOUR</div>
              <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tight">
                <span className="gaming-text">PRO</span> <span className="text-white">LOADOUT</span>
              </h2>
            </div>
            <p className="text-slate-400 text-lg font-semibold">Tournament-grade capture devices</p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="h-full level-up"
              >
                <Link 
                  href={`/products/${product.slug}`}
                  className="group block h-full"
                >
                  <motion.div
                    className="h-full gaming-glass border-2 overflow-hidden rounded-2xl relative group rgb-border"
                    whileHover={{ 
                      y: -10,
                      scale: 1.02,
                      transition: { duration: 0.3 }
                    }}
                  >
                    {/* RGB Sweep Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-pink-500/20 to-green-500/0 opacity-0 group-hover:opacity-100 pointer-events-none z-20"
                      animate={{ x: ['-100%', '200%'] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    />
                    
                    {/* Tier Badge */}
                    <div className="absolute top-4 left-4 z-30">
                      <motion.div 
                        className={`tournament-badge px-4 py-2 rounded-lg text-black text-xl font-black`}
                        whileHover={{ scale: 1.1, rotate: -5 }}
                      >
                        TIER {product.tier}
                      </motion.div>
                    </div>

                    {/* Rarity Badge */}
                    <div className="absolute top-4 right-4 z-30">
                      <motion.div 
                        className={`px-3 py-1.5 rounded-lg text-xs font-black uppercase tracking-wider ${
                          product.tag === 'LEGENDARY' ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white' :
                          product.tag === 'EPIC' ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white' :
                          'bg-gradient-to-r from-blue-600 to-cyan-600 text-white'
                        } rgb-underglow`}
                        whileHover={{ scale: 1.1 }}
                      >
                        {product.tag}
                      </motion.div>
                    </div>
                    
                    {/* Image Section with RGB Underglow */}
                    <div className="h-64 relative p-6 flex items-center justify-center border-b-2 border-cyan-500/30 overflow-hidden" 
                         style={{ background: 'linear-gradient(135deg, #13131a 0%, #1a1a28 100%)' }}>
                      
                      {/* Product Image */}
                      <motion.div
                        className="relative w-full h-full z-10"
                        whileHover={{ 
                          scale: 1.15,
                          rotateZ: 5,
                          transition: { duration: 0.4 }
                        }}
                      >
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-contain"
                          style={{ 
                            filter: 'drop-shadow(0 10px 40px rgba(0,255,255,0.6)) drop-shadow(0 10px 40px rgba(255,0,128,0.4))',
                          }}
                        />
                      </motion.div>

                      {/* Hex Gaming Pattern */}
                      <div className="absolute inset-0 hex-gaming" />
                      
                      {/* RGB Underglow */}
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-20 bg-gradient-to-t from-cyan-500/30 via-pink-500/20 to-transparent blur-xl" />
                    </div>
                    
                    {/* Content Section - Gaming UI */}
                    <div className="p-6 relative z-10">
                      <h3 className="text-2xl font-black uppercase text-white group-hover:gaming-text transition-all mb-4 leading-tight">
                        {product.name}
                      </h3>
                      
                      {/* Stock Status - Gaming */}
                      <div className="flex items-center gap-2 mb-4 p-3 gaming-glass rounded-xl border border-cyan-500/30">
                        <motion.div 
                          className={`w-3 h-3 rounded-full ${product.stockStatus.includes('Low') ? 'bg-orange-400 tally-red' : 'health-bar'}`}
                          animate={{ 
                            scale: [1, 1.4, 1],
                          }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        />
                        <span className="text-xs font-black uppercase tracking-wider" style={{ color: product.stockStatus.includes('Low') ? '#ff6600' : '#00ff41' }}>
                          {product.stockStatus}
                        </span>
                      </div>

                      {/* Gaming Stats Bars */}
                      <div className="space-y-3 mb-5">
                        {[
                          { label: 'CAPTURE', value: product.stats.capture, color: '#00ffff' },
                          { label: 'LATENCY', value: product.stats.latency, color: '#ff0080' },
                          { label: 'COMPAT', value: product.stats.compat, color: '#00ff41' }
                        ].map((stat, i) => (
                          <div key={i}>
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-[10px] text-slate-500 uppercase font-black tracking-wider">{stat.label}</span>
                              <span className="text-xs font-black font-mono" style={{ color: stat.color }}>{stat.value}%</span>
                            </div>
                            <div className="h-2 bg-slate-900 rounded-full overflow-hidden">
                              <motion.div 
                                className="h-full"
                                style={{ 
                                  background: `linear-gradient(90deg, ${stat.color}, ${stat.color}80)`,
                                  boxShadow: `0 0 10px ${stat.color}80`
                                }}
                                initial={{ width: 0 }}
                                whileInView={{ width: `${stat.value}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Specs - Gaming Tags */}
                      <div className="flex flex-wrap gap-2 mb-5">
                        {product.specs.map((spec, i) => (
                          <motion.span 
                            key={i} 
                            className="px-3 py-1.5 gaming-glass border border-cyan-500/30 rounded-lg text-xs font-bold uppercase text-cyan-300"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 + i * 0.1 }}
                            whileHover={{ scale: 1.1, y: -2 }}
                          >
                            {spec}
                          </motion.span>
                        ))}
                      </div>

                      {/* Price - Gaming Style */}
                      <div className="mb-4 flex items-center justify-between p-3 gaming-glass rounded-xl border border-yellow-500/30">
                        <span className="text-xs text-slate-500 uppercase font-black">COST</span>
                        <div>
                          <span className="text-3xl font-black font-mono text-yellow-400">£{product.price}</span>
                          <span className="text-slate-500 text-sm ml-2 font-mono">GBP</span>
                        </div>
                      </div>
                      
                      {/* Equip Button - Gaming CTA */}
                      <motion.button 
                        onClick={(e) => handleAddToCart(product, e)}
                        className="w-full py-4 bg-gradient-to-r from-cyan-500 via-pink-600 to-green-500 text-white text-base font-black uppercase tracking-wider transition-all rounded-xl flex items-center justify-center gap-3 rgb-underglow relative overflow-hidden"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        <span className="relative z-10 flex items-center gap-2">
                          {addedItemId === product.id ? (
                            <>
                              <Trophy className="w-5 h-5" />
                              EQUIPPED!
                            </>
                          ) : (
                            <>
                              <ShoppingCart className="w-5 h-5" />
                              EQUIP NOW
                            </>
                          )}
                        </span>
                        <motion.div
                          className="absolute inset-0 bg-white/30"
                          initial={{ x: '-100%' }}
                          whileHover={{ x: '200%' }}
                          transition={{ duration: 0.6 }}
                        />
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
              className="inline-flex items-center gap-3 px-8 py-4 gaming-glass border-2 rgb-border hover:scale-105 transition-all rounded-xl text-lg font-black uppercase"
            >
              <span className="gaming-text">VIEW FULL ARSENAL</span>
              <ArrowRight className="w-6 h-6 text-cyan-400" />
            </Link>
          </motion.div>
        </div>
      </section>


      <Footer />

    </div>
  );
}