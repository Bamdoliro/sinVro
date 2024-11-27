import { QuestionStep } from 'types/test/client';
import { create } from 'zustand';

interface QuestionStepState {
  questionStep: QuestionStep;
  setQuestionStep: (step: QuestionStep) => void;
}

const useTestStepStore = create<QuestionStepState>((set) => ({
  questionStep: '질문1',
  setQuestionStep: (step) => set({ questionStep: step }),
}));

export const useQuestionStep = () => useTestStepStore();
export const useSetQuestionStep = () =>
  useTestStepStore((state) => state.setQuestionStep);
export const useQuestionStepValue = () => useTestStepStore((state) => state.questionStep);
