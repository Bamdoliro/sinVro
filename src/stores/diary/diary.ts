import { create } from 'zustand';

interface DiaryState {
  content: string;
  emotionList: string[];
  writtenAt: string;

  setContent: (content: string) => void;
  setEmotionList: (details: string[]) => void;
  setWrittenAt: (writtenAt: string) => void;

  getContent: () => string;
  getEmotionList: () => string[];
  getWrittenAt: () => string;
}

export const useDiaryStore = create<DiaryState>((set, get) => ({
  content: '',
  emotionList: [],
  writtenAt: '',

  setContent: (content) => set({ content }),
  setEmotionList: (details) => set({ emotionList: details }), // 인자 `details`를 받아서 업데이트
  setWrittenAt: (writtenAt) => set({ writtenAt }),

  getContent: () => get().content,
  getEmotionList: () => get().emotionList, // 전체 `emotionList` 반환
  getWrittenAt: () => get().writtenAt,
}));
