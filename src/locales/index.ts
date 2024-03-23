import { createI18n } from "vue-i18n";
import type { TranslateOptions } from "vue-i18n";
import messages from "./locales";
import { getCookie, setCookie } from "@/utils/auth";

const defaultLanguage = "zh-cn";

const i18n = createI18n({
  legacy: false,
  locale: getDefaultLanguage(),
  fallbackLocale: defaultLanguage, // 当前语言翻译缺失时显示的语言
  messages
});

interface T {
  (key: I18nType.I18nKey): string;
  (
    key: I18nType.I18nKey,
    plural: number,
    options?: TranslateOptions<I18nType.LangType>
  ): string;
  (
    key: I18nType.I18nKey,
    defaultMsg: string,
    options?: TranslateOptions<I18nType.I18nKey>
  ): string;
  (
    key: I18nType.I18nKey,
    list: unknown[],
    options?: TranslateOptions<I18nType.I18nKey>
  ): string;
  (key: I18nType.I18nKey, list: unknown[], plural: number): string;
  (key: I18nType.I18nKey, list: unknown[], defaultMsg: string): string;
  (
    key: I18nType.I18nKey,
    named: Record<string, unknown>,
    options?: TranslateOptions<I18nType.LangType>
  ): string;
  (
    key: I18nType.I18nKey,
    named: Record<string, unknown>,
    plural: number
  ): string;
  (
    key: I18nType.I18nKey,
    named: Record<string, unknown>,
    defaultMsg: string
  ): string;
}

export const $t = i18n.global.t as T;
export const $locale = i18n.global.locale;

function getDefaultLanguage(): I18nType.LangType {
  const locales = Object.keys(messages);
  // 1. 优先从 cookies 中取得语言
  const chosenLanguage = getCookie("lang") as I18nType.LangType | undefined;
  if (chosenLanguage && locales.includes(chosenLanguage)) return chosenLanguage;

  // 2. 其次从浏览器中取得默认语言
  const browserLanguage = navigator.language.toLowerCase() as I18nType.LangType;
  if (locales.includes(browserLanguage)) return browserLanguage;

  // 3. 最后默认语言
  return defaultLanguage;
}

export function setLocale(locale: I18nType.LangType) {
  i18n.global.locale.value = locale;
  setCookie("lang", locale);
}

export default i18n;
