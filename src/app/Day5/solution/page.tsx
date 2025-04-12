const Page = () => {
  return (
    <>
      {/* 1つ目のコンテンツ */}
      <div className="bg-[#23424a] px-[70px] py-[80px] text-white">
        <div className="w-[50%]">
          <h1 className="text-5xl font-black">
            Responsive layouts don’t have to be a struggle
          </h1>
          <p className="my-4 text-[21px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
          <button className="my-10 ml-0 rounded-[31] bg-[#38CFD9] px-[3rem] py-[1rem] text-center text-[21px] font-bold text-black">
            I WANT TO LEARN
          </button>
        </div>
      </div>
    </>
  );
};

export default Page;
