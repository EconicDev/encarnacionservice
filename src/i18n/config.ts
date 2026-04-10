import i18next from "i18next";

import esCommon from "../../public/locales/es/common.json";
import esHome from "../../public/locales/es/home.json";
import esAbout from "../../public/locales/es/about.json";
import esServices from "../../public/locales/es/services.json";
import esContact from "../../public/locales/es/contact.json";
import esPress from "../../public/locales/es/press.json";

import enCommon from "../../public/locales/en/common.json";
import enHome from "../../public/locales/en/home.json";
import enAbout from "../../public/locales/en/about.json";
import enServices from "../../public/locales/en/services.json";
import enContact from "../../public/locales/en/contact.json";
import enPress from "../../public/locales/en/press.json";

i18next.init({
  lng: "es",
  fallbackLng: "es",
  defaultNS: "common",
  ns: ["common", "home", "about", "services", "contact", "press"],
  resources: {
    es: {
      common: esCommon,
      home: esHome,
      about: esAbout,
      services: esServices,
      contact: esContact,
      press: esPress,
    },
    en: {
      common: enCommon,
      home: enHome,
      about: enAbout,
      services: enServices,
      contact: enContact,
      press: enPress,
    },
  },
  interpolation: { escapeValue: false },
});

export default i18next;
