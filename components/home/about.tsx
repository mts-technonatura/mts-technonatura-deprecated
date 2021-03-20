import { FC } from "react";

export default function AboutSection(): JSX.Element {
  return (
    <section className="flex items-center justify-center py-10 text-white bg-white sm:py-16 md:py-24 lg:py-32">
      <div className="relative max-w-3xl px-10 text-center text-white auto lg:px-0">
        <div className="flex flex-col w-full md:flex-row">
          <div className="flex justify-between">
            <h1 className="relative flex flex-col text-6xl font-extrabold text-left text-black">
              We Create
              <span>Things.</span>
            </h1>
          </div>
          <div className="relative top-0 right-0 h-64 mt-12 md:-mt-16 md:absolute md:h-96">
            <img
              src="https://cdn.devdojo.com/images/december2020/designs3d.png"
              className="object-cover mt-3 mr-5 h-80 lg:h-96"
            />
          </div>
        </div>

        <div className="my-16 border-b border-gray-300 lg:my-24"></div>

        <h2 className="text-left text-gray-500 xl:text-xl">
          Building beautiful designs for your next project. We've unlocked the
          secret to converting visitors into customers. Download our re-usable
          and extandable components today.
        </h2>
      </div>
    </section>
  );
}

export const Team: FC = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded shadow-sm lg:flex-row sm:mx-auto">
        <div className="relative lg:w-1/2">
          <img
            src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt="MTs TechnoNatura Team Image"
            className="object-cover w-full lg:absolute h-80 lg:h-full"
          />
          <svg
            className="absolute top-0 right-0 hidden h-full text-white lg:inline-block"
            viewBox="0 0 20 104"
            fill="currentColor"
          >
            <polygon points="17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104" />
          </svg>
        </div>
        <div className="flex flex-col justify-center p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2">
          <h5 className="mb-3 text-3xl font-extrabold leading-none sm:text-4xl">
            See the MTs Students
          </h5>
          <p className="mb-5 text-gray-800">
            There are many students in{" "}
            <span className="font-bold">MTs Technonatura</span> from 1st Junior
            High School through the 3rd Junior High School. Each student have
            their own interest. Want to find out more? Check the link below!
          </p>
          <div className="flex items-center">
            <button
              type="submit"
              className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
            >
              Get started
            </button>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Learn More
              <svg
                className="inline-block w-3 ml-2"
                fill="currentColor"
                viewBox="0 0 12 12"
              >
                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
