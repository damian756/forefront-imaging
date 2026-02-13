'use client';

import { useEffect, useRef } from 'react';

export default function CircuitBackground() {
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

    // Circuit board grid
    const drawGrid = () => {
      ctx.strokeStyle = 'rgba(0, 255, 136, 0.05)';
      ctx.lineWidth = 1;

      for (let x = 0; x < canvas.width; x += 20) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      for (let y = 0; y < canvas.height; y += 20) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
    };

    // Draw circuit traces
    class CircuitTrace {
      x: number = 0;
      y: number = 0;
      endX: number = 0;
      endY: number = 0;
      progress: number = 0;
      speed: number = 0;
      color: string = '#00ff88';

      constructor() {
        if (!canvas) return;
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.endX = this.x + (Math.random() - 0.5) * 300;
        this.endY = this.y + (Math.random() - 0.5) * 300;
        this.speed = 0.005 + Math.random() * 0.01;
        this.color = Math.random() > 0.5 ? '#00ff88' : '#ff9500';
      }

      update() {
        if (!canvas) return;
        this.progress += this.speed;
        if (this.progress >= 1) {
          this.progress = 0;
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
          this.endX = this.x + (Math.random() - 0.5) * 300;
          this.endY = this.y + (Math.random() - 0.5) * 300;
        }
      }

      draw() {
        if (!ctx) return;
        const currentX = this.x + (this.endX - this.x) * this.progress;
        const currentY = this.y + (this.endY - this.y) * this.progress;

        // Draw trace
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(currentX, currentY);
        ctx.stroke();

        // Draw connection nodes
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = this.color;
        
        ctx.beginPath();
        ctx.arc(this.x, this.y, 3, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.arc(currentX, currentY, 4, 0, Math.PI * 2);
        ctx.fill();

        ctx.shadowBlur = 0;
      }
    }

    const traces: CircuitTrace[] = [];
    const traceCount = 15;

    for (let i = 0; i < traceCount; i++) {
      traces.push(new CircuitTrace());
    }

    let animationId: number;

    const animate = () => {
      ctx.fillStyle = 'rgba(8, 10, 12, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      drawGrid();

      traces.forEach(trace => {
        trace.update();
        trace.draw();
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
