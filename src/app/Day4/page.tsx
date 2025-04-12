"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Page = () => {
  const pathname = usePathname();
  return (
    <div className="flex flex-col gap-4 font-bold">
      <Link href={`${pathname}/vh-vw`}>vh-vw</Link>
      <Link href={`${pathname}/vmin`}>vmin</Link>
      <Link href={`${pathname}/vmax`}> vmax</Link>
    </div>
  );
};

export default Page;
