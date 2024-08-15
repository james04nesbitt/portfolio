import React, { useState, useEffect } from 'react';
import './PixelTransition.css';

interface PixelTransitionProps {
  onTransitionComplete: () => void;
}

const PixelTransition: React.FC<PixelTransitionProps> = ({ onTransitionComplete }) => {
  const [pixels, setPixels] = useState<boolean[][]>([]);

  useEffect(() => {
    const rows = Math.ceil(window.innerHeight / 10);
    const cols = Math.ceil(window.innerWidth / 10);
    const initialPixels = Array(rows).fill(null).map(() => Array(cols).fill(true));
    setPixels(initialPixels);

    const interval = setInterval(() => {
      setPixels((prevPixels) => {
        const newPixels = prevPixels.map(row => [...row]);
        const flatPixels = newPixels.flat();
        const remainingPixels = flatPixels.filter(pixel => pixel).length;

        if (remainingPixels === 0) {
          clearInterval(interval);
          setTimeout(onTransitionComplete, 500);
          return prevPixels;
        }

        const pixelToRemove = Math.floor(Math.random() * remainingPixels);
        let count = 0;

        for (let i = 0; i < newPixels.length; i++) {
          for (let j = 0; j < newPixels[i].length; j++) {
            if (newPixels[i][j]) {
              if (count === pixelToRemove) {
                newPixels[i][j] = false;
                return newPixels;
              }
              count++;
            }
          }
        }

        return newPixels;
      });
    }, 10);

    return () => clearInterval(interval);
  }, [onTransitionComplete]);

  return (
    <div className="pixel-transition">
      {pixels.map((row, i) => (
        <div key={i} className="pixel-row">
          {row.map((pixel, j) => (
            <div key={`${i}-${j}`} className={`pixel ${pixel ? 'active' : ''}`} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default PixelTransition;