import Document, { Html, Head, Main, NextScript } from "next/document";
import { DocumentContext } from "next/document";

import { GA_TRACKING_ID } from "../utils/gtag";

export default class Root extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href={process.env.PUBLIC_URL + "/favicon.ico"} />
          <link
            rel="apple-touch-icon"
            href={process.env.PUBLIC_URL + "/logo192-apple-touch.png"}
          />
          <link
            rel="manifest"
            href={process.env.PUBLIC_URL + "/manifest.json"}
          />

          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_TRACKING_ID}', {
                  page_path: window.location.pathname,
                });
              `
            }}
          />

          <meta charSet="utf-8" />

          <meta
            name="keywords"
            content="Madrasah Tsanawiyah Techno Natura, karya ilmiah remaja ,karya ilmiah remaja Madrasah Tsanawiyah Techno Natura, indonesia, madrasah, techno natura depok, madrasah tsanawiyah, madrasah tsanawiyah techno natura, madrasah tsanawiyah techno natura depok, MTs Technonatura, MTS Depok, MTS Techno, SMP Technonatura, smp technonatura, smp techno"
          />

          <meta name="robots" content="index,follow" />
          <meta name="googlebot" content="index,follow" />

          <meta name="og:url" content="https://MIT-JHS.github.io/" />
          <meta name="og:type" content="website" />
          <meta
            name="og:title"
            content="Website Madrasah Tsanawiyah Techno Natura"
          />
          <meta
            name="og:description"
            content="Website Madrasah Tsanawiyah Techno Natura"
          />
          <meta
            name="og:image"
            content="https://MIT-JHS.github.io/open-graph/og-img-big.png"
          />
          <meta
            property="og:image:alt"
            content="Madrasah Tsanawiyah Techno Natura Log Open Graph Big Version"
          />
          <meta property="og:image:width" content="1280" />
          <meta property="og:image:height" content="640" />
          <meta
            name="og:image"
            content="https://MIT-JHS.github.io/open-graph/og-img-small.png"
          />
          <meta
            property="og:image:alt"
            content="Madrasah Tsanawiyah Techno Natura Log Open Graph Small Version"
          />
          <meta property="og:image:width" content="512" />
          <meta property="og:image:height" content="512" />
          <meta
            property="og:site_name"
            content="Website Madrasah Tsanawiyah Techno Natura Depok"
          />

          <link rel="canonical" href={process.env.PUBLIC_URL} />

          <meta name="cannonical" content={process.env.PUBLIC_URL} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
