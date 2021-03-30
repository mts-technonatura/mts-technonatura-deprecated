import Link from "next/link";
import Image from "next/image";
import { heroBG, photoBareng } from "../../assets/data/Gambar";

export default function Hero(): JSX.Element {
  return (
    <div className="bg-gray-50 pt-12 lg:pt-20 pb-20 ">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-1/2 px-4 mb-12 md:mb-20 lg:mb-0 flex items-center">
            <div className="w-full text-center lg:text-left">
              <div className="max-w-md mx-auto lg:mx-0">
                <h1 className="mb-3 text-4xl lg:text-5xl font-bold font-heading">
                  MTs TechnoNatura
                </h1>
              </div>
              <div className="max-w-sm mx-auto lg:mx-0">
                <p className="mb-6 text-gray-400 leading-loose">
                  Website remaja MTs TechnoNatura Depok
                </p>
                <div>
                  <a
                    className="inline-block mb-3 lg:mb-0 lg:mr-3 w-full lg:w-auto py-2 px-6 leading-loose bg-green-600 hover:bg-green-700 text-white font-semibold rounded-l-xl rounded-t-xl transition duration-200"
                    href="#"
                  >
                    Contact Student
                  </a>
                  <a
                    className="inline-block w-full lg:w-auto py-2 px-6 leading-loose font-semibold bg-white hover:bg-gray-50 rounded-l-xl rounded-t-xl transition duration-200"
                    href="#"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-4 flex items-center justify-center">
            <div className="relative" style={{ zIndex: 0 }}>
              <Image
                className="w-full max-w-lg object-cover rounded-3xl md:rounded-br-none"
                height="512px"
                width="800px"
                src={photoBareng}
                alt=""
              />
              <img
                className="hidden md:block absolute"
                style={{ top: "-2rem", right: "3rem", zIndex: -1 }}
                src="https://shuffle.dev/atis-assets/elements/green-dark-up.svg"
                alt=""
              />
              <img
                className="hidden md:block absolute"
                style={{ bottom: "-2rem", right: "-2rem", zIndex: -1 }}
                src="https://shuffle.dev/atis-assets/elements/wing-green-down.svg"
                alt=""
              />
              <img
                className="hidden md:block absolute"
                style={{ top: "3rem", right: "-3rem", zIndex: -1 }}
                src="https://shuffle.dev/atis-assets/elements/bullets-gray-right.svg"
                alt=""
              />
              <img
                className="hidden md:block absolute"
                style={{ bottom: "2.5rem", left: "-4.5rem", zIndex: -1 }}
                src="https://shuffle.dev/atis-assets/elements/bullets-gray-left.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
