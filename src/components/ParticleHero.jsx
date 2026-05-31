import { useEffect, useRef } from "react";

function ParticleHero() {
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const canvas = canvasRef.current;
    if (!section || !canvas) return undefined;

    const context = canvas.getContext("2d", { alpha: true });
    const pointer = {
      active: false,
      x: 0,
      y: 0,
    };

    let animationFrame = 0;
    let particles = [];
    let width = 0;
    let height = 0;
    let pixelRatio = 1;
    let isMobile = window.matchMedia("(max-width: 768px)").matches;

    function sampleShapePoints(offscreen, offsetX, offsetY, sampleGap, kind) {
      const offscreenContext = offscreen.getContext("2d", { willReadFrequently: true });
      const imageData = offscreenContext.getImageData(0, 0, offscreen.width, offscreen.height).data;
      const points = [];

      for (let y = 0; y < offscreen.height; y += sampleGap) {
        for (let x = 0; x < offscreen.width; x += sampleGap) {
          const alpha = imageData[(y * offscreen.width + x) * 4 + 3];
          if (alpha > 44) {
            points.push({
              x: offsetX + x,
              y: offsetY + y,
              kind,
            });
          }
        }
      }

      return points;
    }

    function createTitlePoints(nextWidth, nextHeight, sampleGap) {
      const offscreen = document.createElement("canvas");
      const offscreenContext = offscreen.getContext("2d", { willReadFrequently: true });
      const textWidth = Math.min(nextWidth * 0.82, 960);
      const textHeight = Math.min(nextHeight * 0.28, 230);

      offscreen.width = Math.max(320, Math.floor(textWidth));
      offscreen.height = Math.max(120, Math.floor(textHeight));

      const fontSize = Math.floor(offscreen.width / 5.1);
      offscreenContext.clearRect(0, 0, offscreen.width, offscreen.height);
      offscreenContext.font = `800 ${fontSize}px Inter, system-ui, sans-serif`;
      offscreenContext.textAlign = "center";
      offscreenContext.textBaseline = "middle";
      offscreenContext.fillStyle = "#ffffff";
      offscreenContext.fillText("PRYZON", offscreen.width / 2, offscreen.height / 2);

      const offsetX = (nextWidth - offscreen.width) / 2;
      const offsetY = nextHeight * 0.43 - offscreen.height / 2;
      return sampleShapePoints(offscreen, offsetX, offsetY, sampleGap, "title");
    }

    function createArrowPoints(nextWidth, nextHeight, sampleGap) {
      const offscreen = document.createElement("canvas");
      const offscreenContext = offscreen.getContext("2d", { willReadFrequently: true });
      const arrowSize = Math.min(nextWidth * 0.12, nextHeight * 0.13, 90);

      offscreen.width = Math.max(54, Math.floor(arrowSize));
      offscreen.height = Math.max(54, Math.floor(arrowSize));

      const centerX = offscreen.width / 2;
      const top = offscreen.height * 0.16;
      const pointY = offscreen.height * 0.78;
      const shoulderY = offscreen.height * 0.56;
      const spread = offscreen.width * 0.22;

      offscreenContext.clearRect(0, 0, offscreen.width, offscreen.height);
      offscreenContext.strokeStyle = "#ffffff";
      offscreenContext.lineWidth = Math.max(2.5, offscreen.width * 0.045);
      offscreenContext.lineCap = "round";
      offscreenContext.lineJoin = "round";
      offscreenContext.beginPath();
      offscreenContext.moveTo(centerX, top);
      offscreenContext.lineTo(centerX, pointY);
      offscreenContext.moveTo(centerX - spread, shoulderY);
      offscreenContext.lineTo(centerX, pointY);
      offscreenContext.lineTo(centerX + spread, shoulderY);
      offscreenContext.stroke();

      const offsetX = (nextWidth - offscreen.width) / 2;
      const offsetY = nextHeight * 0.63 - offscreen.height / 2;
      return sampleShapePoints(offscreen, offsetX, offsetY, sampleGap, "arrow");
    }

    function createParticles() {
      const titlePoints = createTitlePoints(width, height, isMobile ? 5 : 8);
      const arrowPoints = createArrowPoints(width, height, isMobile ? 5 : 4);
      const targetTitleCount = isMobile ? 1250 : 1450;
      const titleStep = Math.max(1, Math.ceil(titlePoints.length / targetTitleCount));
      const chosenTitlePoints = titlePoints.filter((_, index) => index % titleStep === 0);
      const chosenArrowPoints = arrowPoints;
      const ambientCount = Math.floor((width * height) / (isMobile ? 5600 : 3100));
      const nextParticles = [];

      for (const point of chosenTitlePoints) {
        nextParticles.push(makeParticle(point.x, point.y, point.kind));
      }

      for (const point of chosenArrowPoints) {
        nextParticles.push(makeParticle(point.x, point.y, point.kind));
      }

      for (let index = 0; index < ambientCount; index += 1) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        nextParticles.push(makeParticle(x, y, "ambient"));
      }

      particles = nextParticles;
    }

    function makeParticle(x, y, kind) {
      const isShapeParticle = kind !== "ambient";
      const isArrowParticle = kind === "arrow";
      const introSpread = isMobile && isShapeParticle ? 14 : 46;

      return {
        baseX: x,
        baseY: y,
        x: x + (Math.random() - 0.5) * introSpread,
        y: y + (Math.random() - 0.5) * introSpread,
        vx: 0,
        vy: 0,
        size: isArrowParticle ? 1 + Math.random() * 0.85 : isShapeParticle ? (isMobile ? 1.7 + Math.random() * 1.2 : 1.45 + Math.random() * 1.55) : 0.75 + Math.random() * 1.45,
        alpha: isArrowParticle ? 0.8 + Math.random() * 0.18 : isShapeParticle ? (isMobile ? 0.95 + Math.random() * 0.05 : 0.88 + Math.random() * 0.12) : 0.18 + Math.random() * 0.34,
        hue: Math.random() > 0.68 ? 156 : 188,
        drift: Math.random() * Math.PI * 2,
        text: isShapeParticle,
      };
    }

    function resize() {
      const bounds = section.getBoundingClientRect();
      width = Math.max(320, Math.floor(bounds.width));
      height = Math.max(420, Math.floor(bounds.height));
      pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      isMobile = window.matchMedia("(max-width: 768px)").matches;

      canvas.width = Math.floor(width * pixelRatio);
      canvas.height = Math.floor(height * pixelRatio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      createParticles();
    }

    function drawBackground(time) {
      const gradient = context.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, "#000000");
      gradient.addColorStop(0.48, "#02080d");
      gradient.addColorStop(1, "#031115");
      context.fillStyle = gradient;
      context.fillRect(0, 0, width, height);

      context.save();
      context.globalAlpha = 0.22;
      context.strokeStyle = "rgba(103, 232, 249, 0.16)";
      context.lineWidth = 1;

      const gridSize = isMobile ? 58 : 72;
      const offset = (time * 0.012) % gridSize;
      for (let x = -gridSize + offset; x < width + gridSize; x += gridSize) {
        context.beginPath();
        context.moveTo(x, 0);
        context.lineTo(x + height * 0.24, height);
        context.stroke();
      }
      for (let y = offset; y < height; y += gridSize) {
        context.beginPath();
        context.moveTo(0, y);
        context.lineTo(width, y + width * 0.035);
        context.stroke();
      }
      context.restore();
    }

    function drawParticleNetwork() {
      context.save();
      context.globalCompositeOperation = "screen";
      context.lineWidth = 0.7;

      for (let index = 0; index < particles.length; index += 19) {
        const current = particles[index];
        const next = particles[(index + 37) % particles.length];
        if (!current || !next) continue;

        const distance = Math.hypot(current.x - next.x, current.y - next.y);
        if (distance > (current.text ? 80 : 135)) continue;

        context.globalAlpha = current.text ? 0.14 : 0.08;
        context.strokeStyle = current.hue === 156 ? "rgba(110, 231, 183, 0.72)" : "rgba(103, 232, 249, 0.72)";
        context.beginPath();
        context.moveTo(current.x, current.y);
        context.lineTo(next.x, next.y);
        context.stroke();
      }

      context.restore();
    }

    function updateAndDrawParticles(time) {
      const interactionRadius = isMobile ? 0 : 48;

      context.save();
      context.globalCompositeOperation = "screen";

      for (const particle of particles) {
        const driftX = Math.cos(time * 0.001 + particle.drift) * (particle.text ? 0.05 : 0.13);
        const driftY = Math.sin(time * 0.0012 + particle.drift) * (particle.text ? 0.05 : 0.13);

        particle.vx += (particle.baseX - particle.x) * (particle.text ? (isMobile ? 0.034 : 0.017) : 0.006);
        particle.vy += (particle.baseY - particle.y) * (particle.text ? (isMobile ? 0.034 : 0.017) : 0.006);
        particle.vx += driftX;
        particle.vy += driftY;

        let glow = 0;
        if (pointer.active && interactionRadius > 0) {
          const dx = particle.x - pointer.x;
          const dy = particle.y - pointer.y;
          const distance = Math.max(1, Math.hypot(dx, dy));

          if (distance < interactionRadius) {
            const force = (1 - distance / interactionRadius) ** 2;
            particle.vx += (dx / distance) * force * 4.5;
            particle.vy += (dy / distance) * force * 4.5;
            glow = force;
          }
        }

        particle.vx *= 0.88;
        particle.vy *= 0.88;
        particle.x += particle.vx;
        particle.y += particle.vy;

        const alpha = Math.min(1, particle.alpha + glow * 0.58);
        const size = particle.size + glow * 2.2;
        const saturation = particle.text ? 96 : 78;
        const lightness = particle.text ? 74 : 56;

        context.globalAlpha = alpha;
        context.fillStyle = `hsl(${particle.hue} ${saturation}% ${lightness}%)`;
        context.beginPath();
        context.arc(particle.x, particle.y, size, 0, Math.PI * 2);
        context.fill();
      }

      context.restore();
    }

    function drawPointerGlow() {
      if (!pointer.active || isMobile) return;

      const glow = context.createRadialGradient(pointer.x, pointer.y, 0, pointer.x, pointer.y, 64);
      glow.addColorStop(0, "rgba(103, 232, 249, 0.16)");
      glow.addColorStop(0.36, "rgba(110, 231, 183, 0.07)");
      glow.addColorStop(1, "rgba(0, 0, 0, 0)");

      context.save();
      context.globalCompositeOperation = "screen";
      context.fillStyle = glow;
      context.fillRect(pointer.x - 64, pointer.y - 64, 128, 128);
      context.restore();
    }

    function animate(time) {
      drawBackground(time);
      drawPointerGlow();
      updateAndDrawParticles(time);
      drawParticleNetwork();
      animationFrame = window.requestAnimationFrame(animate);
    }

    function handlePointerMove(event) {
      const bounds = section.getBoundingClientRect();
      pointer.active = !isMobile;
      pointer.x = event.clientX - bounds.left;
      pointer.y = event.clientY - bounds.top;
    }

    function handlePointerLeave() {
      pointer.active = false;
    }

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(section);
    window.addEventListener("resize", resize);
    section.addEventListener("pointermove", handlePointerMove);
    section.addEventListener("pointerleave", handlePointerLeave);

    resize();
    animationFrame = window.requestAnimationFrame(animate);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
      window.removeEventListener("resize", resize);
      section.removeEventListener("pointermove", handlePointerMove);
      section.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="particle-hero relative isolate grid min-h-[82vh] place-items-center overflow-hidden bg-black px-5"
    >
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden="true" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08),rgba(0,0,0,0.32))]" />
      <a
        href="#services"
        aria-label="Scroll to services"
        className="particle-arrow-hitbox absolute left-1/2 top-[63%] z-10 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
      />
    </section>
  );
}

export default ParticleHero;
