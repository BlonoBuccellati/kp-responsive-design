// Percentages vs Fixed widths（パーセンテージと固定幅の違い）
// パーセンテージ（%） vs 固定幅（px）
const FixedWidths = () => {
  // なるべく親にwidthを使用しない。
  return (
    // margin:0 auto;を使用する。
    // これは、上下のマージンは0、左右中央
    <div className="mx-auto my-0 w-[80%] bg-[#23424A] p-[50px]">
      <div className="h-[250px] bg-[#38CFD9]"></div>
    </div>
  );
};

export default FixedWidths;
