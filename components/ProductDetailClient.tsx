'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Download, CheckCircle, Truck, Printer, ShieldCheck, ShoppingCart } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { Product } from '@/lib/products';
import { useState } from 'react';

export default function ProductDetailClient({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      imageUrl: product.imageUrl,
      slug: product.slug,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        
        <div className="md:col-span-5">
          <div className="bg-white rounded-lg p-12 flex items-center justify-center border border-slate-700 relative mb-8">
            <div className="absolute top-4 left-4 flex gap-2">
               <span className="bg-blue-600 text-white text-[10px] font-bold px-2 py-1 uppercase rounded-sm">Authorized Stock</span>
            </div>
            <Image src={product.imageUrl} alt={product.name} width={500} height={500} className="w-full h-auto object-contain" />
          </div>
          <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-2 py-3 border border-slate-700 text-slate-300 hover:border-blue-500 hover:text-blue-400 text-sm font-bold uppercase transition-all rounded-sm"><Download className="w-4 h-4" /> Datasheet</button>
              <button className="flex items-center justify-center gap-2 py-3 border border-slate-700 text-slate-300 hover:border-blue-500 hover:text-blue-400 text-sm font-bold uppercase transition-all rounded-sm"><Printer className="w-4 h-4" /> Print Spec</button>
          </div>
        </div>

        <div className="md:col-span-7">
          <div className="flex items-center gap-6 mb-8 pb-8 border-b border-slate-800">
             {product.stock && <div className="flex items-center gap-2 text-green-400 font-mono text-sm"><CheckCircle className="w-4 h-4" /> {product.stock}</div>}
             <div className="flex items-center gap-2 text-slate-400 font-mono text-sm"><Truck className="w-4 h-4" /> Next Day Delivery</div>
             <div className="flex items-center gap-2 text-slate-400 font-mono text-sm"><ShieldCheck className="w-4 h-4" /> 3-Year Warranty</div>
          </div>

          {/* Render HTML Description Safely */}
          <div 
            className="prose prose-invert prose-blue max-w-none text-slate-300 mb-8"
            dangerouslySetInnerHTML={{ __html: product.description }} 
          />

          <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Key Features</h3>
          <ul className="space-y-3 mb-10">
              {product.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-400 text-sm"><div className="mt-1 w-1.5 h-1.5 bg-blue-500 rounded-full"></div>{feature}</li>
              ))}
          </ul>

          <div className="bg-slate-900 border border-slate-800 p-6 rounded-sm mb-12">
              <div className="flex justify-between items-center mb-6">
                  <div>
                    <span className="text-slate-400 text-sm uppercase font-bold block mb-2">Price</span>
                    <span className="text-4xl font-bold text-white">£{product.price}</span>
                    <span className="text-slate-400 text-sm ml-2">GBP</span>
                  </div>
              </div>
              <div className="flex gap-4">
                  <button 
                    onClick={handleAddToCart}
                    className="flex-1 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold uppercase text-center rounded-sm transition-colors flex items-center justify-center gap-2"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    {added ? 'Added to Cart!' : 'Add to Cart'}
                  </button>
                  <Link href="/contact" className="flex-1 py-4 bg-white hover:bg-slate-200 text-slate-950 font-bold uppercase text-center rounded-sm transition-colors flex items-center justify-center">
                    Volume Pricing
                  </Link>
              </div>
          </div>

        </div>
      </div>
    </div>
  );
}
