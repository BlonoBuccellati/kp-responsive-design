"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Page = () => {
  const pathname = usePathname();
  return (
    <div className="flex flex-col gap-4 font-bold">
      <Link href={`${pathname}/day12-challenges-answer_mobile-first`}>
        day12-challenges-answer_mobile-first１個目（段々と書いていく）
      </Link>
    </div>
  );
};

export default Page;
