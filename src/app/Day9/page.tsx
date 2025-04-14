"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Page = () => {
  const pathname = usePathname();
  return (
    <div className="flex flex-col gap-4 font-bold">
      <Link href={`${pathname}/solution-day9-start`}>
        solution-day9-start（以前の復習もかねて）
      </Link>
      <Link href={`${pathname}/solution1-day9`}>solution1-day9</Link>
      <Link href={`${pathname}/solution2-day9`}>solution2-day9</Link>
    </div>
  );
};

export default Page;
