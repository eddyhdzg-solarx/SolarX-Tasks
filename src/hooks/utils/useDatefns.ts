import { format as fnsFormat, Locale as fnsLocale } from "date-fns";
import { enUS, es } from "date-fns/locale";
import { useRouter } from "next/router";

type DateType = number | Date;
type Locale = "en" | "es";

const fnsLocales: Record<Locale, fnsLocale> = { en: enUS, es };

export function useDatefns() {
  const router = useRouter();
  const locale = router.locale as Locale;

  const format = (date: DateType, formatStr = "PP") => {
    return fnsFormat(date, formatStr, {
      locale: fnsLocales[locale],
    });
  };

  return format;
}
