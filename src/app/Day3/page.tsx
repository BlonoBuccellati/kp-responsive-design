"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Page = () => {
  const pathname = usePathname();
  return (
    <div className="flex flex-col gap-4 font-bold">
      <Link href={`${pathname}/max-width`}>max-width</Link>
      <Link href={`${pathname}/challenges`}>challenges</Link>
    </div>
  );
};

export default Page;
