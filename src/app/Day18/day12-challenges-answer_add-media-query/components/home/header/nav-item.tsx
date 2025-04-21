interface navItemProps {
  name: string;
  className?: string;
}
const NavItem = ({ name, className }: navItemProps) => {
  return (
    <li key={name} className="leading-none">
      <a href="#" className={`hover:opacity-75 ${className}`}>
        {name}
      </a>
    </li>
  );
};

export default NavItem;
