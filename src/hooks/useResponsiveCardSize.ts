"use client";
import { useState, useEffect } from 'react';

export function useResponsiveCardSize(baseWidth: number, baseHeight: number) {
  const [size, setSize] = useState({ width: baseWidth, height: baseHeight });

  useEffect(() => {
    const updateSize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        const factor = (width - 32) / baseWidth;
        setSize({ width: width - 32, height: baseHeight * factor });
      } else {
        setSize({ width: baseWidth, height: baseHeight });
      }
    };
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, [baseWidth, baseHeight]);

  return size;
}