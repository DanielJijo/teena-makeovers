'use client';

import React, { useEffect, useState } from 'react';

const DOT_COUNT = 30; // Number of dots in the trail
const DELAY_FACTOR = 0.08; // Adjust for more or less trailing

const MouseTracker = () => {
  const [dotPositions, setDotPositions] = useState<Array<{ x: number; y: number }>>(
    Array.from({ length: DOT_COUNT }, () => ({ x: 0, y: 0 }))
  );

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      const newMousePosition = { x: ev.clientX, y: ev.clientY };

      setDotPositions(prevPositions => {
        const newPositions = [newMousePosition];
        for (let i = 1; i < DOT_COUNT; i++) {
          const prevDot = prevPositions[i - 1] || newMousePosition; // Fallback for initial state
          newPositions.push({
            x: prevDot.x + (newMousePosition.x - prevDot.x) * DELAY_FACTOR,
            y: prevDot.y + (newMousePosition.y - prevDot.y) * DELAY_FACTOR,
          });
        }
        return newPositions;
      });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return (
    <>
      {dotPositions.map((pos, index) => (
        <div
          key={index}
          className="pointer-events-none fixed z-50 rounded-full bg-white"
          style={{
            left: pos.x,
            top: pos.y,
            width: `${5 - index * 0.2}px`, // Make dots slightly smaller down the trail
            height: `${5 - index * 0.2}px`, // Make dots slightly smaller down the trail
            opacity: `${1 - index * 0.08}`, // Make dots fade down the trail
            transform: 'translate(-50%, -50%)', // Center the dot
            transition: 'left 0.05s linear, top 0.05s linear, width 0.05s linear, height 0.05s linear, opacity 0.05s linear', // Smooth transition
          }}
        />
      ))}
    </>
  );
};

export default MouseTracker; 