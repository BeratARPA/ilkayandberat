import React, { useEffect, useState } from 'react';

interface ParallaxPhotoProps {
  url: string;
  speed?: number;
}

export function ParallaxPhoto({ url, speed = 0.5 }: ParallaxPhotoProps) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset * speed);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div className="relative overflow-hidden h-[50vh] my-12">
      <img
        src={url}
        alt="Parallax Fotoğraf"
        className="absolute w-full h-[120%] object-cover"
        style={{
          transform: `translateY(-${offset}px)`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
    </div>
  );
}