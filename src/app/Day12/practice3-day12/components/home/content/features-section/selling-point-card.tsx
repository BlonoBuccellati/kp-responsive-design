import { PropsWithChildren } from "react";

interface SellingPointCardProps {
  title: string;
  className?: string;
}

const SellingPointCard = ({
  title,
  className,
  children,
}: PropsWithChildren<SellingPointCardProps>) => {
  return (
    <div>
      <h1 className={`my-6 text-3xl font-black ${className}`}>{title}</h1>
      <p className="my-3">{children}</p>
    </div>
  );
};

export default SellingPointCard;
