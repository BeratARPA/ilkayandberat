import React, { useState, useCallback } from 'react';
import { Santa } from './Santa';
import { Gift } from './Gift';

interface GiftType {
  id: number;
  x: number;
  y: number;
}

export function SantaController() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [santaPosition, setSantaPosition] = useState({ x: -100, y: 100 });
  const [gifts, setGifts] = useState<GiftType[]>([]);

  const animate = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);

    // Santa'nın hareketi
    const startX = -100;
    const endX = window.innerWidth + 100;
    const duration = 3000;
    const startTime = Date.now();

    // Hediyeleri rastgele konumlara fırlat
    const throwGifts = () => {
      const newGift = {
        id: Date.now(),
        x: santaPosition.x,
        y: santaPosition.y + 50,
      };
      setGifts(prev => [...prev, newGift]);

      // Hediyeyi 2 saniye sonra kaldır
      setTimeout(() => {
        setGifts(prev => prev.filter(gift => gift.id !== newGift.id));
      }, 2000);
    };

    // Animasyon döngüsü
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Santa'nın pozisyonunu güncelle
      const newX = startX + (endX - startX) * progress;
      setSantaPosition({ x: newX, y: 100 });

      // Her 200ms'de bir hediye fırlat
      if (elapsed % 200 < 16) {
        throwGifts();
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setIsAnimating(false);
        setSantaPosition({ x: -100, y: 100 });
        setGifts([]);
      }
    };

    requestAnimationFrame(animate);
  }, [isAnimating, santaPosition.x, santaPosition.y]);

  return {
    animate,
    Santa: <Santa position={santaPosition} />,
    Gifts: gifts.map(gift => (
      <Gift key={gift.id} id={gift.id} position={{ x: gift.x, y: gift.y }} />
    )),
  };
}