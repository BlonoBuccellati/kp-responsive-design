const Page = () => {
  return (
    <>
      <div className="">
        <div className="text-[15px]">
          <p>私は15px</p>
          <div className="text-[2em]">
            <p>私は30px</p>
            <div className="text-[2em]">
              <p>私は60px. 重なりあってしまった（複合）。どうしよう！</p>
            </div>
          </div>
        </div>
        {/* ここからはrem */}
        <div className="text-[15px]">
          <p>私は15px</p>
          <div className="text-[2rem]">
            <p>私は32px</p>
            <div className="text-[2rem]">
              <p>私は32px.予想通りです！</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
