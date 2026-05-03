"use client";

import React from "react";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import { TestLevel, LEVEL_LABELS } from "@/lib/test-data";
import RefinedChronicleButton from "@/components/ui/RefinedChronicleButton";
import { Home } from 'lucide-react';
interface LevelScore {
  level: TestLevel;
  score: number;
  maxScore: number;
  passed: boolean;
  skipped?: boolean;
}

interface Props {
  perLevelScores: LevelScore[];
  highestPassed: TestLevel | null;
  totalScore: number;
  totalMaxScore: number;
  elapsedTime: number;
  atLeastA1: boolean;
  formatScore: (value: number) => string;
  onRestart: () => void;
}

const XIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.294 19.497h2.039L6.486 3.24H4.298L17.607 20.65z" />
  </svg>
);

export default function ResultRevealCard({
  perLevelScores,
  highestPassed,
  totalScore,
  totalMaxScore,
  elapsedTime,
  atLeastA1,
  formatScore,
  onRestart,
}: Props) {
  const isC2Passed = perLevelScores.find((s) => s.level === "C2")?.passed;

  const getStatusText = () => {
    if (isC2Passed) return "Exceptional Proficiency";
    if (atLeastA1 && highestPassed) return `Your Level: ${LEVEL_LABELS[highestPassed]}`;
    return "Failed";
  };

  const getSubStatusText = () => {
    if (isC2Passed) return "You have demonstrated mastery of English at the highest level!";
    if (atLeastA1 && highestPassed) {
      return `You\'ve successfully demonstrated proficiency at the ${LEVEL_LABELS[highestPassed]} level.`;
    }
    return "You haven't reached the passing score for this level.";
  };

  const handleShareOnX = () => {
    const levelStr = highestPassed ? LEVEL_LABELS[highestPassed] : "Beginner";
    const text = `I've just completed the English proficiency test! My assessed level is: ${levelStr}. Find yours at:`;
    const url = window.location.origin;

    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
      "_blank"
    );
  };

  const minutes = Math.floor(elapsedTime / 60000);
  const seconds = ((elapsedTime % 60000) / 1000).toFixed(0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full space-y-6"
    >
      <div className="rounded-[var(--radius)] border border-[var(--border-color)] bg-[var(--card-background)] sm:p-[2.25rem_2.2rem] p-[1.6875rem_1.65rem] space-y-[28px] relative overflow-hidden">
        <div className="flex justify-center w-full">
           <div className="w-[88px] flex justify-center items-center h-[115px] translate-x-[-4px]">
              {atLeastA1 ? (
                <div className="success-checkmark">
                  <div className="check-icon">
                    <span className="icon-line line-tip"></span>
                    <span className="icon-line line-long"></span>
                    <div className="icon-circle"></div>
                    <div className="icon-fix"></div>
                  </div>
                </div>
              ) : (
                <div className="error-checkmark">
                  <div className="error-icon">
                    <span className="icon-line line-left"></span>
                    <span className="icon-line line-right"></span>
                  </div>
                </div>
              )}
            </div>
        </div>

        <div className="text-center space-y-4">
          <div className="space-y-1">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {getStatusText()}
            </h2>
            <p className="text-[var(--slightly-subtle-foreground)] sm:text-[15px] text-[14px] pt-0.5 leading-relaxed">
              {getSubStatusText()}
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-[var(--background)] rounded-[var(--radius)] border border-[var(--border-color)] p-8 text-center w-full">
            <p className="text-[var(--subtle-color)] text-[12px] uppercase font-bold tracking-wider mb-2">Achieved score</p>
            <p className={`text-6xl font-bold ${atLeastA1 ? 'text-[var(--theme-color)]' : 'text-[var(--theme-red)]'}`}>
              {formatScore(Math.max(0, totalScore))}
            </p>
            
            <div className="mt-4 flex items-center justify-center gap-2 h-[1.5rem]">
              <div className="flex items-center">
                 <Clock size={15} className="text-[var(--subtle-color)] shrink-0" />
              </div>
              <div className="flex items-center gap-1.5">
                 <span className="text-[var(--subtle-color)] text-[15px] font-medium leading-none">Time taken:</span>
                 <span className="text-[var(--slightly-subtle-foreground)] text-[15px] font-medium leading-none">
                   {minutes}:{parseInt(seconds) < 10 ? `0${seconds}` : seconds}
                 </span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          {atLeastA1 ? (
            <>
              <h3 className="text-[var(--subtle-color)] text-[13px] font-bold tracking-widest px-1 lowercase text-center">detailed breakdown</h3>
              <div className="space-y-2">
                {perLevelScores.map((levelScore) => (
                  <div
                    key={levelScore.level}
                    className="flex items-center justify-between p-3 px-4 rounded-[var(--radius)] bg-[var(--background)] border border-[var(--border-color)]"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full ${levelScore.skipped ? 'bg-[var(--theme-color)]' : levelScore.passed ? 'bg-[var(--theme-green)]' : 'bg-[var(--theme-red)]'}`} />
                      <span className="font-medium text-white text-[15px]">{LEVEL_LABELS[levelScore.level]}</span>
                    </div>
                    <div className="text-[14px] font-mono">
                      {levelScore.skipped ? (
                        <span className="text-[var(--subtle-color)] italic">Skipped</span>
                      ) : (
                        <>
                          <span style={{ color: levelScore.passed ? "var(--theme-green)" : "var(--theme-red)" }}>
                            {formatScore(levelScore.score)}
                          </span>
                          <span className="text-[var(--subtle-color)]"> / {levelScore.maxScore}</span>
                        </>
                      )}
                    </div>
                  </div>
                ))}
                
                <div className="flex items-center justify-between p-3 px-4 rounded-[var(--radius)] bg-[var(--background)] border border-[var(--border-color)]">
                  <span className="font-bold text-white text-[15px]">Total score</span>
                  <div className="text-[14px] font-mono font-bold">
                    <span className="text-[var(--theme-color)]">{formatScore(Math.max(0, totalScore))}</span>
                    <span className="text-[var(--subtle-color)] font-normal"> / {totalMaxScore}</span>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <></>
          )}
        </div>

        <div className="pt-2 space-y-4">
          {atLeastA1 && (
            <RefinedChronicleButton
              onClick={handleShareOnX}
              width="100%"
            >
              <XIcon />
              Share Result
            </RefinedChronicleButton>
          )}

          <RefinedChronicleButton
            onClick={onRestart}
            width="100%"
            backgroundColor={atLeastA1 ? "var(--background)" : "var(--foreground)"}
            textColor={atLeastA1 ? "var(--foreground)" : "var(--background)"}
            borderColor={atLeastA1 ? "var(--border-color)" : "transparent"}
            borderVisible={atLeastA1}
            hoverBorderVisible={false}
            hoverBackgroundColor="var(--theme-color)"
            hoverTextColor="var(--foreground)"
          >
            <Home size={19} />
            Return to Homepage
          </RefinedChronicleButton>

          <div className="pt-4 border-t border-[var(--border-color)]">
            <p className="text-[10px] leading-relaxed text-[var(--subtle-color)] text-justify">
              This test is a mere assessment independently created and is not affiliated with, endorsed by, authorized by, or certified by the Common European Framework of Reference for Languages (CEFR). Any CEFR level shown is a mere estimate based on internal scoring method and should not be treated as an official certification or the CEFR-certified exam score prediction.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}