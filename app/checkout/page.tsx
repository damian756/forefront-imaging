'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/contexts/CartContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { ShoppingBag, User, Mail, Phone, MapPin, Building2, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function CheckoutPage() {
  const router = useRouter();
  const { items, totalPrice, totalItems, clearCart } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    address: '',
    city: '',
    postcode: '',
    country: 'United Kingdom',
    orderNotes: ''
  });

  // Redirect if cart is empty
  if (items.length === 0 && !isSubmitting) {
    router.push('/cart');
    return null;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Generate order number
    const orderNumber = `FI-${Date.now()}`;
    
    // Store order data in localStorage for confirmation page
    const orderData = {
      orderNumber,
      customer: formData,
      items,
      totalPrice,
      orderDate: new Date().toISOString(),
    };
    
    localStorage.setItem('lastOrder', JSON.stringify(orderData));
    
    // Simulate order processing
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Clear cart and redirect to confirmation
    clearCart();
    router.push(`/order-confirmation?order=${orderNumber}`);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              Checkout
            </h1>
            <p className="text-slate-400">
              Complete your order details below. Payment via bank transfer after order confirmation.
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Customer Information */}
              <div className="lg:col-span-2 space-y-8">
                {/* Contact Information */}
                <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-8">
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <User className="w-6 h-6 text-blue-400" />
                    Contact Information
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-semibold mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        className="w-full bg-slate-800 border border-slate-700 rounded-lg py-3 px-4 text-white placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                        placeholder="John Smith"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-slate-800 border border-slate-700 rounded-lg py-3 px-4 text-white placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                        placeholder="john@company.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full bg-slate-800 border border-slate-700 rounded-lg py-3 px-4 text-white placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                        placeholder="+44..."
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full bg-slate-800 border border-slate-700 rounded-lg py-3 px-4 text-white placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                        placeholder="Your Company Ltd"
                      />
                    </div>
                  </div>
                </div>

                {/* Shipping Address */}
                <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-8">
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <MapPin className="w-6 h-6 text-green-400" />
                    Shipping Address
                  </h2>

                  <div className="space-y-6">
                    <div>
                      <label htmlFor="address" className="block text-sm font-semibold mb-2">
                        Street Address *
                      </label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                        className="w-full bg-slate-800 border border-slate-700 rounded-lg py-3 px-4 text-white placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                        placeholder="123 High Street"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="city" className="block text-sm font-semibold mb-2">
                          City *
                        </label>
                        <input
                          type="text"
                          id="city"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          required
                          className="w-full bg-slate-800 border border-slate-700 rounded-lg py-3 px-4 text-white placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                          placeholder="London"
                        />
                      </div>

                      <div>
                        <label htmlFor="postcode" className="block text-sm font-semibold mb-2">
                          Postcode *
                        </label>
                        <input
                          type="text"
                          id="postcode"
                          name="postcode"
                          value={formData.postcode}
                          onChange={handleChange}
                          required
                          className="w-full bg-slate-800 border border-slate-700 rounded-lg py-3 px-4 text-white placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                          placeholder="SW1A 1AA"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="country" className="block text-sm font-semibold mb-2">
                        Country *
                      </label>
                      <select
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        required
                        className="w-full bg-slate-800 border border-slate-700 rounded-lg py-3 px-4 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                      >
                        <option>United Kingdom</option>
                        <option>Germany</option>
                        <option>France</option>
                        <option>Ireland</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Order Notes */}
                <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-8">
                  <h2 className="text-2xl font-bold mb-6">Order Notes (Optional)</h2>
                  <textarea
                    id="orderNotes"
                    name="orderNotes"
                    value={formData.orderNotes}
                    onChange={handleChange}
                    rows={4}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg py-3 px-4 text-white placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all resize-none"
                    placeholder="Any special delivery instructions or questions..."
                  />
                </div>
              </div>

              {/* Order Summary Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-8 sticky top-32">
                  <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
                  
                  {/* Items List */}
                  <div className="space-y-4 mb-6 pb-6 border-b border-slate-800 max-h-80 overflow-y-auto">
                    {items.map((item) => (
                      <div key={item.id} className="flex gap-3">
                        <div className="w-16 h-16 bg-white rounded-lg p-1 flex-shrink-0">
                          <Image
                            src={item.imageUrl}
                            alt={item.name}
                            width={64}
                            height={64}
                            className="object-contain w-full h-full"
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-sm font-semibold text-white line-clamp-2">{item.name}</h4>
                          <div className="flex justify-between text-sm text-slate-400 mt-1">
                            <span>Qty: {item.quantity}</span>
                            <span className="text-white font-bold">£{(item.price * item.quantity).toFixed(2)}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 mb-6 pb-6 border-b border-slate-800">
                    <div className="flex justify-between text-slate-300">
                      <span>Subtotal ({totalItems} items)</span>
                      <span>£{totalPrice.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-slate-300">
                      <span>Shipping</span>
                      <span className="text-green-400">FREE</span>
                    </div>
                  </div>

                  <div className="flex justify-between text-2xl font-bold mb-8">
                    <span>Total</span>
                    <span className="text-blue-400">£{totalPrice.toFixed(2)}</span>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-blue-600 hover:bg-blue-500 disabled:bg-slate-700 disabled:cursor-not-allowed text-white font-bold rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-500/30"
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  >
                    {isSubmitting ? 'Processing...' : 'Place Order'}
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>

                  <div className="mt-6 pt-6 border-t border-slate-800">
                    <p className="text-sm text-slate-400 text-center">
                      You&apos;ll receive bank transfer details after placing your order
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
