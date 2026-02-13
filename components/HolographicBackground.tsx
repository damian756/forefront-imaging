'use client';

import { useEffect, useRef } from 'react';

export default function HolographicBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Holographic particles
    class HoloParticle {
      x: number = 0;
      y: number = 0;
      z: number = 0;
      vx: number = 0;
      vy: number = 0;
      life: number = 0;
      maxLife: number = 0;
      size: number = 0;
      color: string = '#00d4ff';

      constructor() {
        if (!canvas) return;
        this.reset();
      }

      reset() {
        if (!canvas) return;
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.z = Math.random();
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.life = 0;
        this.maxLife = 200 + Math.random() * 200;
        this.size = 1 + Math.random() * 2;
        this.color = Math.random() > 0.7 ? '#ff6b00' : '#00d4ff';
      }

      update() {
        if (!canvas) return;
        this.x += this.vx;
        this.y += this.vy;
        this.life++;
        
        if (this.life > this.maxLife || this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
          this.reset();
        }
      }

      draw() {
        if (!ctx) return;
        const opacity = 1 - (this.life / this.maxLife);
        const glowSize = this.size * (2 + this.z * 3);
        
        // Outer glow
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, glowSize);
        gradient.addColorStop(0, this.color + Math.floor(opacity * 255).toString(16).padStart(2, '0'));
        gradient.addColorStop(0.5, this.color + Math.floor(opacity * 128).toString(16).padStart(2, '0'));
        gradient.addColorStop(1, this.color + '00');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, glowSize, 0, Math.PI * 2);
        ctx.fill();
        
        // Bright center
        ctx.fillStyle = this.color + Math.floor(opacity * 255).toString(16).padStart(2, '0');
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Connection lines
    class HoloConnection {
      x1: number = 0;
      y1: number = 0;
      x2: number = 0;
      y2: number = 0;
      progress: number = 0;
      speed: number = 0;
      color: string = '#00d4ff';

      constructor() {
        if (!canvas) return;
        this.reset();
      }

      reset() {
        if (!canvas) return;
        this.x1 = Math.random() * canvas.width;
        this.y1 = Math.random() * canvas.height;
        this.x2 = this.x1 + (Math.random() - 0.5) * 400;
        this.y2 = this.y1 + (Math.random() - 0.5) * 400;
        this.progress = 0;
        this.speed = 0.005 + Math.random() * 0.01;
        this.color = Math.random() > 0.5 ? '#00d4ff' : '#ff6b00';
      }

      update() {
        this.progress += this.speed;
        if (this.progress >= 1) {
          this.reset();
        }
      }

      draw() {
        if (!ctx) return;
        const currentX = this.x1 + (this.x2 - this.x1) * this.progress;
        const currentY = this.y1 + (this.y2 - this.y1) * this.progress;
        
        // Line
        ctx.strokeStyle = this.color + '40';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(this.x1, this.y1);
        ctx.lineTo(currentX, currentY);
        ctx.stroke();
        
        // End point glow
        const gradient = ctx.createRadialGradient(currentX, currentY, 0, currentX, currentY, 8);
        gradient.addColorStop(0, this.color);
        gradient.addColorStop(1, this.color + '00');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(currentX, currentY, 8, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const particles: HoloParticle[] = [];
    const connections: HoloConnection[] = [];
    
    const particleCount = 100;
    const connectionCount = 8;

    for (let i = 0; i < particleCount; i++) {
      particles.push(new HoloParticle());
    }

    for (let i = 0; i < connectionCount; i++) {
      connections.push(new HoloConnection());
    }

    let animationId: number;

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw projection grid (subtle)
      ctx.strokeStyle = 'rgba(0, 212, 255, 0.03)';
      ctx.lineWidth = 1;
      
      for (let x = 0; x < canvas.width; x += 100) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      
      for (let y = 0; y < canvas.height; y += 100) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Update and draw connections first (behind particles)
      connections.forEach(conn => {
        conn.update();
        conn.draw();
      });

      // Update and draw particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0"
        style={{ opacity: 0.6 }}
      />
      {/* Scan line overlay */}
      <div className="fixed inset-0 pointer-events-none z-0 scan-lines" />
      <div className="fixed inset-0 pointer-events-none z-0 scan-line-sweep" />
    </>
  );
}
