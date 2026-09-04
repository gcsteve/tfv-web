import Head from "next/head";

type SeoProps = {
  lang: "zh-HK" | "en";
  path: string;
  title: string;
  description: string;
};

const baseUrl = "https://thefashionventures.com";

export default function Seo({ lang, path, title, description }: SeoProps) {
  const url = `${baseUrl}${path}`;
  const altLang = lang === "zh-HK" ? "en" : "zh-HK";
  const altPath =
    lang === "zh-HK" ? path.replace("/zh-HK", "/en") : path.replace("/en", "/zh-HK");

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={`${baseUrl}/tfv-hero.png`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${baseUrl}/tfv-hero.png`} />
      <link rel="canonical" href={url} />
      <link rel="alternate" hrefLang={lang} href={url} />
      <link rel="alternate" hrefLang={altLang} href={`${baseUrl}${altPath}`} />
      <link rel="alternate" hrefLang="x-default" href={`${baseUrl}/`} />
    </Head>
  );
}
