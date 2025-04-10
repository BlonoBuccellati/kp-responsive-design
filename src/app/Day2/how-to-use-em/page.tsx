const Page = () => {
  return (
    <>
      <h1>emを使用した方がいい場合(左がem、右がrem)</h1>
      <div className="flex gap-2">
        {/* フォントサイズを変えるだけで、marginやpadding、radiusが最適に適用される。 */}
        <button className="[border-radius:0.5em] bg-blue-600 [padding:0.5em_1.5em] text-5xl font-bold [letter-spacing:0.05em] text-white uppercase transition-colors">
          ボタン
        </button>
        {/* フォントサイズを変えたら、margin、padding,radiusも変更しないといけない（手間がかかる。） */}
        <button className="rounded-[0.5rem] bg-blue-600 [padding:0.5em_1.5rem] text-5xl font-bold [letter-spacing:0.05rem] text-white uppercase transition-colors">
          ボタン
        </button>
      </div>
    </>
  );
};

export default Page;
