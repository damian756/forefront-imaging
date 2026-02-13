'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight, Radio, Zap, Shield, Truck } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CircuitBackground from '@/components/CircuitBackground';
import { motion, AnimatePresence } from 'framer-motion';

export default function CartPage() {
  const { items, removeItem, updateQuantity, totalPrice, totalItems } = useCart();

  if (items.length === 0) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen text-white pt-32 pb-20 pcb-substrate">
          <CircuitBackground />
          <div className="fixed inset-0 tech-grid opacity-20 pointer-events-none z-0" />
          
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="text-center py-20">
              <motion.div
                className="inline-flex items-center justify-center w-32 h-32 rounded-full fiber-glass refraction-border mb-8"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.6 }}
              >
                <ShoppingBag className="w-16 h-16 text-cyan-400" />
              </motion.div>
              <motion.h1 
                className="text-5xl font-bold mb-4 prismatic-text"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                NO SIGNALS DETECTED
              </motion.h1>
              <motion.p 
                className="text-gray-400 mb-12 font-mono text-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Your transmission queue is empty. Begin signal acquisition.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Link 
                  href="/products"
                  className="inline-flex items-center gap-3 px-8 py-4 refraction-border text-white font-bold rounded-xl transition-all fiber-glow font-mono relative overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <Radio className="w-5 h-5" />
                    BROWSE DEVICES
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </span>
                  <div className="absolute inset-0 light-streak opacity-0 group-hover:opacity-100" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen text-white pt-32 pb-20 pcb-substrate">
        <CircuitBackground />
        <div className="fixed inset-0 tech-grid opacity-20 pointer-events-none z-0" />
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          {/* Header */}
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 glass-frosted rounded-full border border-cyan-500/30 mb-6">
              <ShoppingBag className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-gray-400 uppercase tracking-wide font-semibold font-mono">Transmission Queue</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="prismatic-text">Signal</span> <span className="text-white">Cart</span>
            </h1>
            <p className="text-gray-400 font-mono">
              {totalItems} {totalItems === 1 ? 'device' : 'devices'} queued for acquisition
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              <AnimatePresence>
                {items.map((item, index) => (
                  <motion.div
                    key={item.id}
                    className="fiber-glass refraction-border rounded-2xl p-6 relative overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <div className="absolute inset-0 fiber-core opacity-20" />
                    
                    <div className="flex gap-6 relative z-10">
                      {/* Product Image */}
                      <Link href={`/products/${item.slug}`} className="flex-shrink-0">
                        <motion.div 
                          className="w-32 h-32 glass-frosted rounded-xl p-3 flex items-center justify-center border border-cyan-500/20 relative overflow-hidden"
                          whileHover={{ scale: 1.05 }}
                        >
                          <div className="absolute inset-0 light-beam opacity-10" />
                          <Image
                            src={item.imageUrl}
                            alt={item.name}
                            width={120}
                            height={120}
                            className="object-contain relative z-10"
                            style={{ filter: 'drop-shadow(0 10px 20px rgba(0, 255, 255, 0.3))' }}
                          />
                        </motion.div>
                      </Link>

                      {/* Product Info */}
                      <div className="flex-1">
                        <Link href={`/products/${item.slug}`}>
                          <h3 className="text-xl font-bold text-white hover:prismatic-text transition-all mb-2">
                            {item.name}
                          </h3>
                        </Link>
                        <p className="text-3xl font-bold text-green-400 mb-4 font-mono">
                          £{item.price}
                        </p>

                        <div className="flex items-center gap-4">
                          {/* Quantity Controls */}
                          <div className="flex items-center gap-2">
                            <motion.button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-10 h-10 flex items-center justify-center glass-frosted border border-cyan-500/30 hover:border-cyan-500 text-white rounded-xl transition-all"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <Minus className="w-4 h-4" />
                            </motion.button>
                            <span className="w-16 text-center font-bold font-mono text-lg">{item.quantity}</span>
                            <motion.button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-10 h-10 flex items-center justify-center glass-frosted border border-cyan-500/30 hover:border-cyan-500 text-white rounded-xl transition-all"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <Plus className="w-4 h-4" />
                            </motion.button>
                          </div>

                          {/* Remove Button */}
                          <motion.button
                            onClick={() => removeItem(item.id)}
                            className="flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors ml-auto font-mono font-semibold"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Trash2 className="w-4 h-4" />
                            REMOVE
                          </motion.button>
                        </div>
                      </div>

                      {/* Subtotal */}
                      <div className="text-right">
                        <p className="text-xs text-gray-500 mb-1 uppercase font-mono">Subtotal</p>
                        <p className="text-3xl font-bold text-white font-mono">
                          £{(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <motion.div 
                className="fiber-glass refraction-border rounded-2xl p-8 sticky top-32 relative overflow-hidden"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="absolute inset-0 light-beam opacity-5" />
                
                <div className="relative z-10">
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 prismatic-text">
                    <Zap className="w-6 h-6 text-cyan-400" />
                    Transmission Summary
                  </h2>
                  
                  <div className="space-y-4 mb-6 pb-6 border-b border-cyan-500/20">
                    <div className="flex justify-between text-gray-300 font-mono">
                      <span>Signals ({totalItems})</span>
                      <span className="font-bold">£{totalPrice.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-gray-300 font-mono">
                      <span>Transmission Fee</span>
                      <span className="text-green-400 font-bold">FREE</span>
                    </div>
                  </div>

                  <div className="flex justify-between text-2xl font-bold mb-8">
                    <span className="font-mono">Total</span>
                    <span className="text-green-400 font-mono">£{totalPrice.toFixed(2)}</span>
                  </div>

                  <Link
                    href="/checkout"
                    className="block w-full py-4 refraction-border text-white font-bold text-center rounded-xl transition-all fiber-glow mb-6 font-mono text-lg relative overflow-hidden group"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      PROCEED TO CHECKOUT
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </span>
                    <div className="absolute inset-0 light-streak opacity-0 group-hover:opacity-100" />
                  </Link>

                  {/* Trust Signals */}
                  <div className="space-y-3 pt-6 border-t border-cyan-500/20">
                    <div className="flex items-center gap-3 p-3 glass-frosted rounded-lg border border-green-500/20">
                      <Truck className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <div className="text-sm">
                        <div className="font-bold text-green-300 font-mono">FREE UK SHIPPING</div>
                        <div className="text-xs text-gray-500 font-mono">Next day delivery available</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 glass-frosted rounded-lg border border-cyan-500/20">
                      <Shield className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                      <div className="text-sm">
                        <div className="font-bold text-cyan-300 font-mono">3-YEAR WARRANTY</div>
                        <div className="text-xs text-gray-500 font-mono">Full manufacturer support</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 glass-frosted rounded-lg border border-blue-500/20">
                      <Radio className="w-5 h-5 text-blue-400 flex-shrink-0" />
                      <div className="text-sm">
                        <div className="font-bold text-blue-300 font-mono">UK STOCK</div>
                        <div className="text-xs text-gray-500 font-mono">Ships from our warehouse</div>
                      </div>
                    </div>
                  </div>

                  <Link
                    href="/products"
                    className="block w-full mt-6 py-3 glass-frosted border border-cyan-500/30 hover:border-cyan-500 text-cyan-300 hover:text-white font-bold text-center rounded-xl transition-all font-mono text-sm"
                  >
                    CONTINUE BROWSING
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
