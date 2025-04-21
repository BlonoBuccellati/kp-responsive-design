interface navItemProps {
  name: string;
  liClassName?: string;
  aClassName?: string;
}
const navItems: navItemProps[] = [
  { name: "home" },
  { name: "about" },
  { name: "contact" },
  { name: "sign in", liClassName: "ml-auto" },
  {
    name: "sign up",
    aClassName:
      "inline-block rounded-full bg-white px-5 py-1 font-normal text-[#136c72]",
  },
];

const NavHeader = () => {
  return (
    <header className="bg-[#136c72] text-white">
      <div className="mx-auto w-[80%] max-w-[1100px]">
        <ul className="flex flex-wrap items-center gap-5 font-medium uppercase">
          {navItems.map((item) => {
            return (
              <li
                key={item.name}
                className={`my-3 leading-none ${item.liClassName}`}
              >
                <a href="#" className={`hover:opacity-75 ${item.aClassName}`}>
                  {item.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
};

export default NavHeader;
