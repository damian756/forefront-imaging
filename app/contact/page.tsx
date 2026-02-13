'use client';

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, Building2, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    enquiryType: 'product',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        enquiryType: 'product',
        message: ''
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              Get in Touch
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Have questions about our USB Capture devices? Our expert team is here to help you find the perfect solution.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            {/* Contact Info */}
            <div className="space-y-6">
              {/* Phone */}
              <motion.div 
                className="bg-slate-900/50 border border-slate-800 rounded-xl p-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                <div className="w-12 h-12 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-bold mb-2">Phone</h3>
                <p className="text-slate-400 text-sm mb-3">Mon-Fri, 9AM-5PM GMT</p>
                <a href="tel:+441162775730" className="text-blue-400 hover:text-blue-300 font-semibold text-lg">
                  +44 (0)116 277 5730
                </a>
              </motion.div>

              {/* Email */}
              <motion.div 
                className="bg-slate-900/50 border border-slate-800 rounded-xl p-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="w-12 h-12 rounded-lg bg-green-600/20 border border-green-500/30 flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-lg font-bold mb-2">Email</h3>
                <p className="text-slate-400 text-sm mb-3">We respond within 24 hours</p>
                <p className="text-green-400 font-semibold">Use the form →</p>
              </motion.div>

              {/* Location */}
              <motion.div 
                className="bg-slate-900/50 border border-slate-800 rounded-xl p-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="w-12 h-12 rounded-lg bg-purple-600/20 border border-purple-500/30 flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-lg font-bold mb-2">Location</h3>
                <p className="text-slate-400 text-sm mb-3">Main warehouse & offices</p>
                <p className="text-white">
                  Leicester<br />
                  United Kingdom
                </p>
              </motion.div>

              {/* Business Hours */}
              <motion.div 
                className="bg-slate-900/50 border border-slate-800 rounded-xl p-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <div className="w-12 h-12 rounded-lg bg-orange-600/20 border border-orange-500/30 flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="text-lg font-bold mb-2">Business Hours</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Monday - Friday</span>
                    <span className="text-white font-semibold">9AM - 5PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Weekend</span>
                    <span className="text-slate-500">Closed</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Contact Form */}
            <motion.div 
              className="lg:col-span-2 bg-slate-900/50 border border-slate-800 rounded-2xl p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {submitted ? (
                <div className="text-center py-20">
                  <CheckCircle2 className="w-20 h-20 text-green-500 mx-auto mb-6" />
                  <h2 className="text-3xl font-bold mb-4">Thank You!</h2>
                  <p className="text-slate-400 text-lg">
                    We&apos;ve received your message and will get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <>
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-2">Send us a Message</h2>
                    <p className="text-slate-400">
                      Fill out the form below and our team will respond promptly.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
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
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="company" className="block text-sm font-semibold mb-2">
                          Company Name *
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          required
                          className="w-full bg-slate-800 border border-slate-700 rounded-lg py-3 px-4 text-white placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                          placeholder="Your Company Ltd"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full bg-slate-800 border border-slate-700 rounded-lg py-3 px-4 text-white placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                          placeholder="+44..."
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="enquiryType" className="block text-sm font-semibold mb-2">
                        Enquiry Type *
                      </label>
                      <select
                        id="enquiryType"
                        name="enquiryType"
                        value={formData.enquiryType}
                        onChange={handleChange}
                        required
                        className="w-full bg-slate-800 border border-slate-700 rounded-lg py-3 px-4 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                      >
                        <option value="product">Product Question</option>
                        <option value="support">Technical Support</option>
                        <option value="sales">Pre-Sales Enquiry</option>
                        <option value="order">Order Status</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full bg-slate-800 border border-slate-700 rounded-lg py-3 px-4 text-white placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all resize-none"
                        placeholder="Tell us about your requirements..."
                      />
                    </div>

                    <motion.button
                      type="submit"
                      className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-bold rounded-lg shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2 transition-all"
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                    >
                      <Send className="w-5 h-5" />
                      Send Message
                    </motion.button>
                  </form>
                </>
              )}
            </motion.div>
          </div>

          {/* Browse Products CTA */}
          <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-3xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Capturing?</h2>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
              Explore our range of professional USB Capture devices. All products come with free UK shipping, 
              next-day delivery, and a 3-year manufacturer warranty.
            </p>
            <a 
              href="/products"
              className="inline-block px-8 py-4 bg-white text-slate-950 font-bold rounded-lg hover:bg-blue-50 transition-all shadow-lg"
            >
              Browse USB Capture Devices
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
