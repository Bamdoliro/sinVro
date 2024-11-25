import { DiaryStep } from 'types/diary/client';
import { create } from 'zustand';

interface DiaryStepState {
  diaryStep: DiaryStep;
  setDiaryStep: (step: DiaryStep) => void;
}

const useDiaryStepStore = create<DiaryStepState>((set) => ({
  diaryStep: '일기',
  setDiaryStep: (step) => set({ diaryStep: step }),
}));

export const useDiaryStep = () => useDiaryStepStore();
export const useSetDiaryStep = () => useDiaryStepStore((state) => state.setDiaryStep);
export const useDiaryStepValue = () => useDiaryStepStore((state) => state.diaryStep);
