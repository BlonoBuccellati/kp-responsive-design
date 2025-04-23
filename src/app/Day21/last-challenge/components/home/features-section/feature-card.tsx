import { PropsWithChildren } from "react";
interface FeatureCardProps {
  title: string;
}
const FeatureCard = ({
  children,
  title,
}: PropsWithChildren<FeatureCardProps>) => {
  return (
    <div className="px-8 md:max-w-[380px] md:text-center">
      <h2 className="text-matte-beige text-preset-5 my-5">{title}</h2>
      <p>{children}</p>
    </div>
  );
};

export default FeatureCard;
