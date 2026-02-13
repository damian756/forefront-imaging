'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Zap, HardDrive, Radio, Activity, BarChart3 } from 'lucide-react';

interface Particle {
  x: number;
  y: number;
  speed: number;
  size: number;
  opacity: number;
  hue: number;
}

interface SignalStage {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  position: { x: number; y: number };
  color: string;
}

export default function SignalFlowVisualizer() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [hoveredStage, setHoveredStage] = useState<string | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [signalStrength, setSignalStrength] = useState({ input: 0, processing: 0, output: 0 });
  const [bandwidth, setBandwidth] = useState(0);
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameRef = useRef<number | undefined>(undefined);

  const stages: SignalStage[] = [
    {
      id: 'input',
      title: 'HDMI INPUT',
      subtitle: '4K60 Signal',
      icon: Radio,
      position: { x: 10, y: 50 },
      color: '#60a5fa'
    },
    {
      id: 'processing',
      title: 'HARDWARE DECODE',
      subtitle: 'Zero Latency',
      icon: Cpu,
      position: { x: 50, y: 50 },
      color: '#38bdf8'
    },
    {
      id: 'output',
      title: 'USB 3.0 OUTPUT',
      subtitle: '10 Gbps',
      icon: Zap,
      position: { x: 90, y: 50 },
      color: '#3b82f6'
    }
  ];

  // Initialize particles
  useEffect(() => {
    const particleCount = 80;
    particlesRef.current = Array.from({ length: particleCount }, () => ({
      x: Math.random() * 100,
      y: 45 + Math.random() * 10,
      speed: 0.3 + Math.random() * 0.5,
      size: 2 + Math.random() * 3,
      opacity: 0.3 + Math.random() * 0.7,
      hue: 260 + Math.random() * 40
    }));
  }, []);

  // Animate signal strength meters
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setSignalStrength({
          input: 85 + Math.random() * 15,
          processing: 90 + Math.random() * 10,
          output: 88 + Math.random() * 12
        });
        setBandwidth(8.5 + Math.random() * 1.5);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [isPaused]);

  // Canvas animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const animate = () => {
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      // Draw main fiber optic line
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.3)';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(rect.width * 0.05, rect.height * 0.5);
      ctx.lineTo(rect.width * 0.95, rect.height * 0.5);
      ctx.stroke();

      // Draw glowing underlayer
      ctx.strokeStyle = 'rgba(96, 165, 250, 0.15)';
      ctx.lineWidth = 12;
      ctx.beginPath();
      ctx.moveTo(rect.width * 0.05, rect.height * 0.5);
      ctx.lineTo(rect.width * 0.95, rect.height * 0.5);
      ctx.stroke();

      if (!isPaused) {
        // Update and draw particles
        particlesRef.current.forEach((particle) => {
          particle.x += particle.speed;

          // Reset particle when it reaches the end
          if (particle.x > 100) {
            particle.x = 5;
            particle.y = 45 + Math.random() * 10;
          }

          const px = (particle.x / 100) * rect.width;
          const py = (particle.y / 100) * rect.height;

          // Draw particle glow
          const gradient = ctx.createRadialGradient(px, py, 0, px, py, particle.size * 3);
          gradient.addColorStop(0, `hsla(${particle.hue}, 80%, 70%, ${particle.opacity})`);
          gradient.addColorStop(0.5, `hsla(${particle.hue}, 80%, 70%, ${particle.opacity * 0.5})`);
          gradient.addColorStop(1, `hsla(${particle.hue}, 80%, 70%, 0)`);

          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(px, py, particle.size * 3, 0, Math.PI * 2);
          ctx.fill();

          // Draw particle core
          ctx.fillStyle = `hsla(${particle.hue}, 80%, 80%, ${particle.opacity})`;
          ctx.beginPath();
          ctx.arc(px, py, particle.size, 0, Math.PI * 2);
          ctx.fill();
        });
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isPaused]);

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 opacity-20" style={{ 
        background: 'radial-gradient(ellipse at 50% 50%, rgba(59, 130, 246, 0.4), transparent 70%)'
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
            <Activity className="w-4 h-4 text-fiber-cyan" />
            <span className="text-xs text-cool-gray uppercase tracking-widest font-semibold">Signal Pipeline</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 uppercase tracking-tight">
            <span className="text-gradient">Real-Time Flow</span>
          </h2>
          <p className="text-cool-gray text-lg max-w-2xl mx-auto font-light">
            Watch your video signal travel through our hardware-accelerated pipeline with zero latency
          </p>
        </motion.div>

        {/* Main Visualizer Container */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="port-module p-8 md:p-12 brushed-metal relative">
            
            {/* Status Bar */}
            <div className="flex flex-wrap gap-4 mb-8 pb-6 border-b border-fiber-violet/20">
              <div className="flex items-center gap-2">
                <div className={`status-indicator ${isPaused ? 'disconnected' : 'connected'}`} />
                <span className="text-xs text-cool-gray uppercase tracking-wider font-semibold">
                  {isPaused ? 'PAUSED' : 'LIVE SIGNAL'}
                </span>
              </div>
              <div className="flex items-center gap-2 glass-panel px-3 py-1 rounded">
                <BarChart3 className="w-3 h-3 text-fiber-cyan" />
                <span className="text-xs text-fiber-cyan font-mono font-semibold">
                  {bandwidth.toFixed(1)} Gbps
                </span>
              </div>
              <button
                onClick={() => setIsPaused(!isPaused)}
                className="ml-auto px-4 py-1 text-xs glass-panel rounded hover:bg-fiber-violet/10 transition-colors studio-border uppercase tracking-wider font-semibold"
              >
                {isPaused ? 'Resume' : 'Pause'}
              </button>
            </div>

            {/* Canvas with Particle System */}
            <div className="relative mb-12" style={{ height: '300px' }}>
              <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full"
                style={{ 
                  filter: hoveredStage ? 'brightness(0.7)' : 'brightness(1)',
                  transition: 'filter 0.3s ease'
                }}
              />

              {/* Stage Nodes */}
              {stages.map((stage, index) => (
                <motion.div
                  key={stage.id}
                  className="absolute"
                  style={{
                    left: `${stage.position.x}%`,
                    top: `${stage.position.y}%`,
                    transform: 'translate(-50%, -50%)',
                  }}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                  onHoverStart={() => setHoveredStage(stage.id)}
                  onHoverEnd={() => setHoveredStage(null)}
                >
                  <motion.div
                    className="relative cursor-pointer"
                    whileHover={{ scale: 1.1 }}
                    animate={{
                      scale: hoveredStage === stage.id ? 1.15 : 1,
                    }}
                  >
                    {/* Glow Effect */}
                    <div 
                      className="absolute inset-0 rounded-full blur-xl opacity-50"
                      style={{ 
                        background: stage.color,
                        width: '80px',
                        height: '80px',
                        left: '50%',
                        top: '50%',
                        transform: 'translate(-50%, -50%)',
                      }}
                    />
                    
                    {/* Node Circle */}
                    <div 
                      className="relative w-20 h-20 rounded-full flex items-center justify-center metal-surface studio-border"
                      style={{
                        boxShadow: hoveredStage === stage.id 
                          ? `0 0 30px ${stage.color}` 
                          : `0 0 15px ${stage.color}80`
                      }}
                    >
                      <stage.icon 
                        className="w-8 h-8 transition-colors"
                        style={{ color: stage.color }}
                      />
                    </div>

                    {/* Label */}
                    <div className="absolute top-full mt-4 left-1/2 -translate-x-1/2 text-center whitespace-nowrap">
                      <div className="text-sm font-bold text-soft-white uppercase tracking-tight mb-1">
                        {stage.title}
                      </div>
                      <div className="text-xs text-cool-gray font-mono">
                        {stage.subtitle}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Signal Strength Meters */}
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { label: 'Input Signal', value: signalStrength.input, color: '#a78bfa', icon: Radio },
                { label: 'Processing', value: signalStrength.processing, color: '#c084fc', icon: Cpu },
                { label: 'Output Signal', value: signalStrength.output, color: '#8b5cf6', icon: Zap }
              ].map((meter, index) => (
                <motion.div
                  key={meter.label}
                  className="glass-panel p-4 rounded-lg studio-border"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <meter.icon className="w-4 h-4" style={{ color: meter.color }} />
                    <span className="text-xs text-cool-gray uppercase tracking-wider font-semibold">
                      {meter.label}
                    </span>
                  </div>
                  
                  {/* Signal Bar */}
                  <div className="h-2 bg-dark-purple rounded-full overflow-hidden mb-2">
                    <motion.div
                      className="h-full rounded-full"
                      style={{
                        background: `linear-gradient(90deg, ${meter.color}, ${meter.color}cc)`,
                        boxShadow: `0 0 10px ${meter.color}80`
                      }}
                      animate={{
                        width: `${meter.value}%`,
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  
                  {/* Percentage */}
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold font-mono" style={{ color: meter.color }}>
                      {meter.value.toFixed(0)}%
                    </span>
                    <motion.div
                      animate={{
                        opacity: [1, 0.5, 1],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <div className="signal-strength">
                        {[1, 2, 3, 4, 5].map((bar) => (
                          <div 
                            key={bar} 
                            className={`signal-bar ${bar * 20 <= meter.value ? 'active' : ''}`}
                            style={{
                              backgroundColor: bar * 20 <= meter.value ? meter.color : 'rgba(82, 82, 91, 0.5)'
                            }}
                          />
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Hover Stage Info */}
            <AnimatePresence>
              {hoveredStage && (
                <motion.div
                  className="absolute bottom-8 right-8 glass-panel p-6 rounded-lg studio-border max-w-xs"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                >
                  {hoveredStage === 'input' && (
                    <>
                      <h4 className="text-sm font-bold text-fiber-cyan uppercase tracking-tight mb-2">HDMI Input Stage</h4>
                      <p className="text-xs text-cool-gray leading-relaxed mb-3">
                        Accepts uncompressed 4K video signals at 60fps. HDCP compliant with automatic EDID management.
                      </p>
                      <div className="flex gap-2 text-[10px] text-fiber-cyan font-mono">
                        <span className="glass-panel px-2 py-1 rounded">4K60</span>
                        <span className="glass-panel px-2 py-1 rounded">HDR10</span>
                        <span className="glass-panel px-2 py-1 rounded">10-bit</span>
                      </div>
                    </>
                  )}
                  {hoveredStage === 'processing' && (
                    <>
                      <h4 className="text-sm font-bold text-fiber-sky uppercase tracking-tight mb-2">Hardware Decode</h4>
                      <p className="text-xs text-cool-gray leading-relaxed mb-3">
                        Dedicated ASIC processes video in real-time with zero CPU overhead. Hardware scaling and color space conversion.
                      </p>
                      <div className="flex gap-2 text-[10px] text-fiber-sky font-mono">
                        <span className="glass-panel px-2 py-1 rounded">&lt;1ms</span>
                        <span className="glass-panel px-2 py-1 rounded">0% CPU</span>
                      </div>
                    </>
                  )}
                  {hoveredStage === 'output' && (
                    <>
                      <h4 className="text-sm font-bold text-fiber-blue uppercase tracking-tight mb-2">USB 3.0 Output</h4>
                      <p className="text-xs text-cool-gray leading-relaxed mb-3">
                        SuperSpeed USB 3.0 delivers up to 10 Gbps bandwidth. Driver-free operation on Windows, Mac, and Linux.
                      </p>
                      <div className="flex gap-2 text-[10px] text-fiber-blue font-mono">
                        <span className="glass-panel px-2 py-1 rounded">10 Gbps</span>
                        <span className="glass-panel px-2 py-1 rounded">UVC</span>
                      </div>
                    </>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </motion.div>

        {/* Technical Specs Footer */}
        <motion.div 
          className="grid md:grid-cols-4 gap-4 mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {[
            { label: 'Input Resolution', value: 'Up to 4K60' },
            { label: 'Processing Latency', value: '< 1 millisecond' },
            { label: 'Bandwidth', value: '10 Gbps' },
            { label: 'Color Depth', value: '10-bit HDR' }
          ].map((spec, index) => (
            <div key={index} className="text-center glass-panel p-4 rounded-lg studio-border">
              <div className="text-xs text-cool-gray uppercase tracking-wider mb-2 font-semibold">{spec.label}</div>
              <div className="text-lg font-bold text-fiber-cyan font-mono">{spec.value}</div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
