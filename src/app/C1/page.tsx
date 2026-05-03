"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useTestStore } from "@/store/useTestStore";
import ResultRevealCard from "@/components/ResultRevealCard";
import AppFooter from "@/components/AppFooter";
import { formatScore } from "@/utils/testUtils";

export default function C1ResultPage() {
  const router = useRouter();
  const store = useTestStore();

  useEffect(() => {
    if (store.endTime === 0) {
      router.push('/');
    }
  }, [store.endTime, router]);

  if (store.endTime === 0) return null;

  const handleRestart = () => {
    store.resetTest();
    router.push('/');
  };

  const handleNavigate = (target: string) => {
    if (target === 'hero') {
      store.resetTest();
      router.push('/');
    } else if (target === 'level-selector') {
      store.startTest();
      router.push('/');
    }
  };

  const totalScore = store.perLevelScores.reduce((sum, s) => sum + Math.max(0, s.score), 0);
  const totalMaxScore = store.perLevelScores.reduce((sum, s) => sum + s.maxScore, 0);

  return (
    <div className="min-h-screen flex flex-col items-center bg-[#0a0a0a] text-white">
      <div className="flex-1 w-full max-w-2xl py-20 px-[10px] lg:px-[24px]">
        <ResultRevealCard
          perLevelScores={store.perLevelScores}
          highestPassed={store.highestPassed}
          totalScore={totalScore}
          totalMaxScore={totalMaxScore}
          elapsedTime={store.endTime - store.startTime}
          atLeastA1={store.highestPassed !== null}
          formatScore={formatScore}
          onRestart={handleRestart}
        />
      </div>
      <AppFooter onCardClick={handleRestart} onNavigate={handleNavigate} />
    </div>
  );
}