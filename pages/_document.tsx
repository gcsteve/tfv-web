import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    const locale =
      (this.props.__NEXT_DATA__.props.pageProps as { lang?: string })?.lang ||
      "en";

    return (
      <Html lang={locale}>
        <Head>
          <link rel="icon" type="image/png" href="/favicon.png" />
          <link rel="apple-touch-icon" href="/favicon.png" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Serif+HK:wght@400;500;600;700&family=Noto+Serif:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
