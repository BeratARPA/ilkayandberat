import React from 'react';
import { Gift as GiftIcon } from 'lucide-react';

interface GiftProps {
  id: number;
  position: { x: number; y: number };
}

export function Gift({ position }: GiftProps) {
  return (
    <div 
      className="absolute animate-gift"
      style={{ 
        left: `${position.x}px`, 
        top: `${position.y}px` 
      }}
    >
      <GiftIcon className="w-8 h-8 text-red-500" />
    </div>
  );
}