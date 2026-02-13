'use client';

import { useEffect, useRef } from 'react';

export default function RGBParticles() {
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

    // RGB Gaming Particle
    class RGBParticle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      hue: number;
      life: number;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() - 0.5) * 2;
        this.size = Math.random() * 3 + 1;
        // RGB gaming colors: Cyan=180, Pink=320, Green=120, Yellow=60
        const hues = [180, 320, 120, 60, 280];
        this.hue = hues[Math.floor(Math.random() * hues.length)];
        this.life = 1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life -= 0.002;

        // Wrap around screen
        if (this.x < 0) this.x = canvas!.width;
        if (this.x > canvas!.width) this.x = 0;
        if (this.y < 0) this.y = canvas!.height;
        if (this.y > canvas!.height) this.y = 0;

        // Respawn if dead
        if (this.life <= 0) {
          this.x = Math.random() * canvas!.width;
          this.y = Math.random() * canvas!.height;
          this.life = 1;
        }
      }

      draw() {
        if (!ctx) return;

        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size * 4);
        gradient.addColorStop(0, `hsla(${this.hue}, 100%, 50%, ${this.life})`);
        gradient.addColorStop(0.5, `hsla(${this.hue}, 100%, 50%, ${this.life * 0.5})`);
        gradient.addColorStop(1, `hsla(${this.hue}, 100%, 50%, 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 4, 0, Math.PI * 2);
        ctx.fill();

        // Bright center
        ctx.fillStyle = `hsla(${this.hue}, 100%, 80%, ${this.life * 0.8})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Create particles
    const particles: RGBParticle[] = [];
    const particleCount = 100;

    for (let i = 0; i < particleCount; i++) {
      particles.push(new RGBParticle());
    }

    // Animation loop
    let animationId: number;
    const animate = () => {
      ctx.fillStyle = 'rgba(10, 10, 15, 0.15)';
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
      style={{ opacity: 0.4 }}
    />
  );
}
