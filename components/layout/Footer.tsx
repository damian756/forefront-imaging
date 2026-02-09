import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Company Info */}
        <div className="md:col-span-2">
          <Link href="/" className="text-2xl font-bold text-white mb-6 block">
            ForeFront<span className="text-blue-500">Imaging</span>
          </Link>
          <p className="max-w-md mb-6 leading-relaxed">
            Forefront Imaging is an official UK distributor for Magewell solutions, 
            specializing in high-performance video capture for medical, broadcast, 
            and pro-AV applications.
          </p>
          <div className="flex gap-4">
            <span className="bg-blue-600/10 text-blue-400 text-xs font-bold px-3 py-1 rounded-full border border-blue-500/20 uppercase tracking-widest">
              UK Distributor
            </span>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold mb-6">Navigation</h4>
          <ul className="space-y-4">
            <li><Link href="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
            <li><Link href="/products" className="hover:text-blue-400 transition-colors">Product Catalog</Link></li>
            <li><Link href="/contact" className="hover:text-blue-400 transition-colors">Contact Sales</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white font-bold mb-6">Get in Touch</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-blue-500" />
              <span>+44 (0) 1234 567890</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-blue-500" />
              <span>sales@forefront-imaging.com</span>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-blue-500" />
              <span>United Kingdom HQ</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-slate-800 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
        <p>© {currentYear} Forefront Imaging. All rights reserved.</p>
        <p className="text-slate-500">Magewell is a registered trademark of Nanjing Magewell Electronics Co., Ltd.</p>
      </div>
    </footer>
  );
}