const PercentagesOnTheChild = () => {
  return (
    // 子要素にもpx固定はNo！
    // %がいいのかは不明...
    <div className="mx-auto my-0 w-[80%] bg-[#23424A] p-[50px]">
      <div className="h-[250px] w-[50%] bg-[#38CFD9]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, aspernatur.
        Quas aperiam cum aspernatur doloribus saepe ratione, commodi, atque
        consequatur dignissimos tempora fuga. Accusantium ipsa error fugit ex
        ratione tempore!
      </div>
    </div>
  );
};

export default PercentagesOnTheChild;
