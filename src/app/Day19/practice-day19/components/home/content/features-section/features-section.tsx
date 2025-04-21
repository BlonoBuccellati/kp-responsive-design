import SellingPointCard from "./selling-point-card";

const FeaturesSection = () => {
  return (
    <aside className="w-[32%] bg-[#136c72] p-[1.3rem] text-center text-white">
      <SellingPointCard title="Cheap">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam.
      </SellingPointCard>
      <SellingPointCard title="Quick">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam.
      </SellingPointCard>
      <SellingPointCard title="Affordable">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam.
      </SellingPointCard>
    </aside>
  );
};

export default FeaturesSection;
