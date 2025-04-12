const Page = () => {
  // vminは、画面の最小に基づいて変化する。
  // つまり、大きい方だけが変わる場合は、固定になる。
  return (
    <div className="h-[50vmin] bg-amber-300 text-[8vmin]">
      50vh
      <div className="h-100 w-100 bg-amber-900 text-white">画像</div>
    </div>
  );
};

export default Page;
