import { PropsWithChildren } from "react";
interface AsideCardProps {
  title: string;
  className?: string;
}
const AsideCard = ({
  title,
  children,
  className,
}: PropsWithChildren<AsideCardProps>) => {
  return (
    <div className={`bg-matte-dark my-5 p-6 text-center ${className} w-full`}>
      <h2 className="text-preset-5 my-3">{title}</h2>
      <p className="text-preset-3">{children}</p>
    </div>
  );
};

export default AsideCard;
