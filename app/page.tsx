'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Rocket, ShoppingCart, CheckCircle2, Cpu, HardDrive, Radio, Satellite } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SpaceBackground from '@/components/SpaceBackground';
import USBSun from '@/components/USBSun';
import { useCart } from '@/contexts/CartContext';

export default function Home() {
  const { addItem } = useCart();
  const [addedItemId, setAddedItemId] = useState<number | null>(null);
  const [selectedPlanet, setSelectedPlanet] = useState<number | null>(null);

  const handleAddToCart = (product: typeof planets[0], e: React.MouseEvent) => {
    e.preventDefault();
    addItem({
      id: product.id.toString(),
      name: product.name,
      price: product.price,
      imageUrl: product.image,
      slug: product.slug,
    });
    setAddedItemId(product.id);
    setTimeout(() => setAddedItemId(null), 2000);
  };

  const planets = [
    {
      id: 279,
      slug: "magewell-usb-capture-hdmi-gen-2",
      name: "PCB-TERRA",
      fullName: "USB Capture HDMI Gen 2",
      orbit: 300,
      size: 120,
      speed: 20,
      specs: {
        bandwidth: "10 Gbps",
        latency: "< 1ms",
        interface: "USB 3.0",
        resolution: "1080p60"
      },
      components: ["HDMI Receiver IC", "USB Controller", "Power Regulator"],
      image: "https://darkturquoise-pigeon-678798.hostingersite.com/wp-content/uploads/2026/01/hdmi-usb.61gen2.png",
      price: 100,
      coordinates: "α-279°N",
      description: "Main hub planet with HDMI processing continents"
    },
    {
      id: 280,
      slug: "magewell-usb-capture-aio",
      name: "PCB-MULTI",
      fullName: "USB Capture AIO",
      orbit: 450,
      size: 140,
      speed: 30,
      specs: {
        bandwidth: "10 Gbps",
        latency: "< 1ms",
        interface: "Multi-Input",
        resolution: "1080p60"
      },
      components: ["Multi-Input Router", "Signal Processor", "USB Hub IC"],
      image: "https://darkturquoise-pigeon-678798.hostingersite.com/wp-content/uploads/2026/01/usb-capture-aio-1.png",
      price: 100,
      coordinates: "β-280°E",
      description: "Multi-interface planet with diverse terrain"
    },
    {
      id: 281,
      slug: "magewell-usb-capture-sdi-gen-2",
      name: "PCB-NOVA",
      fullName: "USB Capture SDI Gen 2",
      orbit: 600,
      size: 110,
      speed: 40,
      specs: {
        bandwidth: "3 Gbps",
        latency: "< 1ms",
        interface: "3G-SDI",
        resolution: "1080p60"
      },
      components: ["SDI Receiver", "Clock Generator", "Voltage Regulator"],
      image: "https://darkturquoise-pigeon-678798.hostingersite.com/wp-content/uploads/2026/01/sdi-usb.606.png",
      price: 100,
      coordinates: "γ-281°W",
      description: "Professional broadcast planet with SDI infrastructure"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen text-white selection:bg-green-500/30 overflow-hidden relative" style={{ background: '#000000' }}>
      
      {/* Space Background with Stars */}
      <SpaceBackground />
      
      <Navbar />

      {/* SOLAR SYSTEM HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        
        {/* USB Sun at Center */}
        <USBSun />
        
        <div className="max-w-7xl mx-auto px-4 relative z-20 pt-32">
          
          {/* Title */}
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full planet-card mb-6"
              animate={{
                boxShadow: [
                  '0 0 20px rgba(0, 255, 136, 0.3)',
                  '0 0 30px rgba(0, 255, 136, 0.5)',
                  '0 0 20px rgba(0, 255, 136, 0.3)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Satellite className="w-5 h-5 pcb-text" />
              <span className="text-sm font-bold uppercase tracking-wider space-text">USB SOLAR SYSTEM</span>
              <span className="text-sm text-gray-500">•</span>
              <span className="text-sm text-yellow-400 font-semibold">MAGEWELL SECTOR</span>
            </motion.div>

            <h1 className="text-6xl md:text-9xl font-bold mb-6 leading-tight uppercase">
              <span className="block text-gray-500 text-3xl md:text-5xl mb-4">EXPLORE THE</span>
              <span className="block pcb-text text-7xl md:text-[12rem]">
                PCB GALAXY
              </span>
              <span className="block copper-text text-4xl md:text-6xl mt-4">
                Circuit Board Planets
              </span>
            </h1>

            <motion.p 
              className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed space-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Navigate through orbiting USB capture worlds. Each planet is a fully functional circuit board 
              with <span className="pcb-text">copper trace continents</span> and{' '}
              <span className="copper-text">component cities</span>
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              <Link 
                href="#planets" 
                className="group px-8 py-5 space-button text-lg"
              >
                <span className="flex items-center justify-center gap-2">
                  <Rocket className="w-5 h-5" />
                  LAUNCH EXPLORATION
                </span>
              </Link>
              <Link 
                href="/how-it-works" 
                className="px-8 py-5 planet-card border-2 border-copper-trace hover:border-copper-bright text-gray-200 hover:text-white font-bold rounded-lg transition-all text-center text-lg space-text"
              >
                SYSTEM SPECS
              </Link>
            </motion.div>
          </motion.div>

          {/* Orbital Paths with Planets */}
          <div className="relative transform-3d" style={{ height: '800px' }}>
            
            {planets.map((planet, index) => (
              <motion.div
                key={planet.id}
                className="absolute top-1/2 left-1/2"
                style={{
                  width: `${planet.orbit * 2}px`,
                  height: `${planet.orbit * 2}px`,
                  marginLeft: `-${planet.orbit}px`,
                  marginTop: `-${planet.orbit}px`,
                }}
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: planet.speed,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                {/* Orbital Path */}
                <div className="orbital-path" style={{ width: '100%', height: '100%' }} />
                
                {/* Planet */}
                <motion.div
                  className="absolute top-0 left-1/2 -translate-x-1/2 cursor-pointer"
                  whileHover={{ scale: 1.2 }}
                  onClick={() => setSelectedPlanet(planet.id)}
                >
                  <Link href={`/products/${planet.slug}`}>
                    <motion.div
                      className="planet-surface planet-glow planet-hover relative"
                      style={{
                        width: `${planet.size}px`,
                        height: `${planet.size}px`,
                      }}
                      animate={{
                        rotate: -360,
                      }}
                      transition={{
                        duration: 60,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    >
                      {/* Copper Traces on planet */}
                      <div className="copper-traces" />
                      
                      {/* Product image overlay */}
                      <div className="absolute inset-4 rounded-full overflow-hidden opacity-70">
                        <Image
                          src={planet.image}
                          alt={planet.name}
                          fill
                          className="object-contain p-2"
                          style={{ filter: 'drop-shadow(0 0 10px rgba(0, 255, 136, 0.6))' }}
                        />
                      </div>

                      {/* Solder points around planet */}
                      {[0, 90, 180, 270].map((angle, i) => (
                        <div
                          key={i}
                          className="solder-point absolute"
                          style={{
                            top: '50%',
                            left: '50%',
                            transform: `rotate(${angle}deg) translateY(-${planet.size / 2 + 5}px)`,
                          }}
                        />
                      ))}
                    </motion.div>
                  </Link>

                  {/* Planet Label */}
                  <motion.div
                    className="absolute top-full mt-4 left-1/2 -translate-x-1/2 text-center whitespace-nowrap"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 + index * 0.3 }}
                  >
                    <div className="pcb-text text-lg font-bold space-text">{planet.name}</div>
                    <div className="coordinates">{planet.coordinates}</div>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PLANET CATALOG SECTION */}
      <section id="planets" className="py-24 relative">
        <div className="absolute inset-0 pcb-grid opacity-20" />
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 planet-card">
              <div className="led-star" />
              <span className="text-sm text-gray-400 uppercase tracking-wide font-semibold space-text">PLANETARY DATABASE</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold mb-6 uppercase">
              <span className="pcb-text">CIRCUIT BOARD</span> <span className="text-white">WORLDS</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto space-text">
              Land on any planet to explore its component geography and technical specifications
            </p>
          </motion.div>

          <div className="grid gap-10 md:grid-cols-3">
            {planets.map((planet, index) => (
              <motion.div
                key={planet.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                className="h-full fade-in-up"
              >
                <Link 
                  href={`/products/${planet.slug}`}
                  className="group block h-full"
                >
                  <motion.div
                    className="h-full planet-card p-6 relative overflow-hidden float-gentle"
                    whileHover={{ 
                      y: -15,
                      scale: 1.03,
                    }}
                    style={{ animationDelay: `${index * 0.5}s` }}
                  >
                    {/* Coordinates Badge */}
                    <div className="absolute top-6 right-6 z-30">
                      <motion.div 
                        className="px-4 py-2 planet-card border border-yellow-500/50 rounded-lg"
                        animate={{
                          borderColor: ['rgba(255, 234, 0, 0.5)', 'rgba(255, 234, 0, 1)', 'rgba(255, 234, 0, 0.5)']
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <span className="text-[10px] font-bold uppercase tracking-wider coordinates">
                          {planet.coordinates}
                        </span>
                      </motion.div>
                    </div>
                    
                    {/* Planet Visualization */}
                    <div className="h-80 relative p-8 flex items-center justify-center mb-6 pcb-grid rounded-xl" 
                         style={{ background: 'linear-gradient(135deg, rgba(0, 77, 42, 0.3) 0%, rgba(0, 51, 32, 0.5) 100%)' }}>
                      
                      {/* Orbiting mini planet */}
                      <motion.div
                        className="planet-surface planet-glow relative"
                        style={{ width: '180px', height: '180px' }}
                        animate={{
                          rotate: 360,
                        }}
                        transition={{
                          duration: 20,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      >
                        <div className="copper-traces" />
                        
                        <div className="absolute inset-6 rounded-full overflow-hidden">
                          <Image
                            src={planet.image}
                            alt={planet.name}
                            fill
                            className="object-contain p-2"
                            style={{ filter: 'drop-shadow(0 0 20px rgba(0, 255, 136, 0.6))' }}
                          />
                        </div>

                        {/* Solder points */}
                        {[0, 90, 180, 270].map((angle, i) => (
                          <div
                            key={i}
                            className="solder-point absolute"
                            style={{
                              top: '50%',
                              left: '50%',
                              transform: `rotate(${angle}deg) translateY(-95px)`,
                            }}
                          />
                        ))}
                      </motion.div>

                      {/* Orbital ring */}
                      <motion.div
                        className="absolute inset-0 border-2 border-dashed border-green-500/20 rounded-full"
                        animate={{ rotate: -360 }}
                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                      />
                    </div>
                    
                    {/* Planet Info */}
                    <div className="relative z-10">
                      
                      <h3 className="text-3xl font-bold pcb-text mb-2 leading-tight uppercase space-text">
                        {planet.name}
                      </h3>
                      <p className="text-lg text-gray-300 mb-4">{planet.fullName}</p>
                      <p className="text-sm text-gray-500 mb-5 italic">{planet.description}</p>
                      
                      {/* Technical Specs */}
                      <div className="grid grid-cols-2 gap-3 mb-5">
                        {Object.entries(planet.specs).map(([key, value], i) => (
                          <div key={i} className="planet-card p-3 rounded border border-green-500/30">
                            <div className="text-[9px] text-gray-500 mb-1 uppercase tracking-wider">{key}</div>
                            <div className="text-xs font-bold pcb-text">{value}</div>
                          </div>
                        ))}
                      </div>

                      {/* Components (like cities) */}
                      <div className="mb-5">
                        <div className="text-xs text-gray-500 uppercase font-bold mb-2 space-text">Component Cities:</div>
                        <div className="flex flex-wrap gap-2">
                          {planet.components.map((comp, i) => (
                            <span 
                              key={i} 
                              className="px-2 py-1 planet-card rounded text-[10px] font-bold uppercase copper-text"
                            >
                              {comp}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Trace connector */}
                      <div className="trace-connector my-5" />

                      {/* Price */}
                      <div className="mb-5 flex items-center justify-between p-4 planet-card rounded-xl border border-yellow-500/30">
                        <span className="text-xs text-gray-400 uppercase font-bold tracking-wider space-text">Landing Cost</span>
                        <div>
                          <span className="text-4xl font-bold text-yellow-400">£{planet.price}</span>
                          <span className="text-gray-500 text-sm ml-2">GBP</span>
                        </div>
                      </div>
                      
                      {/* Add to Cart Button */}
                      <motion.button 
                        onClick={(e) => handleAddToCart(planet, e)}
                        className="w-full py-4 space-button rounded-xl text-white text-base font-bold transition-all flex items-center justify-center gap-3 uppercase tracking-wider"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        <span className="relative z-10 flex items-center gap-2">
                          {addedItemId === planet.id ? (
                            <>
                              <CheckCircle2 className="w-5 h-5" />
                              DOCKED IN CARGO
                            </>
                          ) : (
                            <>
                              <ShoppingCart className="w-5 h-5" />
                              DOCK TO CART
                            </>
                          )}
                        </span>
                      </motion.button>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* View All CTA */}
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            <Link 
              href="/products"
              className="inline-flex items-center gap-3 px-10 py-5 space-button rounded-xl text-lg font-bold uppercase"
            >
              <span className="pcb-text">EXPLORE ALL PLANETS</span>
              <Rocket className="w-6 h-6 text-green-400" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />

    </div>
  );
}
