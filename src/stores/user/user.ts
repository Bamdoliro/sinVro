import { User } from 'types/user/client';
import { create } from 'zustand';

interface UserStore {
  user: User;
  setUser: (user: User) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  user: {
    email: '',
    name: '',
  },
  setUser: (user) => set({ user }),
}));
