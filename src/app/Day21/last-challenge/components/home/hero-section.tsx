const HomeHeroSection = () => {
  return (
    <section className="bg-matte-gray min-h-[92vh] p-8 text-white md:flex">
      <div className="mx-auto max-w-[99%] md:flex">
        <h1 className="text-preset-2 max-w-[550px] leading-[clamp(3.4rem,10vw+.8rem,6.5rem)]">
          Responsive layouts{" "}
          <span className="text-matte-beige">don’t have to be a struggle</span>
        </h1>
        <div className="max-w-[440px] md:mt-40">
          <p className="text-preset-3 my-7 leading-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <a
            href="#"
            className="text-preset-5 bg-matte-beige inline-block rounded-full px-9 py-1 text-center uppercase hover:opacity-75"
          >
            I want to learn
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomeHeroSection;
