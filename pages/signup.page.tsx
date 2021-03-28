import { NextSeo } from "next-seo";
import Link from "next/link";
import { Fragment } from "react";

const title = "Signup | MTs Techno Natura";
const description =
  "Join komunitas website MTs Techno Natura sekarang! Website resmi Remaja Madrasah Tsanawiyah Technonatura Depok. Website buatan para programmer MTs.";

export default function signup() {
  return (
    <Fragment>
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
          site_name: "MTs TechnoNatura"
        }}
      />
      <section>
        <div className="flex flex-wrap">
          <div className="pt-6 lg:pt-16 pb-6 w-full lg:w-1/2">
            <div className="max-w-md mx-auto">
              <div className="mb-6 lg:mb-20 w-full px-3 flex items-center justify-between">
                <Link href="/">
                  <a className="text-3xl font-bold leading-none">
                    <img
                      className="h-12"
                      src="https://shuffle.dev/atis-assets/logo/atis/atis-mono-black.svg"
                      alt=""
                      width="auto"
                    />
                  </a>
                </Link>

                <Link href="/login">
                  <a className="py-2 px-6 text-xs rounded-l-xl rounded-t-xl bg-green-100 hover:bg-green-200 text-green-600 font-bold transition duration-200">
                    Sign In
                  </a>
                </Link>
              </div>
              <div>
                <div className="mb-6 px-3">
                  <span className="text-gray-500">Sign Up</span>
                  <h3 className="text-2xl font-bold">Create an account</h3>
                </div>
                <form action="">
                  <div className="flex flex-wrap">
                    <div className="mb-3 w-full lg:w-1/2 px-2">
                      <input
                        className="w-full p-4 text-xs bg-gray-50 outline-none rounded"
                        type="text"
                        placeholder="First Name"
                      />
                    </div>
                    <div className="mb-3 w-full lg:w-1/2 px-2">
                      <input
                        className="w-full p-4 text-xs bg-gray-50 outline-none rounded"
                        type="text"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                  <div className="mb-3 flex p-4 mx-2 bg-gray-50 rounded">
                    <input
                      className="w-full text-xs bg-gray-50 outline-none"
                      type="email"
                      placeholder="name@email.com"
                    />
                    <svg
                      className="h-6 w-6 ml-4 my-auto text-gray-300"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                      ></path>
                    </svg>
                  </div>
                  <div className="mb-6 flex p-4 mx-2 bg-gray-50 rounded">
                    <input
                      className="w-full text-xs bg-gray-50 outline-none"
                      type="password"
                      placeholder="Enter your password"
                    />
                    <button>
                      <svg
                        className="h-6 w-6 ml-4 my-auto text-gray-300"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        ></path>
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        ></path>
                      </svg>
                    </button>
                  </div>
                  <div className="px-3 text-center">
                    <button className="mb-2 w-full py-4 bg-green-600 hover:bg-green-700 rounded text-sm font-bold text-gray-50 transition duration-200">
                      Sign Up
                    </button>
                    <span className="text-gray-400 text-xs">
                      <span>Already have an account?</span>
                      <a className="text-green-600 hover:underline" href="#">
                        Sign In
                      </a>
                    </span>
                    <p className="mt-16 text-xs text-gray-400">
                      <a className="underline hover:text-gray-500" href="#">
                        Policy privacy
                      </a>{" "}
                      and{" "}
                      <a className="underline hover:text-gray-500" href="#">
                        Terms of Use
                      </a>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="hidden lg:block relative w-full lg:w-1/2 bg-green-600">
            <div
              className="absolute bottom-0 inset-x-0 mx-auto mb-12 max-w-xl text-center"
              style={{ zIndex: 10 }}
            >
              <img
                className="lg:max-w-xl mx-auto"
                src="https://shuffle.dev/atis-assets/illustrations/pablo-coming-soon-dark-mono.png"
                alt=""
              />
              <h2 className="mb-2 text-2xl text-white font-bold">
                So much more than a business analytics tool
              </h2>
              <div className="max-w-lg mx-auto">
                <p className="mb-6 text-gray-50 leading-loose">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque efficitur nisl sodales egestas lobortis.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:hidden bg-green-600 w-full">
            <div className="relative w-full">
              <img
                className="relative mx-auto max-w-sm mt-4 mb-4 block"
                src="atis-assets/illustrations/pablo-coming-soon-dark-mono.png"
                alt=""
              />
              <div className="flex justify-center space-x-3">
                <button className="p-1 bg-green-500 rounded-full"></button>
                <button className="p-1 bg-green-500 rounded-full"></button>
                <button className="p-1 bg-white rounded-full"></button>
                <button className="p-1 bg-green-500 rounded-full"></button>
              </div>
            </div>
            <div className="py-10 px-3 text-center" style={{ zIndex: 10 }}>
              <h2 className="mb-2 text-2xl text-white font-bold">
                So much more than a business analytics tool
              </h2>
              <p className="mb-6 text-gray-50 leading-loose">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque efficitur nisl sodales egestas lobortis.
              </p>
              <a
                className="py-2 px-6 rounded-t-xl rounded-l-xl rounded-l-xl bg-white hover:bg-gray-500 text-gray-900 hover:text-white transition duration-200 font-bold"
                href="#"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
