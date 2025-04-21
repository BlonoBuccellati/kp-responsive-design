"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Page = () => {
  const pathname = usePathname();
  return (
    <div className="flex flex-col gap-4 font-bold">
      <Link href={`${pathname}/solution1-day11`}>solution1-day11</Link>
    </div>
  );
};

export default Page;
