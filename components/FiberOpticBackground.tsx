'use client';

import { useEffect, useRef } from 'react';

export default function FiberOpticBackground() {
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

    class LightParticle {
      x: number = 0;
      y: number = 0;
      vx: number = 0;
      vy: number = 0;
      life: number = 0;
      maxLife: number = 0;
      hue: number = 0;
      size: number = 0;

      constructor() {
        if (!canvas) return;
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() - 0.5) * 2;
        this.life = 0;
        this.maxLife = 100 + Math.random() * 100;
        this.hue = Math.random() * 60 + 180; // Blue to cyan range
        this.size = Math.random() * 2 + 1;
      }

      update() {
        if (!canvas) return;
        this.x += this.vx;
        this.y += this.vy;
        this.life++;

        if (this.life > this.maxLife || this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
          this.life = 0;
        }
      }

      draw() {
        if (!ctx) return;
        const alpha = 1 - (this.life / this.maxLife);
        
        // Outer glow
        ctx.beginPath();
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size * 4);
        gradient.addColorStop(0, `hsla(${this.hue}, 100%, 70%, ${alpha * 0.8})`);
        gradient.addColorStop(0.5, `hsla(${this.hue}, 100%, 60%, ${alpha * 0.4})`);
        gradient.addColorStop(1, `hsla(${this.hue}, 100%, 50%, 0)`);
        ctx.fillStyle = gradient;
        ctx.arc(this.x, this.y, this.size * 4, 0, Math.PI * 2);
        ctx.fill();

        // Bright center
        ctx.beginPath();
        ctx.fillStyle = `hsla(${this.hue}, 100%, 90%, ${alpha})`;
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const particles: LightParticle[] = [];
    const particleCount = 80;

    for (let i = 0; i < particleCount; i++) {
      particles.push(new LightParticle());
    }

    let animationId: number;

    const animate = () => {
      ctx.fillStyle = 'rgba(5, 5, 16, 0.1)'; // Fading trail
      ctx.fillRect(0, 0, canvas.width, canvas.height);

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
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.6 }}
    />
  );
}
