import HeroSection from "./_components/hero/hero-section";
import NavHeader from "./_components/header/nav-header";
import SellingPointCard from "./_components/selling-point-card";
// 答え
const Page = () => {
  return (
    <>
      {/* mainはページ全体（１個しかない）の本文エリア。articleは、mainの中に、独立して複数存在する。 */}
      <main className="font-roboto text-[1.3rem]">
        {/* ナビゲーションバー */}
        <NavHeader />
        {/* ヒーローセクション */}
        <HeroSection />
        {/* 複数存在するが、独立していないので、articleではなくsectionを使用する */}
        {/* 特徴 */}
        <div className="m-auto my-10 flex w-[80%] max-w-[1100px] justify-between gap-4 leading-tight">
          <section className="w-[62%]">
            <div className="m-auto flex max-w-[1100px] flex-col gap-5">
              <h2 className="text-3xl font-black text-[#87629A]">
                Quality designs made custom, on demand, just for you
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam.
              </p>
            </div>
          </section>
          {/* 特徴(詳細？) asideらしい。*/}
          <aside className="w-[32%] bg-[#136c72] p-[1.3rem] text-center text-white">
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
            <SellingPointCard title="Affordable">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </SellingPointCard>
          </aside>
        </div>
      </main>
    </>
  );
};

export default Page;
