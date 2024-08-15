import { useEffect } from 'react';

const HyperspaceTransition = () => {
  useEffect(() => {
    const canvas = document.getElementById('hyperspace-canvas');
    const ctx = canvas.getContext('2d');
    let stars = [];
    let animationFrameId;

    const initCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      ctx.lineWidth = 2;

      for (let i = 0; i < 100; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          z: Math.random() * canvas.width,
        });
      }
    };

    const animate = () => {
      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.strokeStyle = '#FFF';
      stars.forEach((star) => {
        star.z -= 2;
        if (star.z <= 0) star.z = canvas.width;

        const x = (star.x - canvas.width / 2) * (canvas.width / star.z);
        const y = (star.y - canvas.height / 2) * (canvas.width / star.z);
        const r = canvas.width / star.z;

        ctx.beginPath();
        ctx.arc(x + canvas.width / 2, y + canvas.height / 2, r, 0, Math.PI * 2);
        ctx.stroke();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    initCanvas();
    animate();

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return <canvas id="hyperspace-canvas"></canvas>;
};

export default HyperspaceTransition;
