import "tailwindcss/tailwind.css";
import { ThemeProvider, useTheme } from "@material-ui/core/styles";

/* Important Scripts */
import { DefaultSeo } from "next-seo";
import Head from "next/head";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
/* Important Scripts */

/* Additional Scripts */
import * as gtag from "../utils/gtag";
import SEO from "../seo.config";
/* Additional Scripts */

/* Components */
import ProgressLoad from "../components/ProgressLoad";
/* Components */
declare global {
  interface Window {
    gtag: (event: string, name: any, obj: object) => void;
  }
}

interface reportWebVitalsI {
  id: string;
  name: string;
  label: string;
  value: number;
}
export function reportWebVitals({ id, name, label, value }: reportWebVitalsI) {
  window.gtag("event", name, {
    event_category: label === "web-vital" ? "Web Vitals" : "Next.js metric",
    value: Math.round(name === "CLS" ? value * 1000 : value),
    event_label: id,
    non_interaction: true
  });
}

const doesntAlllowedNavAndFooter: string[] = [
  "/login",
  "/signup",
  "/docs/changelog"
];

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const theme = useTheme();

  let path: string = router.pathname;

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta
          name="google-site-verification"
          content={
            gtag.GOOGLE_VERIF || "pYKlXre7UF2sT8gpx6Nf8NKJLM0H5hkh80XIWEmO-yo"
          }
        />

        <meta name="yandex-verification" content="356dad746d43cc34" />

        <meta name="theme-color" content="#f0efeb" />

        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" href="/favicon.png"></link>

        <title>Madrasah Tsanawiyah Techno Natura Depok</title>
        <meta
          name="description"
          content="Website Madrasah Tsanawiyah Techno Natura"
        />
      </Head>

      <ThemeProvider theme={theme}>
        <DefaultSeo {...SEO} />

        <ProgressLoad />
        {/* {<Navbar /> && Nav} */}
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
