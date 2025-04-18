const Page = () => {
  return (
    <>
      {/* mainはページ全体（１個しかない）の本文エリア。articleは、mainの中に、独立して複数存在する。 */}
      <main className="font-roboto text-[1.3rem]">
        {/* ヒーローセクション */}
        <section className="bg-[#23424a] py-25 text-white">
          <div className="mx-auto w-[80%] max-w-[1100px]">
            <div className="w-[62%]">
              {/* キャッチコピー */}
              <h1 className="mb-6 text-5xl font-bold">
                Responsive layouts don’t have to be a struggle
              </h1>
              {/* サブコピー */}
              <p className="mt-3 mb-10 leading-[1.125]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
              {/* CTAボタン */}
              <a className="inline-block rounded-full bg-[#38cfd9] px-[2em] py-[.75em] leading-tight font-black text-[#23424a] uppercase hover:cursor-pointer hover:opacity-75">
                I want to learn
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Page;
