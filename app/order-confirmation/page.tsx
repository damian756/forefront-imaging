'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle2, Copy, Mail, Phone, Building2, CreditCard, ArrowRight } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';

interface OrderData {
  orderNumber: string;
  customer: {
    fullName: string;
    email: string;
    phone: string;
    company?: string;
    address: string;
    city: string;
    postcode: string;
    country: string;
  };
  items: Array<{
    id: string;
    name: string;
    price: number;
    quantity: number;
    imageUrl: string;
  }>;
  totalPrice: number;
  orderDate: string;
}

function OrderConfirmationContent() {
  const searchParams = useSearchParams();
  const orderNumber = searchParams.get('order');
  const [orderData, setOrderData] = useState<OrderData | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const savedOrder = localStorage.getItem('lastOrder');
    if (savedOrder) {
      setOrderData(JSON.parse(savedOrder));
    }
  }, []);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!orderData) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white pt-32 pb-20">
          <div className="max-w-3xl mx-auto px-4 text-center py-20">
            <h1 className="text-4xl font-bold mb-4">Order Not Found</h1>
            <p className="text-slate-400 mb-8">We couldn&apos;t find this order. Please contact us if you need assistance.</p>
            <Link href="/" className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition-all">
              Return Home
            </Link>
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
        <div className="max-w-4xl mx-auto px-4">
          {/* Success Header */}
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-600/20 border border-green-500/30 mb-6">
              <CheckCircle2 className="w-10 h-10 text-green-400" />
            </div>
            <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-white via-green-100 to-white bg-clip-text text-transparent">
              Order Confirmed!
            </h1>
            <p className="text-xl text-slate-400">
              Thank you for your order, {orderData.customer.fullName}
            </p>
          </motion.div>

          {/* Order Number */}
          <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-xl p-8 mb-8 text-center">
            <p className="text-sm text-slate-400 mb-2">Order Number</p>
            <p className="text-3xl font-bold font-mono">{orderData.orderNumber}</p>
            <p className="text-sm text-slate-400 mt-4">
              A confirmation email has been sent to <span className="text-blue-400">{orderData.customer.email}</span>
            </p>
          </div>

          {/* Bank Transfer Details */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <CreditCard className="w-6 h-6 text-blue-400" />
              Bank Transfer Details
            </h2>
            
            <div className="bg-blue-950/30 border border-blue-900/50 rounded-lg p-6 mb-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 text-sm">Account Name</span>
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-bold">Electronic Modular Solutions Ltd</span>
                    <button 
                      onClick={() => copyToClipboard('Electronic Modular Solutions Ltd')}
                      className="p-1 hover:bg-slate-800 rounded transition-colors"
                    >
                      <Copy className="w-4 h-4 text-slate-400 hover:text-white" />
                    </button>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-slate-400 text-sm">Sort Code</span>
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-bold">12-34-56</span>
                    <button 
                      onClick={() => copyToClipboard('12-34-56')}
                      className="p-1 hover:bg-slate-800 rounded transition-colors"
                    >
                      <Copy className="w-4 h-4 text-slate-400 hover:text-white" />
                    </button>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-slate-400 text-sm">Account Number</span>
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-bold">12345678</span>
                    <button 
                      onClick={() => copyToClipboard('12345678')}
                      className="p-1 hover:bg-slate-800 rounded transition-colors"
                    >
                      <Copy className="w-4 h-4 text-slate-400 hover:text-white" />
                    </button>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-blue-900/50">
                  <span className="text-slate-400 text-sm">Amount to Transfer</span>
                  <span className="text-3xl font-bold text-green-400">£{orderData.totalPrice.toFixed(2)}</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-slate-400 text-sm">Reference</span>
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-bold text-blue-400">{orderData.orderNumber}</span>
                    <button 
                      onClick={() => copyToClipboard(orderData.orderNumber)}
                      className="p-1 hover:bg-slate-800 rounded transition-colors"
                    >
                      <Copy className="w-4 h-4 text-slate-400 hover:text-white" />
                    </button>
                  </div>
                </div>
              </div>

              {copied && (
                <div className="mt-4 text-center text-sm text-green-400">
                  ✓ Copied to clipboard!
                </div>
              )}
            </div>

            <div className="bg-orange-900/20 border border-orange-500/30 rounded-lg p-4">
              <p className="text-sm text-orange-300">
                <strong>Important:</strong> Please include your order number <span className="font-mono">{orderData.orderNumber}</span> as the payment reference. 
                Your order will be processed once payment is confirmed (typically within 1-2 business days).
              </p>
            </div>
          </div>

          {/* Order Items */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">Order Items</h2>
            <div className="space-y-4">
              {orderData.items.map((item) => (
                <div key={item.id} className="flex items-center gap-4 pb-4 border-b border-slate-800 last:border-0">
                  <div className="w-16 h-16 bg-white rounded-lg p-1">
                    <Image
                      src={item.imageUrl}
                      alt={item.name}
                      width={64}
                      height={64}
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-white">{item.name}</h4>
                    <p className="text-sm text-slate-400">Quantity: {item.quantity}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-white">£{(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-slate-800 flex justify-between text-xl font-bold">
              <span>Total</span>
              <span className="text-blue-400">£{orderData.totalPrice.toFixed(2)}</span>
            </div>
          </div>

          {/* Shipping Address */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">Shipping Address</h2>
            <div className="text-slate-300">
              <p className="font-semibold text-white">{orderData.customer.fullName}</p>
              {orderData.customer.company && <p>{orderData.customer.company}</p>}
              <p>{orderData.customer.address}</p>
              <p>{orderData.customer.city}, {orderData.customer.postcode}</p>
              <p>{orderData.customer.country}</p>
              <div className="mt-4 pt-4 border-t border-slate-800">
                <p className="text-sm">Email: {orderData.customer.email}</p>
                <p className="text-sm">Phone: {orderData.customer.phone}</p>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-gradient-to-br from-green-600/20 to-blue-600/20 border border-green-500/30 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">What Happens Next?</h2>
            <ol className="space-y-3 text-slate-300">
              <li className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center font-bold text-sm flex-shrink-0">1</span>
                <span>Transfer £{orderData.totalPrice.toFixed(2)} to the bank account above with reference <span className="font-mono text-blue-400">{orderData.orderNumber}</span></span>
              </li>
              <li className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center font-bold text-sm flex-shrink-0">2</span>
                <span>We&apos;ll confirm receipt of payment within 1-2 business days</span>
              </li>
              <li className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center font-bold text-sm flex-shrink-0">3</span>
                <span>Your order will be dispatched from our UK warehouse with tracking details sent via email</span>
              </li>
              <li className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center font-bold text-sm flex-shrink-0">4</span>
                <span>Delivery within 1-2 business days to UK addresses</span>
              </li>
            </ol>
          </div>

          {/* Contact Support */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Need Help?</h2>
            <p className="text-slate-400 mb-6">
              If you have any questions about your order or payment, our team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+441162775730"
                className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call +44 (0)116 277 5730
              </a>
              <Link 
                href="/contact"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-lg border border-white/20 transition-all flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Contact Us
              </Link>
            </div>
          </div>

          {/* Actions */}
          <div className="text-center mt-8">
            <Link 
              href="/products"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold transition-colors"
            >
              Continue Shopping
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default function OrderConfirmationPage() {
  return (
    <Suspense fallback={
      <>
        <Navbar />
        <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white pt-32 pb-20">
          <div className="max-w-3xl mx-auto px-4 text-center py-20">
            <div className="text-white text-xl">Loading order details...</div>
          </div>
        </div>
        <Footer />
      </>
    }>
      <OrderConfirmationContent />
    </Suspense>
  );
}
