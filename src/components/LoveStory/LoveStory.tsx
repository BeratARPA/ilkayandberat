import React from 'react';
import { Heart, Quote as QuoteIcon } from 'lucide-react';
import { Quote } from './Quote';
import { Section } from '../ui/Section';

export function LoveStory() {
  return (
    <Section>
      <div className="relative bg-white/90 backdrop-blur-md rounded-2xl p-12 shadow-xl">
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-red-500 rounded-full p-4 shadow-lg">
          <Heart className="w-8 h-8 text-white fill-current" />
        </div>
        
        <h2 className="text-4xl font-bold text-center mb-8 text-red-600">
          Bizim Hikayemiz
        </h2>
        
        <div className="space-y-8 text-gray-700">
          <p className="text-xl leading-relaxed">
            Sevgili İlkay,
          </p>
          <p className="text-lg leading-relaxed">
            Her yeni yıl, seninle paylaştığımız anılarla daha da güzelleşiyor. 
            Gülüşün, hayatıma kattığın renk ve mutluluk için sonsuz teşekkür ederim.
          </p>
          
          <Quote 
            text="Seninle geçen her an, hayatımın en değerli hazinesi..."
            author="Berat"
          />
          
          <p className="text-lg leading-relaxed">
            2025'e girerken, seninle paylaşacağımız daha nice mutlu yıllar için 
            sabırsızlanıyorum. Aşkımız her geçen gün daha da güçleniyor.
          </p>
          
          <div className="flex justify-end items-center gap-2 text-red-500">
            <QuoteIcon className="w-5 h-5" />
            <p className="text-xl font-semibold">Seni Seviyorum</p>
          </div>
        </div>
      </div>
    </Section>
  );
}