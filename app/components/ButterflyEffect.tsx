'use client';

import React, { useEffect, useState } from 'react';

const NUM_SPARKLES = 20; // Number of sparkles

const ButterflyEffect = () => {
  const [sparkles, setSparkles] = useState<Array<{ id: number; left: string; delay: string }>>([]);
  const [animationTriggered, setAnimationTriggered] = useState(false);

  useEffect(() => {
    if (!animationTriggered) {
      const newSparkles = Array.from({ length: NUM_SPARKLES }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        delay: `${Math.random() * 2}s`, // Random delay for staggered animation
      }));
      setSparkles(newSparkles);
      setAnimationTriggered(true);
    }
  }, [animationTriggered]);

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-20">
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="absolute w-2 h-2 bg-yellow-300 rounded-full animate-butterfly-float opacity-0"
          style={{
            left: sparkle.left,
            animationDelay: sparkle.delay,
            top: '80%', // Start from the bottom of the visible area
          }}
        />
      ))}
    </div>
  );
};

export default ButterflyEffect; 