import React from 'react';
import { Heart } from 'lucide-react';
import { Title } from './components/Header/Title';
import { PhotoGallery } from './components/PhotoGallery/PhotoGallery';
import { SnowEffect } from './components/SnowEffect';
import { LoveStory } from './components/LoveStory/LoveStory';
import { CountdownTimer } from './components/CountdownTimer/CountdownTimer';
import { LoveMessage } from './components/LoveMessage/LoveMessage';
import { InteractiveHeart } from './components/InteractiveHeart/InteractiveHeart';
import { FloatingHearts } from './components/InteractiveElements/FloatingHearts';
import { MusicPlayer } from './components/InteractiveElements/MusicPlayer';
import { ParallaxPhoto } from './components/InteractiveElements/ParallaxPhotos';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-pink-50 to-red-50 relative overflow-hidden">
      <SnowEffect />
      <FloatingHearts />
      <MusicPlayer />
      
      <header className="pt-32 pb-16 text-center relative z-10">
        <Title />
        <div className="mt-8">
          <InteractiveHeart />
        </div>
      </header>

      <ParallaxPhoto 
        url="https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00"
        speed={0.3}
      />

      <main className="relative z-10">
        <CountdownTimer />
        <LoveStory />
        <PhotoGallery />
      </main>

      <LoveMessage />

      <footer className="text-center py-8 bg-gradient-to-r from-red-500 via-red-600 to-red-500 text-white mt-24">
        <p className="flex items-center justify-center gap-2">
          <Heart className="w-5 h-5 fill-current" />
          İlkay & Berat - 2025
          <Heart className="w-5 h-5 fill-current" />
        </p>
      </footer>
    </div>
  );
}

export default App;