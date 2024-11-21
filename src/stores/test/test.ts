import { create } from 'zustand';

interface QuestionState {
  answers: { [key: string]: number | null };
  setAnswer: (questionId: string, value: number) => void;
}

export const useQuestionStore = create<QuestionState>((set) => ({
  answers: {},
  setAnswer: (questionId, value) =>
    set((state) => ({
      answers: { ...state.answers, [questionId]: value },
    })),
}));
