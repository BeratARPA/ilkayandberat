import React, { useState } from 'react';
import { Heart, MessageCircle } from 'lucide-react';

export function LoveMessage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-red-500 p-4 rounded-full shadow-lg hover:bg-red-600 transition-colors"
        aria-label={isOpen ? 'Mesajı Kapat' : 'Aşk Mesajını Aç'}
      >
        {isOpen ? (
          <MessageCircle className="w-6 h-6 text-white" />
        ) : (
          <Heart className="w-6 h-6 text-white animate-pulse-slow" />
        )}
      </button>

      {isOpen && (
        <div className="absolute bottom-full right-0 mb-4 w-72 bg-white rounded-lg shadow-xl p-4 transform transition-all">
          <p className="text-gray-800 mb-2">
            Sevgili İlkay,
          </p>
          <p className="text-gray-600 text-sm">
            Her anımızı değerli kılan varlığın için teşekkür ederim. 
            2025'e girerken seninle olmak en büyük mutluluğum.
          </p>
          <div className="mt-3 text-right text-red-500 font-semibold">
            - Berat
          </div>
        </div>
      )}
    </div>
  );
}