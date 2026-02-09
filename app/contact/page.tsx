import Navbar from "@/components/layout/Navbar";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Contact Our Sales Team</h1>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Have questions about Magewell products or need a bulk quote? We're here to help.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Cards */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 text-center">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-lg">Phone</h3>
            <p className="mt-2 text-slate-600">Call us for immediate assistance.</p>
            <p className="mt-4 text-blue-600 font-semibold">+44 (0) 1234 567890</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 text-center">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-lg">Email</h3>
            <p className="mt-2 text-slate-600">We aim to respond within 24 hours.</p>
            <p className="mt-4 text-blue-600 font-semibold">sales@forefront-imaging.com</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 text-center">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-lg">Business Hours</h3>
            <p className="mt-2 text-slate-600">Monday — Friday</p>
            <p className="mt-4 text-slate-900 font-semibold">9:00 AM — 5:30 PM GMT</p>
          </div>
        </div>

        {/* Simple Inquiry Form */}
        <div className="mt-16 max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-lg border border-slate-100">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Send an Inquiry</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
              <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="John Doe" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
              <input type="email" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="john@company.com" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-slate-700 mb-2">Subject</label>
              <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="Quote for Magewell USB Capture" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
              <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="Tell us about your requirements..."></textarea>
            </div>
            <div className="md:col-span-2">
              <button type="submit" className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
                Submit Inquiry
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}