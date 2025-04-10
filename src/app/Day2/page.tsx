"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
const Day2 = () => {
  const pathname = usePathname();
  return (
    <>
      <div className="flex flex-col gap-4 font-bold">
        <Link href={`${pathname}/em-vs-rem`}>em-vs-rem</Link>
        <Link href={`${pathname}/how-to-use-em`}>how to use em</Link>
      </div>
    </>
  );
};

export default Day2;
