import "@/styles/globals.css";
import type { AppProps } from "next/app";

import {
  I18nProvider,
  defaultLanguage,
  defaultNamespace,
  languages,
  namespaces
} from "next-i18next-static-site";

import locales from "../lib/locales";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <I18nProvider
      i18n={{
        languages,
        defaultLanguage,
        namespaces,
        defaultNamespace,
        locales,
        debug: false
      }}
    >
      <Component {...pageProps} />
    </I18nProvider>
  );
}
