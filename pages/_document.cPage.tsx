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
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MGMF2TJ');
              `
            }}
          ></script>
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

          <meta name="geo.region" content="ID" />
          <meta name="geo.placename" content="Depok, Jawa Barat" />
          <link rel="shortlink" href={process.env.PUBLIC_URL} />
          <link rel="canonical" href={process.env.PUBLIC_URL} />

          <meta name="og:url" content={process.env.PUBLIC_URL} />
          <meta name="og:type" content="website" />
          <meta
            name="og:image"
            content={`${process.env.PUBLIC_URL}/open-graph/og-img-big.png`}
          />
          <meta
            property="og:image:alt"
            content="Madrasah Tsanawiyah Techno Natura Log Open Graph Big Version"
          />
          <meta property="og:image:width" content="1280" />
          <meta property="og:image:height" content="640" />
          <meta
            name="og:image"
            content={`${process.env.PUBLIC_URL}/open-graph/og-img-small.png`}
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
          <noscript
            dangerouslySetInnerHTML={{
              __html: `
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-MGMF2TJ"
              height="0"
              width="0"
              style="display: none; visibility: hidden"
            ></iframe>
            `
            }}
          ></noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
