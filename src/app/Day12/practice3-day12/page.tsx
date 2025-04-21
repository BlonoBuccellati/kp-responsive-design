import HomeHeader from "./components/home/header/home-header";
import HomeHero from "./components/home/hero/home-hero";
import HomeContent from "./components/home/content/home-content";
// 答え
const Page = () => {
  return (
    <>
      {/* mainはページ全体（１個しかない）の本文エリア。articleは、mainの中に、独立して複数存在する。 */}
      <main className="font-roboto text-[1.3rem]">
        {/* ナビゲーションバー */}
        <HomeHeader />
        {/* ヒーローセクション */}
        <HomeHero />
        {/* 複数存在するが、独立していないので、articleではなくsectionを使用する */}
        {/* 特徴 */}
        <HomeContent />
      </main>
    </>
  );
};

export default Page;
