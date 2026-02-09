'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, ArrowRight, Mail, MapPin, ShieldCheck, Box, Truck, BadgeCheck, FileText } from 'lucide-react';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

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
      slug: "usb-capture-hdmi-gen-2", // SLUG ADDED
      name: "USB Capture HDMI Gen 2",
      specs: ["HDMI 1.4", "1080p60", "USB 3.0"],
      stockStatus: "In Stock - UK Warehouse",
      image: "https://darkturquoise-pigeon-678798.hostingersite.com/wp-content/uploads/2026/01/hdmi-usb.61gen2.png",
      tag: "Best Seller"
    },
    {
      id: 280,
      slug: "usb-capture-aio", // SLUG ADDED
      name: "USB Capture AIO",
      specs: ["HDMI/SDI/DVI", "1080p60", "Analog I/O"],
      stockStatus: "Low Stock - Order Soon",
      image: "https://darkturquoise-pigeon-678798.hostingersite.com/wp-content/uploads/2026/01/usb-capture-aio-1.png",
      tag: "Universal"
    },
    {
      id: 281,
      slug: "usb-capture-sdi-gen-2", // SLUG ADDED
      name: "USB Capture SDI Gen 2",
      specs: ["3G-SDI", "Loop-Through", "Driver-Free"],
      stockStatus: "In Stock - Next Day Delivery",
      image: "https://darkturquoise-pigeon-678798.hostingersite.com/wp-content/uploads/2026/01/sdi-usb.606.png",
      tag: "Broadcast"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen font-sans bg-slate-950 text-slate-200 selection:bg-blue-500/30">
      
      {/* Navbar */}
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
          isScrolled 
            ? 'bg-slate-950/95 backdrop-blur-md border-blue-900/30 py-3' 
            : 'bg-slate-950/50 border-white/5 py-5'
        }`}
      >
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
          
          <div className="flex items-center gap-8">
            <div className="hidden md:flex gap-6 text-sm font-medium text-slate-400">
              <Link href="/" className="hover:text-white transition-colors">Catalog</Link>
              <Link href="/products" className="hover:text-white transition-colors">Trade Accounts</Link>
              <Link href="/support" className="hover:text-white transition-colors">Support</Link>
            </div>
            <Link href="/contact" className="flex items-center gap-2 px-5 py-2 rounded-sm font-bold text-sm bg-white text-slate-950 hover:bg-blue-50 transition-colors">
              <FileText className="w-4 h-4" />
              <span>Get Quote</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-blue-900/30 border border-blue-700/50 text-blue-300 text-xs font-bold uppercase tracking-widest mb-6">
                <BadgeCheck className="w-4 h-4" /> Authorized UK Partner
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6">
                Official Magewell <br />
                <span className="text-blue-500">Distribution.</span>
              </h1>
              <p className="text-lg text-slate-400 mb-8 max-w-xl mx-auto md:mx-0 leading-relaxed">
                Supply chain partner for Integrators, Resellers, and Broadcasters. 
                We hold UK stock of the complete Magewell range with full manufacturer warranty support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link href="/products" className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-sm transition-all text-center">
                  Browse Catalog
                </Link>
                <Link href="/contact" className="px-8 py-3 border border-slate-600 hover:border-white text-slate-300 hover:text-white font-bold rounded-sm transition-all text-center">
                  Open Trade Account
                </Link>
              </div>
            </div>

            <div className="flex-1 relative w-full max-w-md">
              <div className="absolute inset-0 bg-blue-500/20 blur-[100px] rounded-full"></div>
              <div className="relative bg-slate-900 border border-slate-700 p-6 rounded-lg shadow-2xl">
                 <div className="flex justify-between items-center border-b border-slate-800 pb-4 mb-4">
                    <span className="text-xs font-mono text-slate-500">FEATURED UNIT</span>
                    <span className="text-xs font-bold text-green-400 flex items-center gap-1"><div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div> IN STOCK</span>
                 </div>
                 <Image
                    src="https://darkturquoise-pigeon-678798.hostingersite.com/wp-content/uploads/2026/01/hdmi-usb.61gen2.png"
                    alt="Magewell Unit"
                    width={400}
                    height={300}
                    className="w-full h-auto object-contain"
                 />
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Distributor Benefits Bar */}
      <section className="bg-blue-950 border-y border-blue-900/50 py-8">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div className="flex items-center gap-4 justify-center md:justify-start">
                <div className="p-3 bg-blue-900/50 rounded text-blue-300"><BadgeCheck className="w-6 h-6" /></div>
                <div>
                    <h3 className="text-white font-bold">Official Warranty</h3>
                    <p className="text-sm text-blue-200">Direct manufacturer support & RMAs.</p>
                </div>
            </div>
            <div className="flex items-center gap-4 justify-center md:justify-start">
                <div className="p-3 bg-blue-900/50 rounded text-blue-300"><Box className="w-6 h-6" /></div>
                <div>
                    <h3 className="text-white font-bold">UK Warehouse Stock</h3>
                    <p className="text-sm text-blue-200">No import duties or long lead times.</p>
                </div>
            </div>
            <div className="flex items-center gap-4 justify-center md:justify-start">
                <div className="p-3 bg-blue-900/50 rounded text-blue-300"><Truck className="w-6 h-6" /></div>
                <div>
                    <h3 className="text-white font-bold">Next Day Delivery</h3>
                    <p className="text-sm text-blue-200">Order by 4pm for same-day dispatch.</p>
                </div>
            </div>
        </div>
      </section>

      {/* Product Catalog Section */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-12 border-b border-slate-800 pb-4">
            <div>
              <h2 className="text-2xl font-bold text-white uppercase tracking-wide">Core Inventory</h2>
            </div>
            <Link href="/products" className="text-blue-500 hover:text-white flex items-center gap-2 text-sm font-bold uppercase">
              View All SKUs <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {products.map((product) => (
              <Link 
                key={product.id} 
                // HERE IS THE FIX: Linking to SLUG instead of ID
                href={`/products/${product.slug}`}
                className="group block bg-slate-900 border border-slate-800 hover:border-blue-500 transition-all duration-200"
              >
                <div className="h-48 relative bg-white p-6 flex items-center justify-center border-b border-slate-800">
                  <div className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] font-bold px-2 py-1 uppercase">{product.tag}</div>
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-5">
                  <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors mb-2">
                    {product.name}
                  </h3>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <div className={`w-2 h-2 rounded-full ${product.stockStatus.includes('Low') ? 'bg-amber-500' : 'bg-green-500'}`}></div>
                    <span className="text-xs text-slate-400 font-mono">{product.stockStatus}</span>
                  </div>

                  <ul className="text-xs text-slate-500 space-y-1 font-mono mb-4 border-t border-slate-800 pt-3">
                    {product.specs.map((spec, i) => (
                      <li key={i} className="flex justify-between">
                         <span>Feature {i+1}:</span> <span className="text-slate-300">{spec}</span>
                      </li>
                    ))}
                  </ul>

                  <button className="w-full py-2 bg-slate-800 hover:bg-white hover:text-slate-900 text-slate-300 text-sm font-bold uppercase transition-colors rounded-sm">
                    View Pricing
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
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
              <li><Link href="/products" className="hover:text-white transition-colors">Reseller Application</Link></li>
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