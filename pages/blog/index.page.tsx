export default function BlogPage() {
  return (
    <section className="w-full px-3 antialiased bg-indigo-600 lg:px-6">
      <div className="container py-32 mx-auto text-center sm:px-4">
        <h1 className="text-4xl font-extrabold leading-10 tracking-tight text-white sm:text-5xl sm:leading-none md:text-6xl xl:text-7xl">
          <span className="block">MTs TechnoNatura Blog.</span>{" "}
        </h1>
        <div className="max-w-lg mx-auto mt-3 text-sm text-center text-indigo-200 md:mt-12 sm:text-base md:max-w-xl md:text-lg xl:text-xl">
          If you are ready to change the way you design websites, then you'll
          want to use our block builder to make it fun and easy!
        </div>
        <div className="relative flex items-center max-w-md mx-auto mt-12 overflow-hidden text-center rounded-full">
          <input
            type="text"
            name="email"
            placeholder="Email Address"
            className="w-full h-12 px-6 py-2 font-medium text-indigo-800 focus:outline-none"
          />
          <span className="relative top-0 right-0 block">
            <button
              type="button"
              className="inline-flex items-center w-32 h-12 px-8 text-base font-bold leading-6 text-white transition duration-150 ease-in-out bg-indigo-400 border border-transparent hover:bg-indigo-700 focus:outline-none active:bg-indigo-700"
            >
              Sign Up
            </button>
          </span>
        </div>
        <div className="mt-8 text-sm text-indigo-300">
          By signing up, you agree to our terms and services.
        </div>
      </div>
    </section>
  );
}
