import Link from "next/link";
import { Fragment } from "react";
import { loginBG } from "../assets/data/Gambar";
import { NextSeo } from "next-seo";

export default function Login() {
  return (
    <Fragment>
      <NextSeo
        title="Login | MTs TechnoNatura"
        description="Login member komunits MTs TechnoNatura"
        canonical={process.env.PUBLIC_URL}
        openGraph={{
          url: process.env.PUBLIC_URL,
          title: "Halaman Login - MTs TechnoNatura",
          description: "Login member komunits MTs TechnoNatura"
        }}
      />

      <section className="relative py-20">
        <div className="absolute top-0 left-0 lg:bottom-0 h-112 lg:h-auto w-full lg:w-8/12 bg-gray-500"></div>
        <div className="relative container px-4 mx-auto">
          <div className="flex flex-wrap items-center -mx-4">
            <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
              <div className="max-w-md">
                <h2 className="mb-6 text-4xl lg:text-5xl font-bold text-white">
                  Lorem ipsum dolor sit amet consectutar domor at elis
                </h2>
                <p className="text-gray-50 lg:pr-10 leading-loose">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque massa nibh, pulvinar vitae aliquet nec, accumsan
                  aliquet orci.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-4">
              <div className="lg:max-w-md p-6 bg-gray-50 text-center rounded-lg">
                <form action="#">
                  <span className="text-sm text-gray-500 font-semibold uppercase">
                    Sign In
                  </span>
                  <h3 className="mb-8 text-2xl font-bold font-heading">
                    Join our community
                  </h3>
                  <input
                    className="w-full py-3 pl-3 mb-4 bg-white rounded-lg"
                    type="email"
                    placeholder="E-mail address"
                  />
                  <input
                    className="w-full py-3 pl-3 mb-4 bg-white rounded-lg"
                    type="password"
                    placeholder="Password"
                  />
                  <button className="w-full inline-block px-6 py-3 mb-4 text-sm text-white font-bold leading-loose bg-gray-500 hover:bg-gray-600 rounded transition duration-200">
                    Get Started
                  </button>
                  <a className="text-sm text-gray-500 hover:underline" href="#">
                    Forgot password?
                  </a>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
