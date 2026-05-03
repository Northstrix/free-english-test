import { QuestionOption } from '@/lib/test-data';

export function prepareOptions(options: QuestionOption[] | undefined, type: string): QuestionOption[] {
  if (!options?.length) return [];
  
  if (type === 'boolean') {
    return [...options].sort((a, b) => {
      if (a.value === 'true') return -1;
      if (b.value === 'true') return 1;
      return 0;
    });
  }
  return [...options].sort(() => Math.random() - 0.5);
}

export function isScorableQuestion(q: any): boolean {
  return q.type !== 'info' && q.options?.length && q.correctValues?.length;
}

export const formatScore = (num: number): string => {
  return Number.isInteger(num) ? num.toString() : num.toFixed(2).replace(/\.?0+$/, '');
};

export const formatTime = (ms: number): string => {
  const totalSeconds = Math.floor(ms / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};
