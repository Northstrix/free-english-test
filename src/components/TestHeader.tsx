
"use client";

import React from "react";
import { ArrowLeft, ArrowRight, Clock, X } from "lucide-react";
import { Tooltip, TooltipTrigger } from "@/components/ui/tooltip";
import { formatTime } from "@/utils/testUtils";

interface Props {
  currentLevelIndex: number;
  startLevelIndex: number;
  maxUnlockedIndex: number;
  elapsedTime: number;
  onExit: () => void;
  onPrev: () => void;
  onNext: () => void;
  canGoNext: boolean;
}

export default function TestHeader({
  currentLevelIndex,
  startLevelIndex,
  elapsedTime,
  onExit,
  onPrev,
  onNext,
  canGoNext,
}: Props) {
  // Access blocked to levels before the starting point
  const showPrev = currentLevelIndex > startLevelIndex;

  return (
    <header className="flex flex-col justify-between h-[64px] max-[480px]:h-[96px] translate-y-[-16px] max-[480px]:translate-y-[-48px] relative z-20">
      <div className="flex items-center justify-between w-full relative">
        <div className="w-[40px]" />
        <div className="flex flex-col items-center justify-center text-center flex-1">
          <div className="text-center">
            <h1 className="text-base font-bold text-[var(--foreground)] leading-snug tracking-tight translate-y-[21px] max-[480px]:invisible">
              100% Free English Level Test (A1-C2)
            </h1>
            
            <h1 className="hidden max-[480px]:block max-[480px]:text-[14px] max-[480px]:leading-[1.9] max-[480px]:translate-y-[18px] font-bold text-[var(--foreground)] tracking-tight">
              <div>100% Free English</div>
              <div>Level Test (A1-C2)</div>
            </h1>

            <div className="flex items-center justify-center gap-1.5 mt-0.5 translate-y-[28px]">
              <Clock className="w-4 h-4 text-[var(--subtle-color)] max-[480px]:w-3.5 max-[480px]:h-3.5" strokeWidth={2} />
              <span className="font-mono text-[15px] font-semibold text-[var(--subtle-color)] tracking-tight max-[480px]:text-[14px]">
                {formatTime(elapsedTime)}
              </span>
            </div>
          </div>
        </div>
        <div className="flex w-[40px] justify-end items-center">
          <button
            onClick={onExit}
            className="p-2 text-subtle-color hover:text-[var(--theme-red)] transition-colors"
            aria-label="Exit Test"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between pt-1">
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              className={`p-3 rounded-full transition-all ${
                showPrev
                  ? "bg-theme-color text-foreground hover:bg-[color-mix(in_srgb,var(--theme-color)_90%_black)]"
                  : "bg-transparent text-subtle-color cursor-not-allowed opacity-60"
              }`}
              onClick={showPrev ? onPrev : undefined}
              disabled={!showPrev}
            >
              <ArrowLeft className="w-5 h-5" strokeWidth={2.3} />
            </button>
          </TooltipTrigger>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <button
              className={`p-3 rounded-full transition-all ${
                canGoNext
                  ? "bg-theme-color text-foreground hover:bg-[color-mix(in_srgb,var(--theme-color)_90%_black)]"
                  : "bg-transparent text-subtle-color cursor-not-allowed opacity-60"
              }`}
              onClick={canGoNext ? onNext : undefined}
              disabled={!canGoNext}
            >
              <ArrowRight className="w-5 h-5" strokeWidth={2.3} />
            </button>
          </TooltipTrigger>
        </Tooltip>
      </div>
    </header>
  );
}
