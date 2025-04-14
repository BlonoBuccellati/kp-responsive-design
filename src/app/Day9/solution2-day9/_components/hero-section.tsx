import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="bg-[#23424a] py-25 text-white">
      <div className="mx-auto flex w-[80%] max-w-[1100px] justify-between">
        <div className="w-[62%]">
          {/* キャッチコピー */}
          <h1 className="mb-6 text-5xl font-bold">
            Responsive layouts don’t have to be a struggle
          </h1>
          {/* サブコピー */}
          <p className="mt-3 mb-10 leading-[1.125]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
          {/* CTAボタン */}
          <a className="inline-block rounded-full bg-[#38cfd9] px-[2em] py-[.75em] leading-tight font-black text-[#23424a] uppercase hover:cursor-pointer hover:opacity-75">
            I want to learn
          </a>
        </div>
        <div className="flex w-[32%] max-w-full items-start">
          <Image
            src="/assets/hero-img.jpg"
            alt="responsive"
            width={450}
            height={450}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
