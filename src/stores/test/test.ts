import { create } from 'zustand';

interface QuestionState {
  answers: { [key: string]: number | null };
  setAnswer: (questionId: string, value: number) => void;
  getTotal: () => number;
}

export const useQuestionStore = create<QuestionState>((set, get) => ({
  answers: {},

  setAnswer: (questionId, value) =>
    set((state) => ({
      answers: { ...state.answers, [questionId]: value },
    })),

  getTotal: () => {
    const state = get();
    return Object.values(state.answers)
      .filter((value): value is number => value !== null)
      .reduce((total, value) => total + value, 0);
  },
}));
