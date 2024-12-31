import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import { PhotoModal } from './PhotoModal';

interface PhotoCardProps {
  url: string;
  caption: string;
  date: string;
}

export function PhotoCard({ url, caption, date }: PhotoCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div 
        className="group relative overflow-hidden rounded-xl shadow-xl cursor-pointer"
        onClick={() => setIsModalOpen(true)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={url}
          alt={caption}
          className={`w-full h-80 object-cover transition-transform duration-500 ${
            isHovered ? 'scale-110' : ''
          }`}
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent 
          transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <div className="absolute bottom-6 left-6 right-6">
            <p className="text-white font-semibold text-xl mb-2">{caption}</p>
            <div className="flex items-center gap-2 text-pink-300">
              <Heart className="w-4 h-4 fill-current animate-pulse-slow" />
              <p className="text-sm">{date}</p>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <PhotoModal
          url={url}
          caption={caption}
          date={date}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
}