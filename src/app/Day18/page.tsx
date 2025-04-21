"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Page = () => {
  const pathname = usePathname();
  return (
    <div className="flex flex-col gap-4 font-bold">
      <Link href={`${pathname}/day12-challenges-answer_mobile-first`}>
        day12-challenges-answer_mobile-first １個目（段々と書いていく）
      </Link>
      <Link href={`${pathname}/day12-challenges-answer_add-media-query`}>
        day12-challenges-answer_add-media-query ２個目（段々と書いていく）
      </Link>
      <Link href={`${pathname}/day12-challenges-answer_min-height`}>
        day12-challenges-answer_min-height ３個目（段々と書いていく）
      </Link>
    </div>
  );
};

export default Page;
