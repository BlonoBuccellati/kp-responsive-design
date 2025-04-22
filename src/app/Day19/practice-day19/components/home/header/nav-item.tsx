interface navItemProps {
  name: string;
  className?: string;
}
const NavItem = ({ name, className }: navItemProps) => {
  return (
    <li key={name} className="mt-[.75em] leading-none md:m-[0_0_0_1.5em]">
      <a href="#" className={`hover:opacity-75 ${className}`}>
        {name}
      </a>
    </li>
  );
};

export default NavItem;
