
import { LanguageResourcesType } from '@locales';
import { TOptionsBase } from 'i18next';
import { useTranslation as useTranslationCore } from 'react-i18next';

import { ptBR } from '../languages/ptBR';

type OptionsType<T = unknown> = TOptionsBase & {
    [key: string]: T;
} | undefined;

export function useTranslation() {
    const { t: tCore, i18n } = useTranslationCore();

    function t(param: keyof typeof ptBR, options?: OptionsType) {
        return tCore(param, options);
    }

    async function changeLanguage(lng: LanguageResourcesType) {
        i18n.changeLanguage(lng);
    }

    return {
        t,
        changeLanguage,
    };
}
