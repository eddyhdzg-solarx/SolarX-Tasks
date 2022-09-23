import Head from "next/head";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

interface OPGProps {
  description?: string;
  title?: string;
}

export function OGP(props: OPGProps) {
  const router = useRouter();
  const { t } = useTranslation("common");
  const {
    description = t("pages.index.description"),
    title = t("pages.index.tasks"),
  } = props;

  return (
    <Head>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta
        property="og:image"
        content="/static/images/icon-maskable-512.png"
      />
      <meta property="og:url" content={`https://solarx.app${router?.asPath}`} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta
        name="twitter:image"
        content="/static/images/icon-maskable-512.png"
      />
      <meta name="twitter:card" content="summary" />
    </Head>
  );
}
