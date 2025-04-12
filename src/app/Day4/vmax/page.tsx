const Page = () => {
  // vmaxは、画面の最大に基づいて変化する。
  // つまり、小さい方だけが変わる場合は、固定になる。
  return (
    <div className="h-[50vmax] bg-amber-300 text-[8vmax]">
      50vh
      <div className="h-100 w-100 bg-amber-900 text-white">画像</div>
    </div>
  );
};

export default Page;
