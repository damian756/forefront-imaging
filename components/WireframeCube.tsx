'use client';

import { motion } from 'framer-motion';

export default function WireframeCube({ size = 200, className = '' }: { size?: number; className?: string }) {
  const half = size / 2;
  
  return (
    <div className={`perspective-container ${className}`} style={{ width: size, height: size }}>
      <motion.svg
        className="rotate-3d"
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        style={{
          filter: 'drop-shadow(0 0 10px rgba(0, 240, 255, 0.6))',
        }}
        animate={{
          rotateY: [0, 360],
          rotateX: [0, 15, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <defs>
          <linearGradient id="wireGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#00f0ff', stopOpacity: 1 }} />
            <stop offset="50%" style={{ stopColor: '#a855f7', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#ff006e', stopOpacity: 1 }} />
          </linearGradient>
        </defs>

        {/* Front face */}
        <line x1={half - 50} y1={half - 50} x2={half + 50} y2={half - 50} stroke="url(#wireGradient)" strokeWidth="2" opacity="0.8" />
        <line x1={half + 50} y1={half - 50} x2={half + 50} y2={half + 50} stroke="url(#wireGradient)" strokeWidth="2" opacity="0.8" />
        <line x1={half + 50} y1={half + 50} x2={half - 50} y2={half + 50} stroke="url(#wireGradient)" strokeWidth="2" opacity="0.8" />
        <line x1={half - 50} y1={half + 50} x2={half - 50} y2={half - 50} stroke="url(#wireGradient)" strokeWidth="2" opacity="0.8" />

        {/* Back face */}
        <line x1={half - 30} y1={half - 70} x2={half + 70} y2={half - 70} stroke="url(#wireGradient)" strokeWidth="2" opacity="0.4" />
        <line x1={half + 70} y1={half - 70} x2={half + 70} y2={half + 30} stroke="url(#wireGradient)" strokeWidth="2" opacity="0.4" />
        <line x1={half + 70} y1={half + 30} x2={half - 30} y2={half + 30} stroke="url(#wireGradient)" strokeWidth="2" opacity="0.4" />
        <line x1={half - 30} y1={half + 30} x2={half - 30} y2={half - 70} stroke="url(#wireGradient)" strokeWidth="2" opacity="0.4" />

        {/* Connecting lines */}
        <line x1={half - 50} y1={half - 50} x2={half - 30} y2={half - 70} stroke="url(#wireGradient)" strokeWidth="2" opacity="0.6" />
        <line x1={half + 50} y1={half - 50} x2={half + 70} y2={half - 70} stroke="url(#wireGradient)" strokeWidth="2" opacity="0.6" />
        <line x1={half + 50} y1={half + 50} x2={half + 70} y2={half + 30} stroke="url(#wireGradient)" strokeWidth="2" opacity="0.6" />
        <line x1={half - 50} y1={half + 50} x2={half - 30} y2={half + 30} stroke="url(#wireGradient)" strokeWidth="2" opacity="0.6" />

        {/* Corner dots */}
        {[
          [half - 50, half - 50], [half + 50, half - 50], [half + 50, half + 50], [half - 50, half + 50],
          [half - 30, half - 70], [half + 70, half - 70], [half + 70, half + 30], [half - 30, half + 30]
        ].map(([x, y], i) => (
          <circle
            key={i}
            cx={x}
            cy={y}
            r="3"
            fill="#00f0ff"
            className="pulse-glow"
          >
            <animate
              attributeName="r"
              values="3;5;3"
              dur="2s"
              repeatCount="indefinite"
              begin={`${i * 0.2}s`}
            />
          </circle>
        ))}
      </motion.svg>
    </div>
  );
}
