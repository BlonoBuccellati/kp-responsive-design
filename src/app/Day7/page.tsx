"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Page = () => {
  const pathname = usePathname();
  return (
    <div className="flex flex-col gap-4 font-bold">
      <Link href={`${pathname}/solution-day5-answer`}>
        solution-day5-answer
      </Link>
    </div>
  );
};

export default Page;
