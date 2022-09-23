import "types/react-i18next";
import common from "locales/en/common.json";

declare module "next-i18next" {
  interface Resources {
    common: typeof common;
  }
}
