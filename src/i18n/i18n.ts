import i18n from "i18next";

import { ru } from "./locales/ru";
import { en } from "./locales/en";

i18n.init({
  resources: {
    ru: { translation: ru },
    en: { translation: en },
  },
  lng: localStorage.getItem("language") || "ru",
  fallbackLng: "ru",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
