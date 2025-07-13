// src/i18n.ts
import i18n from 'i18next';
import en from './locales/en';
import ru from './locales/ru';

i18n.init({
    lng: 'en',
    fallbackLng: 'en',
    resources: {
        en: { translation: en },
        ru: { translation: ru },
    },
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
