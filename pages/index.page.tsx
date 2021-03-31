import React, { FC, useState, Fragment } from "react";
import Link from "next/link";
import { NextSeo } from "next-seo";
import Head from "next/head";

import AboutSection, { Team } from "../components/home/about";
import Hero from "../components/home/hero";
import EventsSection from "../components/home/eventsSection";
import NavFoot from "../components/NavFoot";
import BlogSection from "../components/home/Blog";

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
        title="MTs TechnoNatura Website"
        description="Website remaja MTs TechnoNatura"
        canonical={process.env.PUBLIC_URL}
        openGraph={{
          url: process.env.PUBLIC_URL,
          title: "MTs TechnoNatura Home Page",
          description: "Website buatan remaja MTs TechnoNatura"
        }}
      />

      <style jsx global>{`
        html {
          font-family: "Roboto", sans-serif;
          scroll-behavior: smooth;
        }
      `}</style>
      <NavFoot>
        <Hero />
        <Team />
        <EventsSection />
        <BlogSection />
      </NavFoot>
    </Fragment>
  );
}
