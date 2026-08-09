import {cookies} from "next/headers";
import {getRequestConfig} from "next-intl/server";

const locales = ["en", "pt"] as const;
type Locale = (typeof locales)[number];

function isLocale(value: string | undefined): value is Locale {
  return locales.some((locale) => locale === value);
}

export default getRequestConfig(async () => {
  const store = await cookies();
  const requestedLocale = store.get("locale")?.value;
  const locale = isLocale(requestedLocale) ? requestedLocale : "en";

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});
