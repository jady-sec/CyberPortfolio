import { useEffect, useRef } from "react";

const TOP = [14, 124, 134];
const DEEP = [4, 16, 38];

export default function Water() {
  const waterRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const updateColor = () => {
      const depth = window.scrollY / Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const color = TOP.map((value, i) => Math.round(value + (DEEP[i] - value) * Math.min(1, depth)));
      if (waterRef.current) waterRef.current.style.backgroundColor = `rgb(${color.join(",")})`;
    };

    updateColor();
    window.addEventListener("scroll", updateColor, { passive: true });
    window.addEventListener("resize", updateColor);

    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    // With reduced motion the particles are drawn once and never move
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;

    const particles = Array.from({ length: window.innerWidth < 768 ? 24 : 60 }, () => ({
      x: Math.random(),
      y: Math.random(),
      fall: 0.00015 + Math.random() * 0.0004,
      // Nearer particles pass faster as the visitor scrolls down
      parallax: 0.1 + Math.random() * 0.25,
      radius: 0.5 + Math.random() * 1.2,
    }));

    const draw = () => {
      if (!canvas || !context) return;
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.fillStyle = "rgba(255, 255, 255, 0.35)";
      for (const p of particles) {
        if (!still) p.y = (p.y + p.fall) % 1;
        const y = (p.y * canvas.height - (still ? 0 : window.scrollY * p.parallax)) % canvas.height;
        context.beginPath();
        context.arc(p.x * canvas.width, y < 0 ? y + canvas.height : y, p.radius, 0, Math.PI * 2);
        context.fill();
      }
      if (!still) frame = requestAnimationFrame(draw);
    };

    const resize = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      if (still) draw();
    };

    resize();
    window.addEventListener("resize", resize);
    if (!still) draw();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", updateColor);
      window.removeEventListener("resize", updateColor);
    };
  }, []);

  return (
    <div ref={waterRef} className="water" aria-hidden="true">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
}
