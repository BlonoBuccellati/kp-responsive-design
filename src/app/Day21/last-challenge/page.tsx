import HomeFeaturesContent from "./components/home/features-section/features-content";
import HomeContent from "./components/home/content";
import HomeHeroSection from "./components/home/hero-section";
import HomeHeader from "./components/home/header";
import HomeAsideContents from "./components/home/aside-section/aside-contents";
import HomeFooter from "./components/home/footer/footer";

const Page = () => {
  return (
    <main className="">
      <HomeHeader />
      <HomeHeroSection />
      <HomeFeaturesContent />
      <HomeContent />
      <HomeAsideContents />
      <HomeFooter />
    </main>
  );
};
export default Page;
