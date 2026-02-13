'use client';

import { useEffect, useRef } from 'react';

export default function SpaceBackground() {
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

    // Stars
    class Star {
      x: number = 0;
      y: number = 0;
      size: number = 0;
      brightness: number = 0;
      twinkleSpeed: number = 0;
      life: number = 0;

      constructor() {
        if (!canvas) return;
        this.reset();
      }

      reset() {
        if (!canvas) return;
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2;
        this.brightness = Math.random();
        this.twinkleSpeed = 0.01 + Math.random() * 0.02;
        this.life = 0;
      }

      update() {
        this.life += this.twinkleSpeed;
        this.brightness = Math.abs(Math.sin(this.life));
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = `rgba(255, 255, 255, ${this.brightness})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Add glow for bigger stars
        if (this.size > 1.2) {
          const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size * 3);
          gradient.addColorStop(0, `rgba(255, 255, 255, ${this.brightness * 0.5})`);
          gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size * 3, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }

    // Shooting Stars
    class ShootingStar {
      x: number = 0;
      y: number = 0;
      length: number = 0;
      speed: number = 0;
      angle: number = 0;
      opacity: number = 0;
      life: number = 0;
      maxLife: number = 0;

      constructor() {
        if (!canvas) return;
        this.reset();
      }

      reset() {
        if (!canvas) return;
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height / 2; // Upper half
        this.length = 50 + Math.random() * 80;
        this.speed = 5 + Math.random() * 10;
        this.angle = Math.PI / 4; // 45 degrees
        this.opacity = 1;
        this.life = 0;
        this.maxLife = 100 + Math.random() * 100;
      }

      update() {
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;
        this.life++;
        this.opacity = 1 - (this.life / this.maxLife);
        
        if (!canvas) return;
        if (this.life > this.maxLife || this.x > canvas.width || this.y > canvas.height) {
          this.reset();
        }
      }

      draw() {
        if (!ctx) return;
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        
        const gradient = ctx.createLinearGradient(0, 0, -this.length, 0);
        gradient.addColorStop(0, `rgba(255, 255, 255, ${this.opacity})`);
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(-this.length, 0);
        ctx.stroke();
        
        ctx.restore();
      }
    }

    // Distant planets/celestial bodies
    class DistantPlanet {
      x: number = 0;
      y: number = 0;
      size: number = 0;
      color: string = '';
      glowColor: string = '';

      constructor() {
        if (!canvas) return;
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = 3 + Math.random() * 8;
        
        const colors = [
          { main: '#4a90e2', glow: 'rgba(74, 144, 226, 0.5)' },
          { main: '#e24a90', glow: 'rgba(226, 74, 144, 0.5)' },
          { main: '#90e24a', glow: 'rgba(144, 226, 74, 0.5)' },
          { main: '#e2904a', glow: 'rgba(226, 144, 74, 0.5)' },
        ];
        const color = colors[Math.floor(Math.random() * colors.length)];
        this.color = color.main;
        this.glowColor = color.glow;
      }

      draw() {
        if (!ctx) return;
        // Glow
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size * 2);
        gradient.addColorStop(0, this.glowColor);
        gradient.addColorStop(1, 'transparent');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 2, 0, Math.PI * 2);
        ctx.fill();
        
        // Planet
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const stars: Star[] = [];
    const shootingStars: ShootingStar[] = [];
    const distantPlanets: DistantPlanet[] = [];
    
    const starCount = 200;
    const shootingStarCount = 3;
    const planetCount = 5;

    for (let i = 0; i < starCount; i++) {
      stars.push(new Star());
    }

    for (let i = 0; i < shootingStarCount; i++) {
      shootingStars.push(new ShootingStar());
    }

    for (let i = 0; i < planetCount; i++) {
      distantPlanets.push(new DistantPlanet());
    }

    let animationId: number;

    const animate = () => {
      // Semi-transparent black for trail effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw distant planets (behind everything)
      distantPlanets.forEach(planet => planet.draw());

      // Draw and update stars
      stars.forEach(star => {
        star.update();
        star.draw();
      });

      // Draw and update shooting stars
      shootingStars.forEach(star => {
        star.update();
        star.draw();
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
      />
      {/* Nebula glows */}
      <div 
        className="nebula-glow"
        style={{
          top: '10%',
          left: '20%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, #8b4fb3, transparent)',
        }}
      />
      <div 
        className="nebula-glow"
        style={{
          top: '60%',
          right: '15%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, #4fb3d9, transparent)',
        }}
      />
    </>
  );
}
