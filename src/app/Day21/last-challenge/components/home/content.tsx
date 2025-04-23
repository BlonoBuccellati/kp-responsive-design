import Image from "next/image";
import HeroImage from "@/assets/hero-img.jpg";

const HomeContent = () => {
  return (
    <section>
      <h2>It doesn’t have to be so hard</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam.
      </p>
      {/* Image */}
      <Image src={HeroImage} width={100} height={100} alt="image" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam.
      </p>
    </section>
  );
};

export default HomeContent;
