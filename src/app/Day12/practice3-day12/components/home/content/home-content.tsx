import FeaturesSection from "./features-section/features-section";

const HomeContent = () => {
  return (
    <section className="m-auto my-10 flex w-[80%] max-w-[1100px] justify-between gap-4 leading-tight">
      <div className="w-[62%]">
        <div className="m-auto flex max-w-[1100px] flex-col gap-5">
          <h2 className="text-3xl font-black text-[#87629A]">
            Quality designs made custom, on demand, just for you
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam.
          </p>
        </div>
      </div>
      {/* 特徴(詳細？) asideらしい。*/}
      <FeaturesSection />
    </section>
  );
};

export default HomeContent;
