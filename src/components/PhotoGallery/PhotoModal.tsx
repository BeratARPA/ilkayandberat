import React from 'react';
import { X } from 'lucide-react';

interface PhotoModalProps {
  url: string;
  caption: string;
  date: string;
  onClose: () => void;
}

export function PhotoModal({ url, caption, date, onClose }: PhotoModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
         onClick={onClose}>
      <div className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl"
           onClick={e => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white/80 rounded-full hover:bg-white transition-colors"
          aria-label="Kapat"
        >
          <X className="w-6 h-6" />
        </button>
        
        <img
          src={url}
          alt={caption}
          className="w-full h-[70vh] object-cover"
        />
        
        <div className="p-6 bg-white">
          <h3 className="text-2xl font-semibold mb-2">{caption}</h3>
          <p className="text-gray-600">{date}</p>
        </div>
      </div>
    </div>
  );
}