import React from 'react';
import { Heart, Stars } from 'lucide-react';
import { SantaController } from '../SantaAnimation/SantaController';

export function Title() {
  const { animate, Santa, Gifts } = SantaController();

  return (
    <div className="relative">
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-red-100 rounded-full blur-3xl opacity-30 animate-pulse" />
      
      <h1 
        className="text-6xl font-bold text-red-600 mb-6 animate-fadeIn relative cursor-pointer"
        onClick={animate}
      >
        <span className="relative">
          <Heart className="absolute -top-8 -left-8 w-6 h-6 text-pink-400 animate-bounce" />
          İlkay
        </span>
        <span className="mx-4">&</span>
        <span className="relative">
          Berat
          <Heart className="absolute -top-8 -right-8 w-6 h-6 text-pink-400 animate-bounce" />
        </span>
      </h1>

      <div className="flex items-center justify-center gap-3">
        <Stars className="w-8 h-8 text-yellow-400 animate-spin-slow" />
        <p className="text-2xl text-gray-700 font-light tracking-wide">
          Mutlu Yıllar 2025
        </p>
        <Stars className="w-8 h-8 text-yellow-400 animate-spin-slow" />
      </div>

      {Santa}
      {Gifts}
    </div>
  );
}