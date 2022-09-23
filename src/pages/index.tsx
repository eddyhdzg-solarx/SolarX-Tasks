import type { NextPage } from "next";
import { Seo, OGP, IndexTemplate } from "components";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export const getStaticProps = async ({ locale }: { locale: string }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};

const Index: NextPage = () => {
  const { t } = useTranslation("common");
  return (
    <>
      <Seo
        title={t("pages.index.tasks")}
        description={t("pages.index.description")}
      />
      <OGP
        title={t("pages.index.tasks")}
        description={t("pages.index.description")}
      />
      <IndexTemplate />
    </>
  );
};

export default Index;
