// 幅によって、テキストがボックスからオーバーフローしてしまう。
// なので、heightは避けろ！
const AvoidHeight = () => {
  return (
    <div className="mx-auto my-0 w-[80%] bg-[#23424A] p-[5em] text-white">
      <h1 className="text-2xl font-bold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </h1>
      Nesciunt necessitatibus cum laudantium? Fugiat, voluptates. Ut consectetur
      nulla molestiae delectus. Officia dolorum perferendis reiciendis
      praesentium sunt facere, nesciunt nam minima optio!
    </div>
  );
};

export default AvoidHeight;
