import FooterHome from "../../components/footer";
import Link from "next/link";
export default function DashboardOverview() {
  return (
    <>
      <script src="/js/main.js"></script>

      <div>
        <section
          className="xl:bg-contain bg-top bg-no-repeat"
          style={{
            backgroundImage: "url('/metis-assets/backgrounds/intersect.svg')"
          }}
        >
          <div className="container px-4 mx-auto">
            <nav className="flex justify-between items-center py-6">
              <a className="text-3xl font-semibold leading-none" href="#">
                <img className="h-10" src="/favicon.ico" alt="" width="auto" />
              </a>
              <div className="lg:hidden">
                <button className="navbar-burger flex items-center py-2 px-3 text-blue-600 hover:text-blue-700 rounded border border-blue-200 hover:border-blue-300">
                  <svg
                    className="fill-current h-4 w-4"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Mobile menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                  </svg>
                </button>
              </div>
              <ul className="hidden lg:flex lg:items-center lg:w-auto lg:space-x-12">
                <li>
                  <a
                    className="text-sm text-blueGray-400 hover:text-blueGray-500"
                    href="#"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    className="text-sm text-blueGray-400 hover:text-blueGray-500"
                    href="#"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    className="text-sm text-blueGray-400 hover:text-blueGray-500"
                    href="#"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    className="text-sm text-blueGray-400 hover:text-blueGray-500"
                    href="#"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    className="text-sm text-blueGray-400 hover:text-blueGray-500"
                    href=""
                  >
                    Shop
                  </a>
                </li>
              </ul>
              <div className="hidden lg:block">
                <a
                  className="mr-2 inline-block px-4 py-3 text-xs text-blue-600 hover:text-blue-700 font-semibold leading-none border border-blue-200 hover:border-blue-300 rounded"
                  href="/login"
                >
                  Log In
                </a>
                <a
                  className="inline-block px-4 py-3 text-xs font-semibold leading-none bg-blue-600 hover:bg-blue-700 text-white rounded"
                  href="/signup"
                >
                  Sign Up
                </a>
              </div>
            </nav>
            <div className="pt-12 text-center">
              <div className="max-w-lg mx-auto mb-8">
                <h2 className="text-3xl md:text-4xl mb-4 font-bold font-heading">
                  <span>Introducing</span>
                  <span className="text-blue-600">MTs TechnoNatura CMS</span>
                </h2>
                <p className="text-blueGray-400 leading-relaxed">
                  CMS to manage data on your MTs-TechnoNatura Account
                </p>
              </div>
              <div>
                <a
                  className="block sm:inline-block py-4 px-8 mb-4 sm:mb-0 sm:mr-3 text-xs text-white text-center font-semibold leading-none bg-blue-600 hover:bg-blue-700 rounded"
                  href="#"
                >
                  Try Now
                </a>
                <a
                  className="block sm:inline-block py-4 px-8 text-xs text-blueGray-500 hover:text-blueGray-600 text-center font-semibold leading-none bg-white rounded"
                  href="#"
                >
                  Documentation
                </a>
              </div>
            </div>
          </div>
          <div className="relative max-w-6xl mt-16 md:mt-8 mb-8 mx-auto">
            <img src="/metis-assets/elements/pattern.png" alt="" />
            <div
              className="absolute"
              style={{ top: "9%", left: " 14%", width: "72%", height: "66%" }}
            >
              <img
                className="rounded"
                src="/metis-assets/placeholders/metis-dashboard.png"
                alt=""
              />
            </div>
          </div>

          <div className="hidden navbar-menu relative z-50">
            <div className="navbar-backdrop fixed inset-0 bg-blueGray-800 opacity-25"></div>
            <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
              <div className="flex items-center mb-8">
                <a
                  className="mr-auto text-3xl font-semibold leading-none"
                  href="#"
                >
                  <img
                    className="h-10"
                    src="/metis-assets/logos/metis/metis.svg"
                    alt=""
                    width="auto"
                  />
                </a>
                <button className="navbar-close">
                  <svg
                    className="h-6 w-6 text-blueGray-400 cursor-pointer hover:text-blueGray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>
              </div>
              <div>
                <ul>
                  <li className="mb-1">
                    <a
                      className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-600"
                      href="#"
                    >
                      Product
                    </a>
                  </li>
                  <li className="mb-1">
                    <a
                      className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-600"
                      href="#"
                    >
                      Company
                    </a>
                  </li>
                  <li className="mb-1">
                    <a
                      className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-600"
                      href="#"
                    >
                      About Us
                    </a>
                  </li>
                  <li className="mb-1">
                    <a
                      className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-600"
                      href="#"
                    >
                      Features
                    </a>
                  </li>
                </ul>
                <div className="mt-4 pt-6 border-t border-blueGray-100">
                  <a
                    className="block px-4 py-3 mb-3 text-xs text-center font-semibold leading-none bg-blue-600 hover:bg-blue-700 text-white rounded"
                    href="#"
                  >
                    Sign Up
                  </a>
                  <a
                    className="block px-4 py-3 mb-2 text-xs text-center text-blue-600 hover:text-blue-700 font-semibold leading-none border border-blue-200 hover:border-blue-300 rounded"
                    href="#"
                  >
                    Log In
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </section>

        <section className="py-12 md:py-32 overflow-x-hidden">
          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap lg:flex-nowrap">
              <div className="relative w-full lg:w-1/2 order-1 lg:order-0 my-12 lg:my-0">
                <img
                  className="relative mx-auto rounded-xl w-full z-10"
                  src="https://images.unsplash.com/photo-1484308129484-ff3063eea281?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1080&amp;q=80"
                  alt=""
                />
                <img
                  className="absolute top-0 left-0 w-40 -ml-12 -mt-12"
                  src="/metis-assets/elements/blob-tear.svg"
                  alt=""
                />
                <img
                  className="absolute bottom-0 right-0 w-40 -mr-12 -mb-12"
                  src="/metis-assets/elements/blob-tear.svg"
                  alt=""
                />
              </div>
              <div className="w-full lg:w-1/2 lg:order-1">
                <div className="py-6 lg:pl-32">
                  <div className="mb-4">
                    <span className="text-xs py-1 px-3 text-blue-600 font-semibold bg-blue-50 rounded-xl">
                      The CMS Features
                    </span>
                    <h2 className="text-4xl mt-3 font-bold font-heading">
                      Key Features
                    </h2>
                  </div>
                  <div className="flex items-start py-4">
                    <div className="w-8 mr-5 text-blue-500">
                      <svg
                        className="w-8 h-8"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-semibold font-heading">
                        Open Source
                      </h3>
                      <p className="text-blueGray-400 leading-loose">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Veritatis expedita animi.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start py-4">
                    <div className="w-8 mr-5 text-blue-500">
                      <svg
                        className="w-8 h-8"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-semibold font-heading">
                        Simple
                      </h3>
                      <p className="text-blueGray-400 leading-loose">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Veritatis expedita animi.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start py-4">
                    <div className="w-8 mr-5 text-blue-500">
                      <svg
                        className="w-8 h-8"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-semibold font-heading">
                        Best access for all of the resources
                      </h3>
                      <p className="text-blueGray-400 leading-loose">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Veritatis expedita animi.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start py-4">
                    <div className="w-8 mr-5 text-blue-500">
                      <svg
                        className="w-8 h-8"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-semibold font-heading">
                        High Security
                      </h3>
                      <p className="text-blueGray-400 leading-loose">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Veritatis expedita animi.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap -mx-3">
              <div className="w-full md:w-1/2 px-3 order-1 md:order-0">
                <div className="max-w-md">
                  <h2 className="mb-4 text-3xl md:text-4xl font-bold font-heading">
                    Manage your MTs TechnoNatura Account
                  </h2>
                  <p className="mb-6 leading-loose text-blueGray-400">
                    Manage your MTs TechnoNatura Account in the easiest way
                  </p>
                  <ul>
                    <li className="py-4">
                      <span className="inline-block py-2 px-3 mr-4 text-xs font-semibold bg-green-50 text-green-600 rounded">
                        1
                      </span>
                      <span> Manage Blog</span>
                    </li>
                    <li className="py-4">
                      <span className="inline-block py-2 px-3 mr-4 text-xs font-semibold bg-green-50 text-green-600 rounded">
                        2
                      </span>
                      <span> Manage Account</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-full md:w-1/2 px-3 order-0 md:order-1 mb-12 md:mb-0">
                <img
                  className="sm:max-w-sm lg:max-w-full mx-auto"
                  src="/metis-assets/illustrations/work-tv.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="py-8 leading-7 text-gray-900 bg-white sm:py-12 md:py-16 lg:py-24">
        <div className="max-w-6xl px-4 px-10 mx-auto border-solid lg:px-12">
          <div className="flex flex-col items-start leading-7 text-gray-900 border-0 border-gray-200 lg:items-center lg:flex-row">
            <div className="box-border flex-1 text-center border-solid sm:text-left">
              <h2 className="m-0 text-4xl font-semibold leading-tight tracking-tight text-left text-black border-0 border-gray-200 sm:text-5xl">
                Ready to get started?
              </h2>
              <p className="mt-2 text-xl text-left text-gray-900 border-0 border-gray-200 sm:text-2xl">
                Our service will help you maximize and boost your productivity.
              </p>
            </div>
            <a
              href="#_"
              className="inline-flex items-center justify-center w-full px-5 py-4 mt-6 ml-0 font-sans text-base leading-none text-white no-underline bg-indigo-600 border border-indigo-600 border-solid rounded cursor-pointer md:w-auto lg:mt-0 hover:bg-indigo-700 hover:border-indigo-700 hover:text-white focus-within:bg-indigo-700 focus-within:border-indigo-700 focus-within:text-white sm:text-lg lg:ml-6 md:text-xl"
            >
              Get Started
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 ml-2"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>
        </div>
      </section>

      <FooterHome />
    </>
  );
}
