import { LuArrowUpRight } from "react-icons/lu";
import { useEffect, useRef } from "react";

export default function Home() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 100;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.size > 0.2) this.size -= 0.01;

        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
      }

      draw() {
        ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle, index) => {
        particle.update();
        particle.draw();
        if (particle.size <= 0.2) {
          particles.splice(index, 1);
          particles.push(new Particle());
        }
      });
      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative h-screen w-screen flex flex-col justify-center items-center overflow-hidden bg-gradient-to-t from-gray-900 via-slate-900 to-black">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      <div className="relative z-10 flex flex-col justify-center items-center max-w-lg mx-4 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400 mb-6 animate-pulse">
          Create Stunning Buttons for Your Projects
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          Elevate your website with custom, responsive, and eye-catching buttons designed to impress.
        </p>
        <button className="group relative py-3 px-8 rounded-full font-bold text-white bg-gradient-to-r from-blue-500 to-green-500 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300/50">
          <div className="flex items-center gap-3">
            <span className="relative z-10 text-lg">Start Designing Now</span>
            <LuArrowUpRight className="relative z-10 text-2xl transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-blue-400 to-green-400 opacity-75 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
          </div>
        </button>
      </div>
    </div>
  );
}