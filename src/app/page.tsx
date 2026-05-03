"use client";

import React, { useState, useEffect, useMemo, useRef, useCallback, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { TEST_QUESTIONS, PASS_THRESHOLDS, LEVELS, type TestLevel, LEVEL_LABELS } from "@/lib/test-data";
import { calculateQuestionScore } from "@/lib/scoring";
import { TooltipProvider } from "@/components/ui/tooltip";
import TestHeader from "@/components/TestHeader";
import QuestionCard from "@/components/QuestionCard";
import Hero from "@/components/LandingPage";
import RefinedChronicleButton from "@/components/ui/RefinedChronicleButton";
import { CustomDialog } from "@/components/CustomDialog";
import { ModalOverlay } from "@/components/modal-overlay";
import ListeningComprehensionCard from "@/components/ListeningComprehensionCard";
import AppFooter from "@/components/AppFooter";
import { prepareOptions, isScorableQuestion } from "@/utils/testUtils";
import { useTestStore } from "@/store/useTestStore";
import { Loader2 } from "lucide-react";

type View = "landing" | "test";

function EnglishTestAppContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const store = useTestStore();

  const startFromParam = searchParams.get('startFrom') as TestLevel | null;
  const startLevelIndex = startFromParam ? LEVELS.indexOf(startFromParam) : 0;

  const [view, setView] = useState<View>("landing");
  const [currentLevelIndex, setCurrentLevelIndex] = useState(0);
  const [maxUnlockedIndex, setMaxUnlockedIndex] = useState(0);
  const [elapsedTime, setElapsedTime] = useState<number>(0);
  const [audioPlayCount, setAudioPlayCount] = useState<Record<string, number>>({});
  const [isAudioLoading, setIsAudioLoading] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [optionsRevealed, setOptionsRevealed] = useState(false);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [exitDialogOpen, setExitDialogOpen] = useState(false);
  const [startFromDialogOpen, setStartFromDialogOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const audioRefs = useRef<Record<string, HTMLAudioElement | null>>({});
  const totalsRef = useRef<{
    grandTotalQuestions: number;
    levelTotals: Record<TestLevel, number>;
    cumulativeTotals: number[];
  }>({
    grandTotalQuestions: 0,
    levelTotals: {} as Record<TestLevel, number>,
    cumulativeTotals: [],
  });

  useEffect(() => {
    if (view === "landing") {
      store.resetTest();
      if (startFromParam && LEVELS.includes(startFromParam)) {
        setStartFromDialogOpen(true);
      }
    }
  }, [view, startFromParam]);

  useEffect(() => {
    if (totalsRef.current.grandTotalQuestions === 0) {
      const levelTotals: Record<TestLevel, number> = {} as Record<TestLevel, number>;
      const cumulativeTotals: number[] = [0];
      let runningTotal = 0;

      LEVELS.forEach((level, index) => {
        const scorableCount = TEST_QUESTIONS[level].filter(isScorableQuestion).length;
        levelTotals[level] = scorableCount;
        runningTotal += scorableCount;
        cumulativeTotals[index + 1] = runningTotal;
      });

      totalsRef.current = {
        grandTotalQuestions: runningTotal,
        levelTotals,
        cumulativeTotals,
      };
    }
  }, []);

  const currentLevel = LEVELS[currentLevelIndex];
  const hasListening = currentLevel === "UpperB2LowerC1";

  const shuffledQuestions = useMemo(() =>
    TEST_QUESTIONS[currentLevel].map((q) => ({
      ...q,
      shuffledOptions: prepareOptions(q.options, q.type),
    })),
  [currentLevel]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (view === "test" && store.startTime > 0) {
      interval = setInterval(() => setElapsedTime(Date.now() - store.startTime), 1000);
    }
    return () => clearInterval(interval);
  }, [view, store.startTime]);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const startTest = useCallback(() => {
    store.startTest(startFromParam || undefined);
    const idx = startLevelIndex >= 0 ? startLevelIndex : 0;
    setCurrentLevelIndex(idx);
    setMaxUnlockedIndex(idx);
    setAudioPlayCount({});
    setOptionsRevealed(false);
    setDirection("next");
    setView("test");
    scrollTop();
  }, [store, startLevelIndex, startFromParam]);

  const handleStartRequest = (forceStart = false) => {
    if (forceStart && !startFromParam) {
      startTest();
    } else {
      setStartFromDialogOpen(true);
    }
  };

  const handleContinue = () => {
    const scorable = TEST_QUESTIONS[currentLevel].filter(isScorableQuestion);
    const levelScore = scorable.reduce((sum, q) => 
      sum + calculateQuestionScore(store.answers[q.id] || [], q.correctValues || []), 
    0);
    const maxScore = scorable.length;
    const passed = levelScore >= PASS_THRESHOLDS[currentLevel];

    store.submitLevel(currentLevel, levelScore, maxScore, passed);

    if (!passed) {
      setIsSubmitting(true);
      store.completeTest();
      setTimeout(() => {
        if (store.highestPassed) {
          router.push(`/${store.highestPassed}`);
        } else {
          router.push('/failure');
        }
      }, 500);
      return;
    }

    if (currentLevelIndex < LEVELS.length - 1) {
      setDirection("next");
      setCurrentLevelIndex((i) => i + 1);
      setMaxUnlockedIndex(currentLevelIndex + 1);
      setOptionsRevealed(false);
      scrollTop();
    } else {
      setIsSubmitting(true);
      store.completeTest();
      setTimeout(() => {
        router.push('/C2');
      }, 500);
    }
  };

  const handlePrevLevel = () => {
    const startIdx = startFromParam ? LEVELS.indexOf(startFromParam) : 0;
    if (currentLevelIndex > startIdx) {
      setDirection("prev");
      setCurrentLevelIndex((i) => i - 1);
      scrollTop();
    }
  };

  const reset = useCallback(() => {
    store.resetTest();
    setView("landing");
    setCurrentLevelIndex(0);
    setMaxUnlockedIndex(0);
    setAudioPlayCount({});
    setOptionsRevealed(false);
    setExitDialogOpen(false);
    setStartFromDialogOpen(false);
    Object.values(audioRefs.current).forEach((a) => a?.pause());
    scrollTop();
  }, [store]);

  const handleNavigate = useCallback((target: string) => {
    if (target === 'hero') {
      scrollTop();
      if (view !== 'landing') reset();
    } else if (target === 'level-selector') {
      handleStartRequest(false);
    }
  }, [view, reset]);

  const playAudio = useCallback(
    (questionId: string, audioUrl: string) => {
      const count = audioPlayCount[questionId] || 0;
      if (count >= 2 || isAudioPlaying) return;
      const existing = audioRefs.current[questionId];
      if (!existing) {
        setIsAudioLoading(true);
        const audio = new Audio(audioUrl);
        audioRefs.current[questionId] = audio;
        audio.oncanplaythrough = () => {
          setIsAudioLoading(false);
          setIsAudioPlaying(true);
          audio.play();
          setAudioPlayCount((prev) => ({ ...prev, [questionId]: count + 1 }));
          audio.onended = () => setIsAudioPlaying(false);
        };
        audio.onerror = () => setIsAudioLoading(false);
      } else {
        setIsAudioPlaying(true);
        existing.play();
        setAudioPlayCount((prev) => ({ ...prev, [questionId]: count + 1 }));
        existing.onended = () => setIsAudioPlaying(false);
      }
    },
    [audioPlayCount, isAudioPlaying]
  );

  const getGlobalIndex = (question: any, arrayIndex: number) => {
    if (question.type === "info") return 0;
    const previousLevelsTotal = totalsRef.current.cumulativeTotals[currentLevelIndex] || 0;
    const previousScorablesCurrentLevel = shuffledQuestions
      .slice(0, arrayIndex)
      .filter(isScorableQuestion).length;
    return previousLevelsTotal + previousScorablesCurrentLevel + 1;
  };

  const levelVariants = {
    enter: (dir: "next" | "prev") => ({
      x: dir === "next" ? 40 : -40,
      opacity: 0,
      filter: "blur(6px)",
    }),
    center: { x: 0, opacity: 1, filter: "blur(0px)" },
    exit: (dir: "next" | "prev") => ({
      x: dir === "next" ? -40 : 40,
      opacity: 0,
      filter: "blur(6px)",
    }),
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-[#0a0a0a] text-white selection:bg-[var(--theme-color)] selection:text-white">
      <CustomDialog
        open={exitDialogOpen}
        onOpenChange={setExitDialogOpen}
        title="End Test?"
        description="Are you sure you want to end test?"
        descriptionLine2="Your progress will be lost."
        cancelText="Stay"
        confirmText="Quit"
        onConfirm={reset}
      />

      <CustomDialog
        open={startFromDialogOpen}
        onOpenChange={setStartFromDialogOpen}
        description={startFromParam ? `You're about to start the test from ${LEVEL_LABELS[startFromParam]}.` : "You're about to start the English Proficiency Test."}
        cancelText="Cancel"
        confirmText="Start Test"
        showLegal={true}
        onConfirm={startTest}
        onCancel={() => {
          setStartFromDialogOpen(false);
          if (startFromParam) router.replace('/');
        }}
      />

      {isSubmitting && (
        <ModalOverlay onClose={() => {}} scrollBeforeLock={true}>
          <div className="flex flex-col items-center gap-4">
            <Loader2 className="w-12 h-12 text-[var(--theme-color)] animate-spin" />
            <p className="text-white font-bold tracking-tight">Calculating results...</p>
          </div>
        </ModalOverlay>
      )}

      {view === "landing" && <Hero onStartTest={handleStartRequest} />}

      {view !== "landing" && (
        <div className="flex-1 w-full max-w-2xl space-y-8 py-8 px-[10px] lg:px-[24px]">
          <TestHeader
            currentLevelIndex={currentLevelIndex}
            startLevelIndex={startFromParam ? LEVELS.indexOf(startFromParam) : 0}
            maxUnlockedIndex={maxUnlockedIndex}
            elapsedTime={elapsedTime}
            onExit={() => setExitDialogOpen(true)}
            onPrev={handlePrevLevel}
            onNext={handleContinue}
            canGoNext={maxUnlockedIndex >= currentLevelIndex + 1}
          />

          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={`level-${currentLevel}-${currentLevelIndex}`}
              custom={direction}
              variants={levelVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3 }}
              className="space-y-[22px]"
            >
              {hasListening && (
                <ListeningComprehensionCard
                  onPlayAudio={() => playAudio("main-audio", shuffledQuestions[0].audio || "")}
                  onToggleOptions={() => setOptionsRevealed((v) => !v)}
                  optionsRevealed={optionsRevealed}
                  isAudioLoading={isAudioLoading}
                  isAudioPlaying={isAudioPlaying}
                  playsRemaining={Math.max(0, 2 - (audioPlayCount["main-audio"] || 0))}
                />
              )}

              {shuffledQuestions.map((q, idx) => (
                <QuestionCard
                  key={q.id}
                  question={q}
                  globalIndex={getGlobalIndex(q, idx)}
                  totalQuestions={totalsRef.current.grandTotalQuestions}
                  answers={store.answers}
                  isAdvanced={hasListening}
                  optionsRevealed={optionsRevealed}
                  onAnswerChange={store.setAnswer}
                />
              ))}

              <div className="pt-0">
                <RefinedChronicleButton onClick={handleContinue} width="100%">
                  {currentLevelIndex === LEVELS.length - 1 ? "Finish" : "Continue"}
                </RefinedChronicleButton>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      )}

      <AppFooter 
        onCardClick={() => handleStartRequest(false)} 
        onNavigate={handleNavigate}
      />
    </div>
  );
}

export default function EnglishTestApp() {
  return (
    <TooltipProvider>
      <Suspense fallback={null}>
        <EnglishTestAppContent />
      </Suspense>
    </TooltipProvider>
  );
}
