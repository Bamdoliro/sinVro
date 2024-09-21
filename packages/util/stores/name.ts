import { create } from 'zustand';

interface NameStore {
  name: string;
  setName: (newName: string) => void;
  clearName: () => void;
}

export const useNameStore = create<NameStore>((set) => ({
  name: '',
  setName: (newName: string) => set({ name: newName }),
  clearName: () => set({ name: '' }),
}));
