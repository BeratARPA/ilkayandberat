import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

export function FloatingHearts() {
  const [hearts, setHearts] = useState<{ id: number; x: number; y: number }[]>([]);

  const createHeart = (x: number, y: number) => {
    const newHeart = {
      id: Date.now(),
      x: x - 10,
      y: y - 10,
    };
    setHearts(prev => [...prev, newHeart]);
    setTimeout(() => {
      setHearts(prev => prev.filter(heart => heart.id !== newHeart.id));
    }, 2000);
  };

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      createHeart(e.clientX, e.clientY);
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {hearts.map(heart => (
        <div
          key={heart.id}
          className="absolute animate-float"
          style={{
            left: `${heart.x}px`,
            top: `${heart.y}px`,
          }}
        >
          <Heart className="w-5 h-5 text-red-500 fill-current" />
        </div>
      ))}
    </div>
  );
}