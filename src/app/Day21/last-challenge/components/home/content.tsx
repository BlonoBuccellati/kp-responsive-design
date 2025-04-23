import Image from "next/image";
import HeroImage from "@/assets/image.jpg";

const HomeContent = () => {
  return (
    <section className="p-8">
      <h2 className="text-matte-beige text-preset-5">
        It doesn’t have to be so hard
      </h2>
      <p className="text-preset-3 py-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam.
      </p>
      {/* Image */}
      <Image
        src={HeroImage}
        width={100}
        height={100}
        alt="image"
        className="w-full py-4"
      />
      <p className="text-preset-3 py-3">
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
