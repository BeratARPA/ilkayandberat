import React from 'react';
import { Gift } from 'lucide-react';

interface SantaProps {
  position: { x: number; y: number };
}

export function Santa({ position }: SantaProps) {
  return (
    <div 
      className="fixed z-50 transition-all duration-300"
      style={{ 
        left: `${position.x}px`, 
        top: `${position.y}px` 
      }}
    >
      <img 
        src="https://images.unsplash.com/photo-1577083288073-40892c0860a4?w=100" 
        alt="Santa Sleigh"
        className="w-24 h-24 object-contain transform -scale-x-100"
      />
    </div>
  );
}