import React from 'react';

const photos = [
  {
    url: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486",
    caption: "İlk Tanışmamız"
  },
  {
    url: "https://images.unsplash.com/photo-1583157048761-ac1867d1bee6",
    caption: "Özel Anlarımız"
  },
  {
    url: "https://images.unsplash.com/photo-1516589091380-5d8e87df6999",
    caption: "Mutlu Günlerimiz"
  },
  // Not: Gerçek fotoğraflarınızı kullanmak için bu URL'leri değiştirmelisiniz
];

export function PhotoGallery() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {photos.map((photo, index) => (
        <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
          <img
            src={photo.url}
            alt={photo.caption}
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="absolute bottom-4 left-4 text-white font-medium">
              {photo.caption}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}