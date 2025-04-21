import Image from "next/image";
const Page = () => {
  return (
    <>
      {/* mainはページ全体（１個しかない）の本文エリア。articleは、mainの中に、独立して複数存在する。 */}
      <main className="font-roboto font-[21px]">
        <section className="bg-[#F3EED9]">
          <div className="mx-auto max-w-180 py-40 text-center">
            <div className="text-lg font-light uppercase">lorem ipsum sit</div>
            <h1 className="font-fair text-6xl font-black text-[#824936]">
              Responsive layouts don’t have to be a struggle
            </h1>
          </div>
        </section>
        <section className="bg-white">
          <div className="mx-auto flex max-w-[1128px] flex-col gap-10 px-10 py-15">
            <h2 className="font-fair text-center text-4xl font-black text-[#824936]">
              Quality Design
            </h2>
            <div className="mx-auto flex w-full justify-between gap-14">
              <p className="max-w-[425px] basis-1/2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui
                vivamus arcu felis bibendum ut tristique. Arcu dui vivamus arcu
                felis. Sociis natoque penatibus et magnis dis.
              </p>
              <p className="max-w-[425px] basis-1/2">
                Felis donec et odio pellentesque diam volutpat. Aliquam purus
                sit amet luctus venenatis. Turpis in eu mi bibendum neque
                egestas congue quisque egestas. Pellentesque sit amet porttitor
                eget dolor morbi non.
              </p>
            </div>
          </div>
        </section>
        {/* 3つ目 */}
        <section className="bg-[#222C2A]">
          <div className="mx-auto flex w-full max-w-[1128px] justify-between gap-10 p-10">
            <div className="max-w-[700px] basis-1/2">
              <h2 className="font-fair text-4xl font-black text-[#F3EED9]">
                Made custom for you
              </h2>
              <p className="text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
            <Image
              src="/assets/image-01.jpg"
              width={700}
              height={700}
              alt="夕日"
              className="basis-1/2"
            />
          </div>
        </section>
        {/* 4つ目 */}
        <section className="bg-[#824936]">
          <div className="mx-auto flex max-w-[1128px] flex-row-reverse gap-10 p-10">
            <div className="max-w-[700px] basis-1/2">
              <h2 className="font-fair text-4xl font-black text-[#F3EED9]">
                Created with care
              </h2>
              <p className="text-white">
                Felis donec et odio pellentesque diam volutpat. Aliquam purus
                sit amet luctus venenatis. Turpis in eu mi bibendum neque
                egestas congue quisque egestas. Pellentesque sit amet porttitor
                eget dolor morbi non.
              </p>
            </div>
            <Image
              src="/assets/image-02.jpg"
              width={700}
              height={700}
              alt="夕日"
              className="basis-1/2"
            />
          </div>
        </section>
      </main>
    </>
  );
};

export default Page;
