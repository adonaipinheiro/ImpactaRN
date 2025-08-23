import { create } from 'zustand';

import { AuthResponseType } from '@services';

type AuthState = {
    tokens: AuthResponseType | null;
    setTokens: (tokens: AuthResponseType) => void;
    setAccessToken: (access: string) => void;
    setRefreshToken: (refresh: string) => void;
    clear: () => void;
};

export const useAuthStore = create<AuthState>()((set) => ({
    tokens: null,

    setTokens: (tokens) => set({ tokens }),

    setAccessToken: (access) =>
        set((s) => (s.tokens ? { tokens: { ...s.tokens, access_token: access } } : s)),

    setRefreshToken: (refresh) =>
        set((s) => (s.tokens ? { tokens: { ...s.tokens, refresh_token: refresh } } : s)),

    clear: () => set({ tokens: null }),
}));
