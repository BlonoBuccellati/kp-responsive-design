import NavItem from "./nav-item";

const HomeHeader = () => {
  return (
    <header className="bg-[#136c72] text-white">
      <div className="mx-auto flex w-[80%] max-w-[1100px] justify-between">
        <ul className="flex flex-wrap items-center gap-5 font-medium uppercase">
          <NavItem name="home" />
          <NavItem name="about" />
          <NavItem name="contact" />
        </ul>
        <ul className="flex flex-wrap items-center gap-5 font-medium uppercase">
          <NavItem name="sign in" />
          <NavItem
            name="sign up"
            className="inline-block rounded-full bg-white px-5 py-1 font-normal text-[#136c72]"
          />
        </ul>
      </div>
    </header>
  );
};

export default HomeHeader;
