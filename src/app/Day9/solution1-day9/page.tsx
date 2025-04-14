import HeroSection from "./_components/hero-section";
import SellingPointCard from "./_components/selling-point-card";

// 答え
const Page = () => {
  return (
    <>
      {/* mainはページ全体（１個しかない）の本文エリア。articleは、mainの中に、独立して複数存在する。 */}
      <main className="font-roboto text-[1.3rem]">
        {/* ヒーローセクション */}
        <HeroSection />
        {/* 複数存在するが、独立していないので、articleではなくsectionを使用する */}
        {/* 特徴 */}
        <section className="px-25 text-center">
          <div className="m-auto flex max-w-[1100px] gap-5">
            <SellingPointCard title="Cheap" className="text-[#87629A]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </SellingPointCard>
            <SellingPointCard title="Quick" className="text-[#87629A]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </SellingPointCard>
            <SellingPointCard title="Affordable" className="text-[#87629A]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </SellingPointCard>
          </div>
        </section>
        {/* 特徴(詳細？) */}
        <section className="bg-[#23424a] p-[3em] text-center text-white">
          <div className="mx-auto flex max-w-[1100px] gap-7">
            <SellingPointCard title="Cheap">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </SellingPointCard>
            <SellingPointCard title="Quick">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </SellingPointCard>
          </div>
        </section>
      </main>
    </>
  );
};

export default Page;
