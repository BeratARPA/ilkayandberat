import React from 'react';
import { Sparkles } from 'lucide-react';
import { PhotoCard } from './PhotoCard';
import { Section } from '../ui/Section';

const photos = [
  {
    url: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486",
    caption: "İlk Tanışmamız",
    date: "14 Şubat 2023"
  },
  {
    url: "https://images.unsplash.com/photo-1583157048761-ac1867d1bee6",
    caption: "Paris'te Romantik Anlar",
    date: "21 Haziran 2023"
  },
  {
    url: "https://images.unsplash.com/photo-1516589091380-5d8e87df6999",
    caption: "Yaz Tatilimiz",
    date: "15 Ağustos 2023"
  },
  {
    url: "https://images.unsplash.com/photo-1529634597503-139d3726fed5",
    caption: "Sonbahar Gezintisi",
    date: "3 Ekim 2023"
  },
  {
    url: "https://images.unsplash.com/photo-1514927298007-a2b56e5270e1",
    caption: "Yılbaşı Hazırlıkları",
    date: "24 Aralık 2023"
  },
  {
    url: "https://images.unsplash.com/photo-1517263904808-5dc91e3e7044",
    caption: "Yeni Yıl Kutlaması",
    date: "31 Aralık 2024"
  }
];

export function PhotoGallery() {
  return (
    <Section>
      <h2 className="text-4xl font-bold text-center mb-12 text-red-600 flex items-center justify-center gap-3">
        <Sparkles className="w-8 h-8" />
        Unutulmaz Anılarımız
        <Sparkles className="w-8 h-8" />
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {photos.map((photo, index) => (
          <PhotoCard key={index} {...photo} />
        ))}
      </div>
    </Section>
  );
}