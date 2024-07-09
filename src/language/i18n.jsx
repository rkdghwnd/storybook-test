import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './resource/en';
import ko from './resource/ko';

export const getLanguage = () => {
  if (localStorage.getItem('tinytingel_language'))
    return localStorage.getItem('tinytingel_language') || 'en';
  else if (navigator.language.includes('ko')) {
    localStorage.setItem('tinytingel_language', 'ko');
    return 'ko';
  } else return 'en';
};

i18n.use(initReactI18next).init({
  resources: {
    ...en,
    ...ko,
  },
  lng: getLanguage(),
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export const changeLanguage = (lng) => {
  i18n.changeLanguage(lng);
  localStorage.setItem('tinytingel_language', lng);
};

export default i18n;
