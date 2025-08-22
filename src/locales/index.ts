import * as i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { resources } from './languages';

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'ptBR',
        fallbackLng: 'ptBR',
        interpolation: {
            escapeValue: false,
        },
    });

export {
    useTranslation,
} from './hooks';

export type LanguageResourcesType = keyof typeof resources;

export default i18n;
