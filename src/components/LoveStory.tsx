import React from 'react';
import { Heart } from 'lucide-react';

export function LoveStory() {
  return (
    <div className="max-w-2xl mx-auto bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg">
      <h2 className="text-3xl font-semibold text-center mb-8 text-red-600 flex items-center justify-center gap-2">
        <Heart className="w-6 h-6 fill-current" />
        Bizim Hikayemiz
      </h2>
      
      <div className="space-y-6 text-gray-700">
        <p className="text-lg leading-relaxed">
          Sevgili İlkay,
        </p>
        <p className="text-lg leading-relaxed">
          Her anımızı değerli kılan, hayatıma kattığın tüm güzellikler için teşekkür ederim. 
          Seninle geçirdiğim her gün, hayatımın en değerli hazinesi...
        </p>
        <p className="text-lg leading-relaxed">
          Yeni yılda ve sonraki tüm yıllarda, aşkımızın ilk günkü gibi taze kalması dileğiyle...
        </p>
        <p className="text-right text-xl font-semibold text-red-600">
          - Berat
        </p>
      </div>
    </div>
  );
}