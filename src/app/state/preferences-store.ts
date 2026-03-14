import type { AppLocale } from '@app/state/types/app-locale';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface AppPreferencesState {
  locale: AppLocale;
  setLocale: (locale: AppLocale) => void;
}

export const useAppPreferencesStore = create<AppPreferencesState>()(
  persist(
    (set) => ({
      locale: 'es',
      setLocale: (locale) => set({ locale }),
    }),
    {
      name: 'clean-arch-template:preferences',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ locale: state.locale }),
    },
  ),
);
