import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="m-10 flex h-10 w-14 text-center text-xl hover:bg-amber-700">
        <Link href="1Day">1Day</Link>
      </div>
    </div>
  );
}
