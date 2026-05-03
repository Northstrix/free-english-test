"use client";

import React from "react";
import RefinedChronicleButton from "@/components/ui/RefinedChronicleButton";
import AudioPlayButton from "@/components/AudioPlayButton";

interface ListeningComprehensionCardProps {
  onPlayAudio: () => void;
  onToggleOptions: () => void;
  optionsRevealed: boolean;
  isAudioLoading: boolean;
  isAudioPlaying: boolean;
  playsRemaining: number;
}

export default function ListeningComprehensionCard({
  onPlayAudio,
  onToggleOptions,
  optionsRevealed,
  isAudioLoading,
  isAudioPlaying,
  playsRemaining,
}: ListeningComprehensionCardProps) {
  return (
    <div className="rounded-[var(--radius)] border border-[var(--border-color)] bg-[var(--card-background)] sm:p-[2.25rem_2.2rem] p-[1.6875rem_1.65rem] space-y-[22px]">
      <div className="space-y-2">
        <h4 className="font-bold text-[var(--foreground)] sm:text-[16px] text-[15px] leading-snug">
          Listening Comprehension
        </h4>
        <p className="text-[var(--muted-foreground)] sm:text-[15px] text-[14px] leading-relaxed">
          Listen to the audio passage carefully and answer the questions below. Questions 81-88 are based directly on the passage; the remaining questions check your understanding of language in context.
        </p>
        <div className="mt-6">
          <div
            className="sm:text-[13.5px] text-[12px] leading-[1.7] text-[var(--slightly-subtle-foreground)] prose prose-sm max-w-none"
            style={{ textAlign: "justify", lineHeight: "1.7" }}
          >
            Tip: Read the questions before revealing the answers and listening to the audio.
          </div>
        </div>
      </div>

      <div className="w-full flex items-center gap-4 p-4 bg-[var(--background)] rounded-[var(--radius)] border border-[var(--border-color)]">
        <AudioPlayButton
          onClick={onPlayAudio}
          isPlaying={isAudioPlaying}
          disabled={playsRemaining === 0 || isAudioPlaying || isAudioLoading}
          size={48}
        />
        <div className="flex-1 text-left space-y-0.5">
          <p className="font-bold sm:text-[15px] text-[14px]">
            {isAudioLoading
              ? "Loading..."
              : isAudioPlaying
              ? "Playing..."
              : "Play Audio Passage"}
          </p>
          <p className="text-[var(--subtle-color)] sm:text-[13px] text-[12px]">
            Plays remaining: {playsRemaining}
          </p>
        </div>
      </div>

      <RefinedChronicleButton
        onClick={onToggleOptions}
        backgroundColor="var(--background)"
        textColor="var(--foreground)"
        borderColor="var(--border-color)"
        borderVisible={true}
        hoverBorderVisible={false}
        width="100%"
      >
        {optionsRevealed ? "Hide Answer Options" : "Reveal Answer Options"}
      </RefinedChronicleButton>
    </div>
  );
}
