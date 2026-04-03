import sr from "./sr.json";
import en from "./en.json";

const translations = { sr, en } as const;

export type Locale = keyof typeof translations;

export function getTranslations(locale: Locale) {
  return translations[locale];
}

export function getLocaleFromUrl(url: URL): Locale {
  const [, lang] = url.pathname.split("/");
  if (lang === "en") return "en";
  return "sr";
}

export function getLocalizedPath(path: string, locale: Locale): string {
  if (locale === "sr") return path;
  return `/en${path}`;
}
