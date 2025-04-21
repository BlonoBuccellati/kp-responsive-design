const navItems: string[] = ["home", "about", "contact", "sign in"];

const NavHeader = () => {
  return (
    <header className="bg-[#136c72] text-white">
      <div className="mx-auto w-[80%] max-w-[1100px]">
        <ul className="flex flex-wrap items-center gap-5 font-medium uppercase">
          {navItems.map((item) => {
            return (
              <li key={item} className="my-3 leading-none">
                <a href="#" className="hover:opacity-75">
                  {item}
                </a>
              </li>
            );
          })}
          <li className="m-3 leading-none">
            <a
              href="#"
              className="inline-block rounded-full bg-white px-5 py-1 font-normal text-[#136c72] hover:opacity-75"
            >
              sign up
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default NavHeader;
