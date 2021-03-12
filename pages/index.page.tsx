import React, { FC, useState, Fragment } from "react";
import Link from "next/link";
import { NextSeo } from "next-seo";
import Head from "next/head";

import AboutSection, { Team } from "../components/home/about";
import Hero from "../components/home/hero";
import EventsSection from "../components/home/eventsSection";
import Navbar from "../components/navbar";
import BlogSection from "../components/home/Blog";
import { FooterHome } from "../components/footer";

const title = "Home | MTs TechnoNatura";
const description =
  "Website resmi Remaja Madrasah Tsanawiyah TechnoNatura Depok. Website buatan para programmer MTs.";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
      </Head>
      <NextSeo
        title={title}
        description={description}
        canonical={process.env.PUBLIC_URL}
        openGraph={{
          url: process.env.PUBLIC_URL,
          title,
          description,
          type: "website",
          images: [
            {
              url: `${process.env.PUBLIC_URL}/ogp-img.png`,
              width: 256,
              height: 256,
              alt: "Mts Techno Natura Open Graph"
            }
          ],
          site_name: "MTs Technonatura"
        }}
      />
      <style jsx global>{`
        html {
          font-family: "Roboto", sans-serif;
          scroll-behavior: smooth;
        }
      `}</style>
      <Navbar />
      <Hero />
      <AboutSection />
      <Team />
      <EventsSection />
      <BlogSection />
      <FooterHome />
    </Fragment>
  );
}
