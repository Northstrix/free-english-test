"use client";
import React from 'react';
import { Play, Pause } from 'lucide-react';

interface Props {
  onClick: () => void;
  isPlaying: boolean;
  disabled?: boolean;
  size?: number;
}

export default function AudioPlayButton({ onClick, isPlaying, disabled, size = 48 }: Props) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="flex items-center justify-center rounded-full bg-[var(--theme-color)] text-white hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
      style={{ width: size, height: size }}
    >
      {isPlaying ? <Pause size={size * 0.5} fill="currentColor" /> : <Play size={size * 0.5} fill="currentColor" />}
    </button>
  );
}
