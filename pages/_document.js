import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html className="overflow-x-hidden">
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/icon.png"></link>
          <meta name="application-name" content="Unboring KW" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="default" />
          <meta name="apple-mobile-web-app-title" content="Unboring KW" />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="msapplication-TileColor" content="#cbe0ea" />
          <meta name="msapplication-tap-highlight" content="no" />
          <meta name="theme-color" content="#51355a" />

          <link rel="shortcut icon" href="/favicon.ico" />
          <script src="https://kit.fontawesome.com/231142308d.js" async crossOrigin="anonymous"></script>

        </Head>
        <body className="overflow-x-hidden">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;