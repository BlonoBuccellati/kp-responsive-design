import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="m-10 flex h-10 w-14 flex-col text-center text-xl hover:bg-amber-700">
        <Link href="Day1">Day1</Link>
        <Link href="Day2">Day2</Link>
        <Link href="Day3">Day3</Link>
      </div>
    </div>
  );
}
