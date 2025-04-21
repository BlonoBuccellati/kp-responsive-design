import Image from "next/image";
const Page = () => {
  return (
    <>
      <main className="font-roboto font-[21px]">
        {/* intro */}
        <section className="flex min-h-[660px] items-center bg-[#F3EED9] py-[4em] text-center text-[#824936]">
          <div className="mx-auto w-[85%] max-w-[1128px]">
            <p className="mb-1 text-lg font-light tracking-[10px] text-[#222C2A] uppercase">
              lorem ipsum sit
            </p>
            <h1 className="font-fair text-5xl leading-11 font-black sm:text-6xl">
              Responsive layouts don’t
              <br />
              have to be a struggle
            </h1>
          </div>
        </section>
        {/* 2つ目 */}
        <section className="bg-white py-[4em]">
          <div className="mx-auto w-[85%] max-w-[1128px]">
            <h2 className="font-fair text-4xl leading-11 font-black text-[#824936]">
              Quality Design
            </h2>
            {/* row */}
            <div className="sm:flex sm:gap-[4em]">
              {/* col */}
              <p className="sm:w-full">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui
                vivamus arcu felis bibendum ut tristique. Arcu dui vivamus arcu
                felis. Sociis natoque penatibus et magnis dis.
              </p>
              <p className="sm:w-full">
                Felis donec et odio pellentesque diam volutpat. Aliquam purus
                sit amet luctus venenatis. Turpis in eu mi bibendum neque
                egestas congue quisque egestas. Pellentesque sit amet porttitor
                eget dolor morbi non.
              </p>
            </div>
          </div>
        </section>
        {/* 3つ目 */}
        <section className="bg-[#222C2A] py-[4em]">
          <div className="mx-auto w-[85%] max-w-[1128px] sm:flex sm:gap-[4em]">
            <div className="sm:w-full">
              <h2 className="font-fair text-4xl leading-11 font-black text-[#F3EED9]">
                Made custom for you
              </h2>
              <p className="text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
            <div className="sm:w-full">
              <Image
                src="/assets/image-01.jpg"
                width={700}
                height={700}
                alt="夕日"
              />
            </div>
          </div>
        </section>
        {/* 4つ目 */}
        <section className="bg-[#824936] py-[4em]">
          <div className="mx-auto w-[85%] max-w-[1128px] sm:flex sm:gap-[4em]">
            <div className="sm:w-full">
              <Image
                src="/assets/image-02.jpg"
                width={700}
                height={700}
                alt="夕日2"
              />
            </div>
            <div className="sm:w-full">
              <h2 className="font-fair text-4xl leading-11 font-black text-[#F3EED9]">
                Created with care
              </h2>
              <p className="text-white">
                Felis donec et odio pellentesque diam volutpat. Aliquam purus
                sit amet luctus venenatis. Turpis in eu mi bibendum neque
                egestas congue quisque egestas. Pellentesque sit amet porttitor
                eget dolor morbi non.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Page;
