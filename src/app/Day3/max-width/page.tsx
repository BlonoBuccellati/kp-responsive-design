// max-widthの設定によって、幅が一定以上にならない（伸びすぎない。
const Page = () => {
  return (
    <div className="mx-auto my-0 w-[80%] max-w-[750px] bg-[#23424A] p-[5em] text-white">
      <div className="w-[50%]">
        <h1 className="text-2xl font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h1>
        Nesciunt necessitatibus cum laudantium? Fugiat, voluptates. Ut
        consectetur nulla molestiae delectus. Officia dolorum perferendis
        reiciendis praesentium sunt facere, nesciunt nam minima optio!
      </div>
    </div>
  );
};

export default Page;
