'use client';

import React from 'react';
import Link from 'next/link';
import { 
  ShieldCheck, Phone, Mail, FileText, Download, 
  Search, Wrench, AlertCircle, ChevronRight, Cpu 
} from 'lucide-react';

export default function SupportPage() {
  
  const drivers = [
    { name: "USB Capture Gen 2 Driver", version: "v3.2.1", os: "Windows 10/11", date: "Jan 2026", size: "14MB" },
    { name: "USB Capture Plus Utility", version: "v1.5.0", os: "macOS 15+", date: "Dec 2025", size: "8MB" },
    { name: "Magewell Bridge for NDI", version: "v4.0.0", os: "Linux Ubuntu", date: "Feb 2026", size: "45MB" },
  ];

  const faqs = [
    { q: "My device is not detected in Zoom.", a: "Ensure you are using the USB 3.0 cable provided. Check Privacy Settings in Windows to allow camera access." },
    { q: "What is the warranty period?", a: "All Magewell hardware purchased through Forefront Imaging carries a standard 3-year manufacturer warranty." },
    { q: "Do I need drivers for Mac?", a: "No. Magewell USB Capture devices are UVC standard and driver-free on macOS." },
  ];

  return (
    <div className="flex flex-col min-h-screen font-sans bg-slate-950 text-slate-200 selection:bg-blue-500/30">
      
      {/* Navbar (Reused) */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/95 backdrop-blur-md border-b border-blue-900/30 py-3">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="p-2 rounded bg-blue-600 text-white">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold text-white tracking-tight uppercase">
                ForeFront
              </span>
              <span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest -mt-1">
                Magewell UK Distributor
              </span>
            </div>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Back to Catalog</Link>
            <Link href="/contact" className="flex items-center gap-2 px-4 py-2 rounded-sm font-bold text-sm bg-white text-slate-950 hover:bg-blue-50 transition-colors">
              <FileText className="w-4 h-4" />
              <span>Get Quote</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 border-b border-slate-800 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-blue-900/20 border border-blue-500/30 text-blue-400 text-xs font-mono mb-6">
            <Wrench className="w-3 h-3" /> TECHNICAL SUPPORT PORTAL
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
            Drivers, Manuals & <br /><span className="text-blue-500">Technical Resources</span>
          </h1>
          <div className="max-w-xl mx-auto relative">
            <input 
              type="text" 
              placeholder="Search by Model Number (e.g. 32060)..." 
              className="w-full bg-slate-950 border border-slate-700 rounded-sm py-4 pl-12 pr-4 text-white focus:outline-none focus:border-blue-500 transition-colors"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 w-5 h-5" />
          </div>
        </div>
      </section>

      {/* Quick Actions Grid */}
      <section className="py-16 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8 -mt-24 relative z-10">
            {/* Card 1 */}
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-sm hover:border-blue-500 transition-colors group">
                <div className="w-12 h-12 bg-slate-800 rounded-sm flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                    <Download className="w-6 h-6 text-blue-400 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Software & Drivers</h3>
                <p className="text-slate-400 text-sm mb-6">Download the latest utility software and firmware for your device.</p>
                <a href="#downloads" className="text-blue-500 font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">Go to Downloads <ChevronRight className="w-4 h-4" /></a>
            </div>

            {/* Card 2 */}
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-sm hover:border-blue-500 transition-colors group">
                <div className="w-12 h-12 bg-slate-800 rounded-sm flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                    <AlertCircle className="w-6 h-6 text-blue-400 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">RMA Request</h3>
                <p className="text-slate-400 text-sm mb-6">Start a warranty claim or repair request for purchased hardware.</p>
                <Link href="/contact" className="text-blue-500 font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">Start Ticket <ChevronRight className="w-4 h-4" /></Link>
            </div>

            {/* Card 3 */}
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-sm hover:border-blue-500 transition-colors group">
                <div className="w-12 h-12 bg-slate-800 rounded-sm flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                    <FileText className="w-6 h-6 text-blue-400 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Documentation</h3>
                <p className="text-slate-400 text-sm mb-6">Access PDF datasheets, user manuals, and API SDK references.</p>
                <Link href="/" className="text-blue-500 font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">Browse Docs <ChevronRight className="w-4 h-4" /></Link>
            </div>
        </div>
      </section>

      {/* Driver Download Table */}
      <section id="downloads" className="py-16 bg-slate-950 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
                <Cpu className="w-6 h-6 text-blue-500" /> Latest Downloads
            </h2>
            <div className="bg-slate-900 border border-slate-800 rounded-sm overflow-hidden">
                <table className="w-full text-left text-sm">
                    <thead className="bg-slate-800 text-slate-400 uppercase font-bold text-xs">
                        <tr>
                            <th className="px-6 py-4">Software Name</th>
                            <th className="px-6 py-4">Version</th>
                            <th className="px-6 py-4">OS Support</th>
                            <th className="px-6 py-4">Release Date</th>
                            <th className="px-6 py-4 text-right">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800">
                        {drivers.map((driver, i) => (
                            <tr key={i} className="hover:bg-slate-800/50 transition-colors">
                                <td className="px-6 py-4 font-bold text-white">{driver.name}</td>
                                <td className="px-6 py-4 text-blue-300 font-mono">{driver.version}</td>
                                <td className="px-6 py-4 text-slate-400">{driver.os}</td>
                                <td className="px-6 py-4 text-slate-500">{driver.date}</td>
                                <td className="px-6 py-4 text-right">
                                    <button className="inline-flex items-center gap-2 bg-slate-800 hover:bg-blue-600 hover:text-white text-blue-400 px-3 py-1.5 rounded-sm transition-colors text-xs font-bold uppercase border border-slate-700 hover:border-blue-500">
                                        <Download className="w-3 h-3" /> {driver.size}
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-slate-900 border-y border-slate-800">
        <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
                {faqs.map((faq, i) => (
                    <div key={i} className="border border-slate-800 rounded-sm p-6 bg-slate-950">
                        <h4 className="text-white font-bold mb-2 flex items-start gap-3">
                            <span className="text-blue-500">Q.</span> {faq.q}
                        </h4>
                        <p className="text-slate-400 text-sm ml-7">{faq.a}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Footer (Reused) */}
      <footer className="bg-slate-900 text-slate-400 pt-16 pb-8 border-t border-slate-800 mt-auto">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <ShieldCheck className="w-6 h-6 text-blue-500" />
              <span className="text-xl font-bold text-white uppercase">
                ForeFront<span className="text-blue-500">Imaging</span>
              </span>
            </Link>
            <p className="max-w-md mb-6 leading-relaxed text-sm text-slate-500">
              Forefront Imaging is the authorized UK distributor for Magewell.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="hover:text-white transition-colors">Catalog</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">RMA Request</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase">Contact</h4>
            <ul className="space-y-3 text-sm font-mono">
              <li className="flex items-center gap-3"><Phone className="w-4 h-4" /> <span>+44 (0) 1234 567890</span></li>
              <li className="flex items-center gap-3"><Mail className="w-4 h-4" /> <span>sales@forefront-imaging.com</span></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-slate-800 text-xs text-slate-600">
          <p>© 2026 FOREFRONT IMAGING. AUTHORIZED UK DISTRIBUTOR.</p>
        </div>
      </footer>

    </div>
  );
}