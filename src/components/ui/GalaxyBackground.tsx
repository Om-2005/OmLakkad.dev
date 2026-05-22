"use client";

import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";

interface Star {
  x: number;
  y: number;
  size: number;
  alpha: number;
  twinkleSpeed: number;
  color: string;
  angle: number;
  distance: number;
  speed: number;
}

interface ShootingStar {
  x: number;
  y: number;
  dx: number;
  dy: number;
  length: number;
  speed: number;
  alpha: number;
  color: string;
}

interface Moon {
  baseX: number;   // resting X (top-right area)
  baseY: number;   // resting Y
  radius: number;
  // current smoothed position (lerped toward mouse target)
  currentX: number;
  currentY: number;
}

export function GalaxyBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { resolvedTheme } = useTheme();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let stars: Star[] = [];
    let shootingStars: ShootingStar[] = [];
    let lastShootingStarTime = 0;

    // Mouse tracking
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener("mousemove", onMouseMove);

    // Moon state — positioned top-right
    const moon: Moon = {
      baseX: 0,
      baseY: 0,
      radius: 50,
      currentX: 0,
      currentY: 0,
    };

    const isLight = resolvedTheme === "light";

    const colors = isLight ? [
      "rgba(100, 100, 100, ",
      "rgba(59, 130, 246, ",
      "rgba(139, 92, 246, ",
      "rgba(14, 165, 233, ",
    ] : [
      "rgba(255, 255, 255, ",
      "rgba(147, 197, 253, ",
      "rgba(196, 181, 253, ",
      "rgba(165, 243, 252, ",
    ];

    let lastWidth = 0;

    const resizeCanvas = () => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;

      canvas.width = newWidth;
      canvas.height = newHeight;
      // Keep moon fully visible: pad by radius + parallax max-shift (≈20px) from every edge
      const pad = moon.radius + 24;
      moon.baseX = canvas.width - pad;   // hug the right edge
      moon.baseY = pad;                  // hug the top edge
      moon.currentX = moon.baseX;
      moon.currentY = moon.baseY;
      
      // Prevent re-initializing stars on mobile scroll (where only height changes slightly due to URL bar)
      if (lastWidth !== newWidth) {
        initStars();
        lastWidth = newWidth;
      }
    };

    const initStars = () => {
      stars = [];
      const numStars = Math.floor((canvas.width * canvas.height) / 4500);
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const maxDistance = Math.sqrt(centerX * centerX + centerY * centerY);

      for (let i = 0; i < numStars; i++) {
        const distance = Math.random() * maxDistance;
        const angle = Math.random() * Math.PI * 2;
        const color = colors[Math.floor(Math.random() * colors.length)];
        stars.push({
          x: centerX + Math.cos(angle) * distance,
          y: centerY + Math.sin(angle) * distance,
          size: Math.random() * 1.2 + 0.3,
          alpha: Math.random(),
          twinkleSpeed: Math.random() * 0.015 + 0.005,
          color,
          angle,
          distance,
          speed:
            (Math.random() * 0.00015 + 0.00005) *
            (1 - (distance / maxDistance) * 0.5),
        });
      }
    };

    const createShootingStar = () => {
      const angle = Math.random() * Math.PI * 0.2 + Math.PI * 0.8;
      const speed = Math.random() * 10 + 8;
      shootingStars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * (canvas.height * 0.4),
        dx: Math.cos(angle) * speed,
        dy: Math.sin(angle) * speed,
        length: Math.random() * 60 + 30,
        speed,
        alpha: 1,
        color: isLight ? "rgba(100, 100, 100, " : "rgba(255, 255, 255, ",
      });
    };

    // ── Draw realistic moon with craters ─────────────────────────────────────
    const drawMoon = (x: number, y: number, r: number) => {
      // Outer atmospheric glow
      const atmosGlow = ctx.createRadialGradient(x, y, r * 0.9, x, y, r * 1.6);
      atmosGlow.addColorStop(0, "rgba(200, 215, 255, 0.07)");
      atmosGlow.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.beginPath();
      ctx.arc(x, y, r * 1.6, 0, Math.PI * 2);
      ctx.fillStyle = atmosGlow;
      ctx.fill();

      // Moon surface gradient (slightly off-centre light source)
      const surfaceGrad = ctx.createRadialGradient(
        x - r * 0.25, y - r * 0.25, r * 0.05,
        x, y, r
      );
      surfaceGrad.addColorStop(0, "rgba(240, 243, 255, 0.92)");
      surfaceGrad.addColorStop(0.45, "rgba(190, 200, 225, 0.80)");
      surfaceGrad.addColorStop(0.85, "rgba(130, 145, 175, 0.70)");
      surfaceGrad.addColorStop(1, "rgba(60, 70, 100, 0.55)");

      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fillStyle = surfaceGrad;
      ctx.fill();

      // Shadow side (dark overlay to give crescent depth)
      const shadowGrad = ctx.createRadialGradient(
        x + r * 0.3, y + r * 0.1, r * 0.1,
        x + r * 0.2, y, r * 1.1
      );
      shadowGrad.addColorStop(0, "rgba(5, 5, 15, 0.0)");
      shadowGrad.addColorStop(0.6, "rgba(5, 5, 15, 0.25)");
      shadowGrad.addColorStop(1, "rgba(5, 5, 15, 0.60)");

      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fillStyle = shadowGrad;
      ctx.fill();

      // Craters
      const craters = [
        { ox: -0.25, oy: -0.20, size: 0.14 },
        { ox: 0.20, oy: 0.10, size: 0.10 },
        { ox: -0.10, oy: 0.32, size: 0.08 },
        { ox: 0.30, oy: -0.30, size: 0.07 },
        { ox: -0.35, oy: 0.10, size: 0.06 },
        { ox: 0.05, oy: -0.10, size: 0.05 },
      ];

      craters.forEach((c) => {
        const cx = x + c.ox * r;
        const cy = y + c.oy * r;
        const cr = c.size * r;
        // Skip craters that fall in the dark shadow region
        if (c.ox > 0.35) return;

        const craterGrad = ctx.createRadialGradient(
          cx - cr * 0.3, cy - cr * 0.3, 0,
          cx, cy, cr
        );
        craterGrad.addColorStop(0, "rgba(100, 110, 140, 0.55)");
        craterGrad.addColorStop(0.7, "rgba(80, 90, 120, 0.30)");
        craterGrad.addColorStop(1, "rgba(200, 210, 240, 0.15)");

        ctx.beginPath();
        ctx.arc(cx, cy, cr, 0, Math.PI * 2);
        ctx.fillStyle = craterGrad;
        ctx.fill();
      });
    };

    const drawSun = (x: number, y: number, r: number) => {
      // Massive Outer Glow covering the page
      const maxGlow = Math.max(canvas.width, canvas.height);
      const glow = ctx.createRadialGradient(x, y, r * 0.5, x, y, maxGlow);
      glow.addColorStop(0, "rgba(255, 210, 80, 0.3)");
      glow.addColorStop(0.2, "rgba(255, 210, 80, 0.1)");
      glow.addColorStop(0.6, "rgba(255, 220, 120, 0.03)");
      glow.addColorStop(1, "rgba(255, 230, 150, 0)");
      ctx.beginPath();
      ctx.arc(x, y, maxGlow, 0, Math.PI * 2);
      ctx.fillStyle = glow;
      ctx.fill();

      // Sun core (White color reduced by 50%)
      const core = ctx.createRadialGradient(x, y, 0, x, y, r);
      core.addColorStop(0, "rgba(255, 255, 255, 0.5)");
      core.addColorStop(0.4, "rgba(255, 235, 130, 0.9)");
      core.addColorStop(1, "rgba(255, 190, 40, 0.85)");
      
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fillStyle = core;
      ctx.fill();
    };
    // ─────────────────────────────────────────────────────────────────────────

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // Optional: fill background if the canvas CSS bg isn't enough, 
      // but CSS has bg-background so we don't necessarily need it.
      // Let's draw it anyway for compositing blending
      ctx.fillStyle = isLight ? "rgba(250, 250, 255, 1)" : "rgba(5, 5, 8, 1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      // ── Parallax moon ─────────────────────────────────────────────────────
      // Target = basePosition + small offset opposite to mouse (depth illusion)
      const parallaxStrength = 0.03; // adjust 0.01 (subtle) → 0.08 (strong)
      const targetX =
        moon.baseX + (mouseX - canvas.width / 2) * -parallaxStrength;
      const targetY =
        moon.baseY + (mouseY - canvas.height / 2) * -parallaxStrength;

      // Smooth lerp toward target (feels physically heavy / floaty)
      moon.currentX += (targetX - moon.currentX) * 0.04;
      moon.currentY += (targetY - moon.currentY) * 0.04;

      if (isLight) {
        drawSun(moon.currentX, moon.currentY, moon.radius * 0.85); // Sun slightly smaller visually
      } else {
        drawMoon(moon.currentX, moon.currentY, moon.radius);
      }
      // ─────────────────────────────────────────────────────────────────────

      // Galaxy stars
      stars.forEach((star) => {
        star.angle += star.speed;
        star.x = centerX + Math.cos(star.angle) * star.distance;
        star.y = centerY + Math.sin(star.angle) * star.distance;
        star.alpha += star.twinkleSpeed;
        if (star.alpha > 1 || star.alpha < 0.15) star.twinkleSpeed = -star.twinkleSpeed;
        ctx.fillStyle = `${star.color}${star.alpha})`;
        // Using fillRect instead of arc for massive performance boost on mobile
        ctx.fillRect(star.x - star.size / 2, star.y - star.size / 2, star.size, star.size);
      });

      // Shooting stars
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const ss = shootingStars[i];
        ctx.strokeStyle = `${ss.color}${ss.alpha})`;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(ss.x, ss.y);
        ctx.lineTo(
          ss.x - ss.dx * (ss.length / ss.speed),
          ss.y - ss.dy * (ss.length / ss.speed)
        );
        ctx.stroke();
        ss.x += ss.dx;
        ss.y += ss.dy;
        ss.alpha -= 0.025;
        if (ss.alpha <= 0 || ss.x < -100 || ss.x > canvas.width + 100 || ss.y > canvas.height + 100) {
          shootingStars.splice(i, 1);
        }
      }

      const now = Date.now();
      if (now - lastShootingStarTime > 2000 && Math.random() < 0.02 && shootingStars.length < 1) {
        createShootingStar();
        lastShootingStarTime = now;
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    draw();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [resolvedTheme, isMobile]);

  if (isMobile) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-[-2] bg-background"
    />
  );
}
