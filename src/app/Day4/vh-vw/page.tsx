const Page = () => {
  // vh（viewport height）の問題点は、画面が小さい時に、画像などがはみ出してしまうこと。
  // viewportが90（h-[90]、w-[90]）だと、90%という意味。つまり、値は%。
  return (
    <div className="h-[90vh] bg-amber-300 text-[8vh]">
      100vh
      <div className="h-100 w-100 bg-amber-900 text-[8vh] text-white">画像</div>
    </div>
  );
};

export default Page;
