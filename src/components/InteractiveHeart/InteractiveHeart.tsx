import React, { useState } from 'react';
import { Heart } from 'lucide-react';

export function InteractiveHeart() {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 1000);
  };

  return (
    <button
      onClick={handleClick}
      className={`transition-all duration-300 transform ${
        isAnimating ? 'scale-150' : 'hover:scale-110'
      }`}
      aria-label="Kalp"
    >
      <Heart 
        className={`w-12 h-12 text-red-500 ${
          isAnimating ? 'fill-current animate-pulse' : ''
        }`}
      />
    </button>
  );
}