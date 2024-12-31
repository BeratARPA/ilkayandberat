import React, { useState } from 'react';
import { Music, Pause, Play } from 'lucide-react';

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed top-6 right-6 z-40">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="bg-white/80 p-3 rounded-full shadow-lg hover:bg-white transition-all"
        aria-label="Müzik Kontrolü"
      >
        <Music className="w-6 h-6 text-red-500" />
      </button>

      {isVisible && (
        <div className="absolute top-full right-0 mt-2 bg-white/90 backdrop-blur-sm rounded-lg shadow-xl p-4">
          <button
            onClick={togglePlay}
            className="flex items-center gap-2 text-gray-700 hover:text-red-500 transition-colors"
          >
            {isPlaying ? (
              <>
                <Pause className="w-5 h-5" />
                <span>Durdur</span>
              </>
            ) : (
              <>
                <Play className="w-5 h-5" />
                <span>Çal</span>
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
}