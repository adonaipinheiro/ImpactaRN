// src/store/user.ts
import { create } from 'zustand';

import { AddNewUserResponseType } from '@services';

type UserState = {
    user: AddNewUserResponseType | null;

    // Ações
    setUser: (u: AddNewUserResponseType) => void;
    updateUser: (patch: Partial<AddNewUserResponseType>) => void;
    setAvatar: (avatar: string) => void;
    setRole: (role: string) => void;
    clear: () => void;
};

export const useUserStore = create<UserState>()((set) => ({
    user: null,

    setUser: (u) => set({ user: u }),

    updateUser: (patch) =>
        set((s) => (s.user ? { user: { ...s.user, ...patch } } : s)),

    setAvatar: (avatar) =>
        set((s) => (s.user ? { user: { ...s.user, avatar } } : s)),

    setRole: (role) =>
        set((s) => (s.user ? { user: { ...s.user, role } } : s)),

    clear: () => set({ user: null }),
}));

