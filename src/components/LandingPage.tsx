"use client";

import React, { useCallback } from 'react';
import { motion } from 'framer-motion';
import HolographicCard from '@/components/HolographicCard';
import RefinedChronicleButton from '@/components/ui/RefinedChronicleButton';
import { useResponsiveCardSize } from '@/hooks/useResponsiveCardSize';
import { WordSlider } from '@/components/WordSlider';
import { cn } from '@/lib/utils';
import { Zap } from 'lucide-react';
import Link from 'next/link';

interface HeroProps {
  onStartTest: (forceStart?: boolean) => void;
}

export default function Hero({ onStartTest }: HeroProps) {
  const words = ['Accurately', 'Quickly', 'Easily', 'For Free'];
  const handleCardClick = useCallback(() => onStartTest(false), [onStartTest]);
  const handleStartClick = useCallback(() => onStartTest(true), [onStartTest]);
  const { width: responsiveWidth, height: responsiveHeight } = useResponsiveCardSize(320, 480);

  return (
    <section className="relative w-full overflow-hidden bg-[var(--background)] flex flex-col items-center justify-center py-12 lg:py-24 min-h-[min(calc(100vh),1080px)]">
      <div className="absolute inset-0 bg-[var(--background)] -z-10" />

      <div className="w-full mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 px-[10px] lg:px-[24px]"
        style={{ maxWidth: '1200px' }}
      >
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex flex-col justify-center w-full lg:w-1/2 text-center lg:text-left items-center lg:items-start"
        >
          <div className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--border-color)] bg-[hsl(var(--card-background)/0.8)]">
            <Zap size={12} className="text-[var(--theme-color)]" />
            <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[var(--theme-color)]">
              Made using AI
            </span>
          </div>

          <h1
            className={cn(
              'font-bold leading-tight tracking-tighter text-4xl md:text-[44px] lg:text-[50px] mb-4 text-[var(--foreground)]'
            )}
          >
            Assess Proficiency
            <br />
            <span className="inline-block">
              <WordSlider words={words} className="text-[0.85em]" />
            </span>
          </h1>

          <div className="max-w-md space-y-6 mb-12">
            <p className="text-[15px] md:text-[16px] leading-relaxed text-[var(--muted-foreground)]">
              Assess your English proficiency level (A1-C2) for free — no sign-up, payment, or email required. You're literally one click away from starting the test.
            </p>
            
            <div className="space-y-4 pt-4 border-t border-[var(--border-color)]">
              <p className="text-[10px] leading-relaxed text-[var(--subtle-color)] text-justify">
                This test is a mere assessment independently created and is not affiliated with, endorsed by, authorized by, or certified by the Common European Framework of Reference for Languages (CEFR). Any CEFR level shown is a mere estimate based on internal scoring method and should not be treated as an official certification or the CEFR-certified exam score prediction.
              </p>
              <p className="text-[11px] text-[var(--muted-foreground)]">
                By taking this test, you're accepting the{' '}
                <Link href="/terms" target="_blank" className="text-[var(--theme-color)] hover:underline">Terms of Service</Link>
                {' '}and{' '}
                <Link href="/privacy" target="_blank" className="text-[var(--theme-color)] hover:underline">Privacy Policy</Link>.
              </p>
            </div>
          </div>

          <RefinedChronicleButton onClick={handleStartClick}>
            Start Test
          </RefinedChronicleButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center lg:justify-end items-center w-full lg:w-1/2 relative min-h-[500px] overflow-visible"
        >
          <HolographicCard
            imageSrc="card-image.webp"
            electricColor="#119EED"
            width={responsiveWidth}
            height={responsiveHeight}
            onClick={handleCardClick}
            enableDrag={false}
            enableTilt
            borderRadius={12}
            hologramOpacity={0.6}
            data-ai-hint="assessment card"
          />
        </motion.div>
      </div>
    </section>
  );
}
