import React, { useState, useEffect } from 'react';
import { TimeUnit } from './TimeUnit';
import { Section } from '../ui/Section';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date('2025-01-01T00:00:00');
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft(); // İlk hesaplama
    const timer = setInterval(calculateTimeLeft, 1000);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <Section>
      <div className="flex flex-wrap justify-center gap-6">
        <TimeUnit value={timeLeft.days} label="Gün" />
        <TimeUnit value={timeLeft.hours} label="Saat" />
        <TimeUnit value={timeLeft.minutes} label="Dakika" />
        <TimeUnit value={timeLeft.seconds} label="Saniye" />
      </div>
    </Section>
  );
}