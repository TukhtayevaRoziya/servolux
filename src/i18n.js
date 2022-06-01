import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "./locales/en/translationEN.json";
import translationCN from "./locales/cn/translationCN.json";
import translationRU from "./locales/ru/translationRU.json";

const resources = {
  en: {
    translation: translationEN,
  },
  cn: {
    translation: translationCN,
  },
  ru: {
    translation: translationRU,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",

  keySeparator: false,

  interpolation: {
    escapeValue: false,
  },
});

export default i18n