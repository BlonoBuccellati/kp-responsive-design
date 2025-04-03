"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Day1 = () => {
  const pathname = usePathname();
  return (
    <>
      <div className="flex flex-col gap-4 font-bold">
        <Link href={`${pathname}/fixed-widths`}>fixed-widths</Link>
        <Link href={`${pathname}/percentages-on-the-child`}>
          percentages-on-the-child
        </Link>
        <Link href={`${pathname}/avoid-heights`}>avoid-height</Link>
        <Link href={`${pathname}/challenges`}>challenges</Link>
      </div>
    </>
  );
};

export default Day1;
