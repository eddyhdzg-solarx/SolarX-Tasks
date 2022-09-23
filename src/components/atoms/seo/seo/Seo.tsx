import Head from "next/head";

export interface ISeoProps {
  title: string;
  description: string;
}

export function Seo({ title, description }: ISeoProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Head>
  );
}
