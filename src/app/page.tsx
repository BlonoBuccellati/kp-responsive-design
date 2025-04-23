import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="m-10 flex h-10 w-14 flex-col text-center text-xl hover:bg-amber-700">
        <Link href="Day1">Day1</Link>
        <Link href="Day2">Day2</Link>
        <Link href="Day3">Day3</Link>
        <Link href="Day4">Day4</Link>
        <Link href="Day5">Day5</Link>
        <Link href="Day7">Day7</Link>
        <Link href="Day8">Day8</Link>
        <Link href="Day9">Day9</Link>
        <Link href="Day11">Day11</Link>
        <Link href="Day12">Day12</Link>
        <Link href="Day18">Day18</Link>
        <Link href="Day19">Day19</Link>
        <Link href="Day21">Day21</Link>
      </div>
    </div>
  );
}
