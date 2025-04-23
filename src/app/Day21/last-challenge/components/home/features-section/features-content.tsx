import FeatureCard from "./feature-card";

const HomeFeaturesContent = () => {
  return (
    <section className="text-preset-3 bg-[#e6e6e0] p-8">
      <div className="mb-2.5">
        <FeatureCard title="Mobile-first">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </FeatureCard>
        <FeatureCard title="Efficient">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </FeatureCard>
        <FeatureCard title="Done right">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </FeatureCard>
      </div>
    </section>
  );
};

export default HomeFeaturesContent;
