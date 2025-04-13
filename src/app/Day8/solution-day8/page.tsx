import SellingPointCard from "./_components/selling-point-card";

// 答え
const Page = () => {
  return (
    <>
      {/* mainはページ全体（１個しかない）の本文エリア。articleは、mainの中に、独立して複数存在する。 */}
      <main className="font-roboto text-[1.3rem]">
        {/* Heroセクション */}
        <section className="bg-[#23424a] p-25 text-white">
          <div className="mx-auto max-w-[1100px]">
            <div className="w-[50%]">
              {/* キャッチコピー */}
              <h1 className="py-8 text-5xl font-bold">
                Responsive layouts don’t have to be a struggle
              </h1>
              {/* サブコピー */}
              <p className="py-3 pb-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
              <a
                href="#"
                className="inline-block rounded-2xl bg-[#38CFD9] p-3 font-bold text-[#23424a] uppercase hover:opacity-70"
              >
                I want to learn
              </a>
            </div>
          </div>
        </section>
        {/* 複数存在するが、独立していないので、articleではなくsectionを使用する */}
        {/* 特徴 */}
        <div className="px-25">
          <section className="m-auto flex max-w-[1100px]">
            <SellingPointCard title="Cheap">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </SellingPointCard>
            <SellingPointCard title="Quick">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </SellingPointCard>
            <SellingPointCard title="Affordable">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </SellingPointCard>
          </section>
        </div>
        {/* 特徴(詳細？) */}
        <section>
          <SellingPointCard title="Cheap">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </SellingPointCard>
          <SellingPointCard title="Quick">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </SellingPointCard>
        </section>
      </main>
    </>
  );
};

export default Page;
