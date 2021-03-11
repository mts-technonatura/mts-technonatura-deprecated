import "tailwindcss/tailwind.css";

import { useState } from "react";

import Head from "next/head";
import { AppProps } from "next/app";
import { useEffect } from "react";
import * as gtag from "../utils/gtag";
import { useRouter } from "next/router";

import FooterComponent, { FooterHome } from "../components/footer";
import Navbar from "../components/navbar";
import ProgressLoad from "../components/ProgressLoad";
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

  let path: string = router.pathname;
  let [Nav, setNav] = useState<boolean>();
  let [Footer, setFooter] = useState<JSX.Element | boolean>(FooterComponent);

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  // useEffect(() => {
  // console.log(path);

  //   const onIndex: number = doesntAlllowedNavAndFooter.findIndex(
  //     (site) => site === path
  //   );
  //   console.log(onIndex);
  //   if (onIndex !== -1) {
  //     setNav(false);
  //     setFooter(false);
  //   } else {
  //     switch (path) {
  //       case "/":
  //         console.log("hey");
  //         setNav(true);
  //         setFooter(FooterHome);
  //         break;
  //       default:
  //         setNav(true);
  //         setFooter(FooterComponent);
  //         break;
  //     }
  //   }
  // }, [path]);

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
        <meta name="theme-color" content="#f0efeb" />
      </Head>
      <ProgressLoad />
      {/* {<Navbar /> && Nav} */}
      <Component {...pageProps} />

      {/* {Footer ? Footer : ""} */}
    </>
  );
}

export default MyApp;
