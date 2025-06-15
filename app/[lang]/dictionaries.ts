import "server-only"

const dictionaries = {
  ar: () => import("./dictionaries/ar.json").then((module) => module.default),
  fr: () => import("./dictionaries/fr.json").then((module) => module.default),
  en: () => import("./dictionaries/en.json").then((module) => module.default),
}

export const getDictionary = async (locale: "ar" | "fr" | "en") => dictionaries[locale]?.() ?? dictionaries.ar()
