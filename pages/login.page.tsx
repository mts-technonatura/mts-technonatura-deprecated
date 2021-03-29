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

      <section className="bg-purple-900">
        <div className="px-0 py-20 mx-auto max-w-7xl sm:px-4">
          <div className="w-full px-4 pt-5 pb-6 mx-auto mt-8 mb-6 bg-white rounded-none shadow-xl sm:rounded-lg sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12 sm:px-6">
            <h1 className="mb-4 text-lg font-semibold text-left text-gray-900">
              Log in to your account
            </h1>
            <form className="mb-8 space-y-4">
              <label className="block">
                <span className="block mb-1 text-xs font-medium text-gray-700">
                  Your Email
                </span>
                <input
                  className="form-input"
                  type="email"
                  placeholder="Ex. james@bond.com"
                  required
                />
              </label>
              <label className="block">
                <span className="block mb-1 text-xs font-medium text-gray-700">
                  Your Password
                </span>
                <input
                  className="form-input"
                  type="password"
                  placeholder="••••••••"
                  required
                />
              </label>
              <input
                type="submit"
                className="w-full py-3 mt-1 btn btn-primary"
                value="Login"
              />
            </form>
          </div>
          <p className="mb-4 text-xs text-center text-gray-400">
            <a href="#" className="text-purple-200 underline hover:text-white">
              Create an account
            </a>
            ·
            <a href="#" className="text-purple-200 underline hover:text-white">
              Forgot password
            </a>
            ·
            <a href="#" className="text-purple-200 underline hover:text-white">
              Privacy & Terms
            </a>
          </p>
        </div>
      </section>
    </Fragment>
  );
}
