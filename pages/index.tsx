import { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

type Locale = "zh-HK" | "en";

const defaultLanguage: Locale = "en";

function getPreferredLocale(languages: readonly string[]): Locale {
  const preferredLanguage = languages[0]?.toLowerCase();

  if (preferredLanguage === "en" || preferredLanguage?.startsWith("en-")) {
    return "en";
  }

  return defaultLanguage;
}

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    const locale = getPreferredLocale(
      navigator.languages?.length ? navigator.languages : [navigator.language]
    );
    router.replace(`/${locale}/`);
  }, [router]);

  return (
    <>
      <Head>
        <title>The Fashion Ventures | Fashion Market Entry and Venture Building</title>
        <meta name="robots" content="noindex,follow" />
        <link rel="canonical" href="https://thefashionventures.com/en/" />
      </Head>
      <div className="grid min-h-screen place-items-center bg-neutral-950 text-white">
        <p>Redirecting...</p>
      </div>
    </>
  );
}
