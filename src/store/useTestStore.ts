import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { TestLevel, LEVELS } from '@/lib/test-data';

export interface LevelScore {
  level: TestLevel;
  score: number;
  maxScore: number;
  passed: boolean;
  skipped?: boolean;
}

type State = {
  answers: Record<string, string[]>;
  perLevelScores: LevelScore[];
  startTime: number;
  endTime: number;
  highestPassed: TestLevel | null;
};

type Actions = {
  setAnswer: (id: string, values: string[]) => void;
  startTest: (fromLevel?: TestLevel) => void;
  resetTest: () => void;
  submitLevel: (level: TestLevel, score: number, maxScore: number, passed: boolean) => void;
  completeTest: () => void;
};

export const useTestStore = create<State & Actions>()(
  persist(
    (set) => ({
      answers: {},
      perLevelScores: [],
      startTime: 0,
      endTime: 0,
      highestPassed: null,

      setAnswer: (id, values) => set((state) => ({
        answers: { ...state.answers, [id]: values }
      })),

      startTest: (fromLevel) => set(() => {
        const scores: LevelScore[] = [];
        if (fromLevel) {
          const fromIndex = LEVELS.indexOf(fromLevel);
          LEVELS.forEach((level, idx) => {
            if (idx < fromIndex) {
              scores.push({ level, score: -1, maxScore: 20, passed: false, skipped: true });
            }
          });
        }
        return {
          answers: {},
          perLevelScores: scores,
          startTime: Date.now(),
          endTime: 0,
          highestPassed: null,
        };
      }),

      resetTest: () => set({
        answers: {},
        perLevelScores: [],
        startTime: 0,
        endTime: 0,
        highestPassed: null,
      }),

      submitLevel: (level, score, maxScore, passed) => set((state) => {
        const existing = state.perLevelScores.filter(s => s.level !== level);
        const newScore = { level, score, maxScore, passed, skipped: false };
        const updatedScores = [...existing, newScore];
        
        updatedScores.sort((a, b) => LEVELS.indexOf(a.level) - LEVELS.indexOf(b.level));

        let highest: TestLevel | null = null;
        updatedScores.forEach(s => {
          if (s.passed) highest = s.level;
        });

        return {
          perLevelScores: updatedScores,
          highestPassed: highest
        };
      }),

      completeTest: () => set({
        endTime: Date.now(),
      }),
    }),
    {
      name: 'english-test-v1',
    }
  )
);