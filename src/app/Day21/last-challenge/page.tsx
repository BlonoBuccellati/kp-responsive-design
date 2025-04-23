import HomeFeaturesContent from "./components/home/features-content";
import HomeContent from "./components/home/content";
import HomeHeroSection from "./components/home/hero-section";
import HomeHeader from "./components/home/header";
import HomeAsideContents from "./components/home/aside-contents";
import HomeFooter from "./components/home/footer";

const Page = () => {
  return (
    <main>
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
