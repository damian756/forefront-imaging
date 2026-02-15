'use client';

import React, { useState, useRef, useCallback, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Monitor, Maximize2, Info, CheckCircle2, XCircle } from 'lucide-react';

export default function QualityComparison() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [selectedScenario, setSelectedScenario] = useState('gaming');
  const containerRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);

  const scenarios = [
    {
      id: 'gaming',
      label: '4K Gaming',
      description: 'Fast-paced action with high frame rates',
      specs: { fps: 60, res: '3840x2160', latency: '<1ms' }
    },
    {
      id: 'broadcast',
      label: 'Live Broadcast',
      description: 'Professional multi-camera production',
      specs: { fps: 60, res: '1920x1080', latency: '<1ms' }
    },
    {
      id: 'medical',
      label: 'Medical Imaging',
      description: 'Surgical video with color accuracy',
      specs: { fps: 60, res: '3840x2160', latency: '<1ms' }
    }
  ];

  const qualityMetrics = {
    professional: [
      { label: 'Color Accuracy', value: '10-bit HDR', status: 'excellent' },
      { label: 'Frame Loss', value: '0 frames', status: 'excellent' },
      { label: 'Compression', value: 'Uncompressed', status: 'excellent' },
      { label: 'Bandwidth', value: '10 Gbps', status: 'excellent' },
      { label: 'Latency', value: '<1ms', status: 'excellent' }
    ],
    consumer: [
      { label: 'Color Accuracy', value: '8-bit SDR', status: 'poor' },
      { label: 'Frame Loss', value: '15-30%', status: 'poor' },
      { label: 'Compression', value: 'Heavy MJPEG', status: 'poor' },
      { label: 'Bandwidth', value: '480 Mbps', status: 'poor' },
      { label: 'Latency', value: '50-150ms', status: 'poor' }
    ]
  };

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    isDraggingRef.current = true;
    setIsDragging(true);
    updatePosition(e.clientX);
  };

  // Document-level listeners so drag continues when pointer leaves the container
  useEffect(() => {
    if (!isDragging) return;
    const onMove = (e: MouseEvent) => updatePosition(e.clientX);
    const onUp = () => {
      isDraggingRef.current = false;
      setIsDragging(false);
    };
    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onUp);
    document.body.style.userSelect = 'none';
    document.body.style.cursor = 'ew-resize';
    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseup', onUp);
      document.body.style.userSelect = '';
      document.body.style.cursor = '';
    };
  }, [isDragging, updatePosition]);

  const handleTouchStart = (e: React.TouchEvent) => {
    isDraggingRef.current = true;
    setIsDragging(true);
    if (e.touches[0]) updatePosition(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDraggingRef.current && e.cancelable) e.preventDefault();
    if (e.touches[0]) updatePosition(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    isDraggingRef.current = false;
    setIsDragging(false);
  };

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-10" style={{ 
        background: 'radial-gradient(ellipse at 50% 50%, rgba(56, 189, 248, 0.3), transparent 70%)'
      }} />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 glass-panel rounded-lg studio-border">
            <Monitor className="w-4 h-4 text-fiber-sky" />
            <span className="text-xs text-cool-gray uppercase tracking-widest font-semibold">Quality Comparison</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 uppercase tracking-tight">
            <span className="text-gradient">See The Difference</span>
          </h2>
          <p className="text-cool-gray text-lg max-w-2xl mx-auto font-light">
            Professional hardware delivers uncompromising quality that consumer devices simply can't match
          </p>
        </motion.div>

        {/* Scenario Selector */}
        <motion.div 
          className="flex flex-wrap gap-3 justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {scenarios.map((scenario) => (
            <button
              key={scenario.id}
              onClick={() => setSelectedScenario(scenario.id)}
              className={`glass-panel px-6 py-3 rounded-lg studio-border transition-all ${
                selectedScenario === scenario.id 
                  ? 'bg-fiber-blue/20 border-fiber-blue' 
                  : 'hover:bg-fiber-blue/10'
              }`}
            >
              <div className="text-sm font-bold text-soft-white mb-1">{scenario.label}</div>
              <div className="text-xs text-cool-gray">{scenario.description}</div>
            </button>
          ))}
        </motion.div>

        {/* Comparison Container */}
        <motion.div
          className="port-module p-8 md:p-12 brushed-metal relative"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          {/* Split Screen Preview - select-none prevents text selection while dragging */}
          <div 
            ref={containerRef}
            className="relative h-96 md:h-[500px] rounded-lg overflow-hidden cursor-ew-resize mb-8 metal-surface studio-border select-none bg-black"
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Consumer Side (Left/Full) - Blurred Image */}
            <div className="absolute inset-0">
              <Image
                src="/images/quality-comparison.png"
                alt="Consumer quality comparison"
                fill
                className="object-contain"
                style={{ 
                  filter: 'blur(8px) brightness(0.7) saturate(0.6)',
                }}
                priority
              />
              {/* Overlay with label */}
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center pointer-events-none">
                <div className="text-center px-6 py-5 rounded-2xl bg-black/60 backdrop-blur-sm border border-white/10">
                  <XCircle className="w-12 h-12 text-red-500 mx-auto mb-3 opacity-80 drop-shadow-lg" />
                  <div className="text-xl md:text-2xl font-bold text-white mb-2" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.9)' }}>Consumer Hardware</div>
                  <div className="text-xs md:text-sm text-red-200" style={{ textShadow: '0 1px 6px rgba(0,0,0,0.9)' }}>Compressed • Dropped Frames • High Latency</div>
                </div>
              </div>
            </div>

            {/* Professional Side (Right) - Crisp Image - Revealed by slider */}
            <motion.div 
              className="absolute inset-0"
              style={{
                clipPath: `polygon(${sliderPosition}% 0, 100% 0, 100% 100%, ${sliderPosition}% 100%)`
              }}
            >
              <Image
                src="/images/quality-comparison.png"
                alt="Professional quality comparison"
                fill
                className="object-contain"
                priority
              />
              {/* Overlay with label */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-center px-6 py-5 rounded-2xl bg-black/60 backdrop-blur-sm border border-white/10">
                  <CheckCircle2 className="w-12 h-12 text-fiber-cyan mx-auto mb-3 drop-shadow-lg" />
                  <div className="text-xl md:text-2xl font-bold text-white mb-2" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.9)' }}>Professional Hardware</div>
                  <div className="text-xs md:text-sm text-cyan-200" style={{ textShadow: '0 1px 6px rgba(0,0,0,0.9)' }}>Uncompressed • Zero Loss • Sub-ms Latency</div>
                </div>
              </div>
            </motion.div>

            {/* Slider Handle */}
            <motion.div
              className="absolute top-0 bottom-0 w-1 bg-fiber-cyan shadow-[0_0_20px_rgba(96,165,250,0.8)] cursor-ew-resize"
              style={{ left: `${sliderPosition}%` }}
              animate={{
                boxShadow: isDragging
                  ? '0 0 30px rgba(96, 165, 250, 1)'
                  : '0 0 20px rgba(96, 165, 250, 0.8)'
              }}
            >
              {/* Handle Circle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <motion.div
                  className="w-12 h-12 rounded-full metal-surface studio-border flex items-center justify-center"
                  animate={{
                    scale: isDragging ? 1.2 : 1,
                  }}
                  style={{
                    boxShadow: '0 0 20px rgba(96, 165, 250, 0.6)'
                  }}
                >
                  <Maximize2 className="w-5 h-5 text-fiber-cyan rotate-90" />
                </motion.div>
              </div>
            </motion.div>

            {/* Labels */}
            <div className="absolute top-4 left-4 glass-panel px-3 py-2 rounded-lg studio-border">
              <div className="text-xs text-cool-gray uppercase tracking-wider font-semibold">Consumer</div>
            </div>
            <div className="absolute top-4 right-4 glass-panel px-3 py-2 rounded-lg studio-border">
              <div className="text-xs text-fiber-cyan uppercase tracking-wider font-semibold">Professional</div>
            </div>
          </div>

          {/* Metrics Comparison */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Consumer Metrics */}
            <div className="glass-panel p-6 rounded-lg studio-border">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-zinc-700">
                <XCircle className="w-5 h-5 text-red-500" />
                <h3 className="text-lg font-bold text-zinc-300 uppercase tracking-tight">Consumer Grade</h3>
              </div>
              <div className="space-y-3">
                {qualityMetrics.consumer.map((metric, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center justify-between p-3 bg-zinc-900/50 rounded border border-red-900/30"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <span className="text-xs text-zinc-400 uppercase tracking-wider font-semibold">{metric.label}</span>
                    <span className="text-sm font-mono text-red-400">{metric.value}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Professional Metrics */}
            <div className="glass-panel p-6 rounded-lg studio-border">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-fiber-cyan/30">
                <CheckCircle2 className="w-5 h-5 text-fiber-cyan" />
                <h3 className="text-lg font-bold text-soft-white uppercase tracking-tight">Professional Grade</h3>
              </div>
              <div className="space-y-3">
                {qualityMetrics.professional.map((metric, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center justify-between p-3 bg-fiber-blue/10 rounded border border-fiber-cyan/30"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <span className="text-xs text-cool-gray uppercase tracking-wider font-semibold">{metric.label}</span>
                    <span className="text-sm font-mono text-fiber-cyan font-bold">{metric.value}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Info Banner */}
          <motion.div 
            className="mt-6 glass-panel p-4 rounded-lg studio-border flex items-start gap-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Info className="w-5 h-5 text-fiber-cyan flex-shrink-0 mt-0.5" />
            <div>
              <div className="text-sm font-bold text-soft-white mb-1">Why Professional Hardware Matters</div>
              <div className="text-xs text-cool-gray leading-relaxed">
                Consumer capture devices use aggressive compression to reduce bandwidth, resulting in visible artifacts, 
                dropped frames, and increased latency. Professional hardware like ours processes signals in real-time 
                with dedicated ASICs, preserving every detail of your original source.
              </div>
            </div>
          </motion.div>

        </motion.div>

        {/* Current Scenario Specs */}
        <motion.div 
          className="mt-6 grid grid-cols-3 gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {Object.entries(scenarios.find(s => s.id === selectedScenario)?.specs || {}).map(([key, value]) => (
            <div key={key} className="text-center glass-panel p-4 rounded-lg studio-border">
              <div className="text-xs text-cool-gray uppercase tracking-wider mb-2 font-semibold">{key}</div>
              <div className="text-lg font-bold text-fiber-sky font-mono">{value}</div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
