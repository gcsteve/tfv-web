import Head from "next/head";

type SeoProps = {
  lang: "zh-HK" | "en";
  path: string;
  title: string;
  description: string;
};

const baseUrl = "https://thefashionventures.com";
const socialImageUrl = `${baseUrl}/favicon.png`;

export default function Seo({ lang, path, title, description }: SeoProps) {
  const url = `${baseUrl}${path}`;
  const canonicalUrl = lang === "zh-HK" ? `${baseUrl}/en/` : url;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={socialImageUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={socialImageUrl} />
      <link rel="canonical" href={canonicalUrl} />
      <link rel="alternate" hrefLang="en" href={`${baseUrl}/en/`} />
      <link rel="alternate" hrefLang="x-default" href={`${baseUrl}/en/`} />
    </Head>
  );
}
