"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface WordSliderProps {
  words: string[];
  duration?: number;
  className?: string;
}

export function WordSlider({
  words,
  duration = 3000,
  className,
}: WordSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentIndex((prev) => (prev + 1) % words.length),
      duration
    );
    return () => clearInterval(interval);
  }, [words.length, duration]);

  return (
    <motion.div
      layout
      transition={{ type: 'spring', stiffness: 400, damping: 30, mass: 1 }}
      className={cn(
        'relative inline-flex items-center justify-center overflow-hidden rounded-[var(--radius)] border border-[var(--border-color)]',
        'px-[14px] py-[10px] bg-[var(--card-background)] backdrop-blur-md shadow-lg',
        'mt-2 lg:mt-3',
        className
      )}
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '1.3rem 1.3rem',
          backgroundPosition: '50% 50%',
        }}
      />

      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={currentIndex}
          initial={{ y: 16, opacity: 0, filter: 'blur(10px)' }}
          animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
          exit={{ y: -16, opacity: 0, filter: 'blur(10px)' }}
          transition={{ type: 'spring', stiffness: 350, damping: 25 }}
          className="relative z-20 font-bold tracking-tight text-[var(--theme-color)]"
        >
          {words[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </motion.div>
  );
}
