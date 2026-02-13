'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, ArrowRight, Mail, MapPin, ShieldCheck, Box, Truck, BadgeCheck, FileText, Package, Star, ShoppingCart } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
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
    <div className="flex flex-col min-h-screen font-sans bg-slate-950 text-slate-200 selection:bg-blue-500/30">
      
      <Navbar />

      {/* Hero Section - Enhanced */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden border-b border-slate-800">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>
        
        {/* Animated Gradient Orbs */}
        <motion.div 
          className="absolute top-20 -left-40 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px]"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 -right-40 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3]
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
                className="inline-flex items-center gap-2 px-3 py-1 rounded bg-blue-900/30 border border-blue-700/50 text-blue-300 text-xs font-bold uppercase tracking-widest mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <BadgeCheck className="w-4 h-4" /> Authorized UK Partner
              </motion.div>

              <motion.h1 
                className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Official Magewell <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                  Distribution.
                </span>
              </motion.h1>

              <motion.p 
                className="text-lg text-slate-400 mb-8 max-w-xl mx-auto md:mx-0 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Main UK, Germany & France distributor serving value-added resellers, 
                sub-distributors, and systems integrators. Stock holdings across multiple 
                warehouses with full manufacturer warranty support.
              </motion.p>

              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <Link 
                  href="/products" 
                  className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-bold rounded-sm transition-all text-center shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105"
                >
                  <span className="flex items-center justify-center gap-2">
                    View Product Range
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                <Link 
                  href="/contact" 
                  className="px-8 py-4 border-2 border-slate-600 hover:border-blue-500 text-slate-300 hover:text-white font-bold rounded-sm transition-all text-center hover:bg-blue-500/10"
                >
                  Become a Reseller
                </Link>
              </motion.div>

              {/* Stats Counter - New */}
              <motion.div 
                className="grid grid-cols-3 gap-6 max-w-xl mx-auto md:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                <div className="text-center md:text-left">
                  <div className="text-3xl font-bold text-white mb-1">76+</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider">Products</div>
                </div>
                <div className="text-center md:text-left">
                  <div className="text-3xl font-bold text-white mb-1">24/7</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider">Support</div>
                </div>
                <div className="text-center md:text-left">
                  <div className="text-3xl font-bold text-white mb-1">UK</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider">Stock</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Content - Featured Product Card */}
            <motion.div 
              className="flex-1 relative w-full max-w-md"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.div 
                className="absolute inset-0 bg-blue-500/20 blur-[100px] rounded-full"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div 
                className="relative bg-slate-900 border border-slate-700 p-6 rounded-lg shadow-2xl"
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                 <div className="flex justify-between items-center border-b border-slate-800 pb-4 mb-4">
                    <span className="text-xs font-mono text-slate-500">FEATURED UNIT</span>
                    <span className="text-xs font-bold text-green-400 flex items-center gap-1">
                      <motion.div 
                        className="w-2 h-2 bg-green-500 rounded-full"
                        animate={{ opacity: [1, 0.3, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      IN STOCK
                    </span>
                 </div>
                 <motion.div
                   whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                 >
                   <Image
                      src="https://darkturquoise-pigeon-678798.hostingersite.com/wp-content/uploads/2026/01/hdmi-usb.61gen2.png"
                      alt="Magewell Unit"
                      width={400}
                      height={300}
                      className="w-full h-auto object-contain"
                   />
                 </motion.div>
                 <div className="mt-4 pt-4 border-t border-slate-800 grid grid-cols-2 gap-4">
                    <div>
                        <span className="block text-[10px] text-slate-500 uppercase">Model</span>
                        <span className="font-mono text-sm text-white">USB Capture HDMI</span>
                    </div>
                    <div className="text-right">
                        <span className="block text-[10px] text-slate-500 uppercase">Part #</span>
                        <span className="font-mono text-sm text-white">32060</span>
                    </div>
                 </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Distributor Benefits Bar - Enhanced */}
      <section className="bg-gradient-to-r from-blue-950 via-blue-900 to-blue-950 border-y border-blue-900/50 py-10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            {[
              { icon: BadgeCheck, title: "Official Warranty", desc: "Direct manufacturer support & RMAs." },
              { icon: Box, title: "UK Warehouse Stock", desc: "No import duties or long lead times." },
              { icon: Truck, title: "Next Day Delivery", desc: "Order by 4pm for same-day dispatch." }
            ].map((benefit, index) => (
              <motion.div 
                key={index}
                className="flex items-center gap-4 justify-center md:justify-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
              >
                  <motion.div 
                    className="p-3 bg-blue-900/50 rounded-lg text-blue-300 shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <benefit.icon className="w-6 h-6" />
                  </motion.div>
                  <div>
                      <h3 className="text-white font-bold text-lg">{benefit.title}</h3>
                      <p className="text-sm text-blue-200">{benefit.desc}</p>
                  </div>
              </motion.div>
            ))}
        </div>
      </section>

      {/* Product Catalog Section - Enhanced */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            className="flex justify-between items-end mb-12 border-b border-slate-800 pb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h2 className="text-3xl font-bold text-white uppercase tracking-wide">Core Inventory</h2>
              <p className="text-slate-500 text-sm mt-2">Professional video capture solutions</p>
            </div>
            <Link href="/products" className="text-blue-500 hover:text-white flex items-center gap-2 text-sm font-bold uppercase group">
              View All 76 SKUs 
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
                    className="h-full bg-slate-900 border border-slate-800 overflow-hidden rounded-lg"
                    whileHover={{ 
                      y: -8,
                      borderColor: 'rgb(59 130 246)',
                      boxShadow: '0 20px 40px rgba(59, 130, 246, 0.15)',
                      transition: { duration: 0.3 }
                    }}
                  >
                    {/* Image Section */}
                    <div className="h-56 relative bg-gradient-to-br from-slate-800 to-slate-900 p-6 flex items-center justify-center border-b border-slate-800 overflow-hidden">
                      {/* Premium Badge */}
                      <motion.div 
                        className="absolute top-3 right-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-[10px] font-bold px-3 py-1.5 uppercase tracking-wider rounded-full shadow-lg flex items-center gap-1"
                        whileHover={{ scale: 1.05 }}
                      >
                        <Star className="w-3 h-3 fill-current" />
                        {product.tag}
                      </motion.div>

                      {/* Image with Hover Effect */}
                      <motion.div
                        className="relative w-full h-full"
                        whileHover={{ scale: 1.08, rotateY: 5 }}
                        transition={{ duration: 0.4 }}
                      >
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-contain drop-shadow-2xl"
                        />
                      </motion.div>

                      {/* Gradient Overlay on Hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    
                    {/* Content Section */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors mb-3 line-clamp-2">
                        {product.name}
                      </h3>
                      
                      {/* Stock Status - Enhanced */}
                      <div className="flex items-center gap-2 mb-4 p-2 bg-slate-800/50 rounded">
                        <motion.div 
                          className={`w-2 h-2 rounded-full ${product.stockStatus.includes('Low') ? 'bg-amber-500' : 'bg-green-500'}`}
                          animate={{ 
                            scale: [1, 1.2, 1],
                            opacity: [1, 0.6, 1]
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                        <span className="text-xs text-slate-300 font-medium">{product.stockStatus}</span>
                      </div>

                      {/* Specs List - Enhanced */}
                      <ul className="text-xs text-slate-500 space-y-2 mb-5 border-t border-slate-800 pt-4">
                        {product.specs.map((spec, i) => (
                          <motion.li 
                            key={i} 
                            className="flex items-center gap-2"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * i }}
                          >
                            <div className="w-1 h-1 rounded-full bg-blue-500" />
                            <span className="text-slate-300 font-medium">{spec}</span>
                          </motion.li>
                        ))}
                      </ul>

                      {/* Price and Add to Cart */}
                      <div className="mb-3">
                        <span className="text-3xl font-bold text-blue-400">£{product.price}</span>
                        <span className="text-slate-500 text-sm ml-2">GBP</span>
                      </div>
                      <motion.button 
                        onClick={(e) => handleAddToCart(product, e)}
                        className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold uppercase transition-all rounded-md shadow-md flex items-center justify-center gap-2"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <ShoppingCart className="w-4 h-4" />
                        {addedItemId === product.id ? 'Added to Cart!' : 'Add to Cart'}
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