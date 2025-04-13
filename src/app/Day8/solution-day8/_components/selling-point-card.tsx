import { PropsWithChildren } from "react";

interface SellingPointCardProps {
  title: string;
}

const SellingPointCard = ({
  title,
  children,
}: PropsWithChildren<SellingPointCardProps>) => {
  return (
    <div className="">
      <h1 className="my-6 text-3xl font-black">{title}</h1>
      <p className="my-3">{children}</p>
    </div>
  );
};

export default SellingPointCard;
