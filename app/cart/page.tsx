'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';

export default function CartPage() {
  const { items, removeItem, updateQuantity, totalPrice, totalItems } = useCart();

  if (items.length === 0) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center py-20">
              <ShoppingBag className="w-24 h-24 text-slate-700 mx-auto mb-6" />
              <h1 className="text-4xl font-bold mb-4">Your Cart is Empty</h1>
              <p className="text-slate-400 mb-8">Start adding products to your cart!</p>
              <Link 
                href="/products"
                className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition-all"
              >
                Browse Products
              </Link>
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
      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              Shopping Cart
            </h1>
            <p className="text-slate-400">
              {totalItems} {totalItems === 1 ? 'item' : 'items'} in your cart
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => (
                <motion.div
                  key={item.id}
                  className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-all"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  <div className="flex gap-6">
                    {/* Product Image */}
                    <Link href={`/products/${item.slug}`} className="flex-shrink-0">
                      <div className="w-24 h-24 bg-white rounded-lg p-2 flex items-center justify-center">
                        <Image
                          src={item.imageUrl}
                          alt={item.name}
                          width={96}
                          height={96}
                          className="object-contain"
                        />
                      </div>
                    </Link>

                    {/* Product Info */}
                    <div className="flex-1">
                      <Link href={`/products/${item.slug}`}>
                        <h3 className="text-lg font-bold text-white hover:text-blue-400 transition-colors mb-2">
                          {item.name}
                        </h3>
                      </Link>
                      <p className="text-2xl font-bold text-blue-400 mb-4">
                        £{item.price}
                      </p>

                      <div className="flex items-center gap-4">
                        {/* Quantity Controls */}
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 flex items-center justify-center bg-slate-800 hover:bg-slate-700 text-white rounded-md transition-colors"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-12 text-center font-bold">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 flex items-center justify-center bg-slate-800 hover:bg-slate-700 text-white rounded-md transition-colors"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>

                        {/* Remove Button */}
                        <button
                          onClick={() => removeItem(item.id)}
                          className="flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors ml-auto"
                        >
                          <Trash2 className="w-4 h-4" />
                          Remove
                        </button>
                      </div>
                    </div>

                    {/* Subtotal */}
                    <div className="text-right">
                      <p className="text-sm text-slate-400 mb-1">Subtotal</p>
                      <p className="text-2xl font-bold text-white">
                        £{(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-8 sticky top-32">
                <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
                
                <div className="space-y-4 mb-6 pb-6 border-b border-slate-800">
                  <div className="flex justify-between text-slate-300">
                    <span>Subtotal ({totalItems} items)</span>
                    <span>£{totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Shipping</span>
                    <span className="text-green-400">FREE</span>
                  </div>
                </div>

                <div className="flex justify-between text-xl font-bold mb-8">
                  <span>Total</span>
                  <span className="text-blue-400">£{totalPrice.toFixed(2)}</span>
                </div>

                <Link
                  href="/checkout"
                  className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition-all flex items-center justify-center gap-2 mb-4"
                >
                  Proceed to Checkout
                  <ArrowRight className="w-5 h-5" />
                </Link>

                <Link
                  href="/products"
                  className="w-full py-3 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg transition-all flex items-center justify-center"
                >
                  Continue Shopping
                </Link>

                <div className="mt-6 pt-6 border-t border-slate-800">
                  <p className="text-sm text-slate-400 text-center">
                    Payment via bank transfer after checkout
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
