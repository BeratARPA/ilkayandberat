import React, { useEffect } from 'react';

export function SnowEffect() {
  useEffect(() => {
    const createSnowflake = () => {
      const snowflake = document.createElement('div');
      snowflake.classList.add('snowflake');
      snowflake.style.left = Math.random() * window.innerWidth + 'px';
      snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
      snowflake.style.opacity = Math.random().toString();
      document.getElementById('snow-container')?.appendChild(snowflake);

      setTimeout(() => {
        snowflake.remove();
      }, 5000);
    };

    const snowInterval = setInterval(createSnowflake, 200);
    return () => clearInterval(snowInterval);
  }, []);

  return <div id="snow-container" className="fixed inset-0 pointer-events-none z-50" />;
}