"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Page = () => {
  const pathname = usePathname();
  return (
    <div className="flex flex-col gap-4 font-bold">
      <Link href={`${pathname}/practice-day12`}>practice-day12</Link>
      <Link href={`${pathname}/practice2-day12`}>practice2-day12</Link>
      <Link href={`${pathname}/practice3-day12`}>practice3-day12</Link>
      <Link href={`${pathname}/practice4-day12`}>practice4-day12</Link>
      <Link href={`${pathname}/challenges`}>challenges</Link>
    </div>
  );
};

export default Page;
