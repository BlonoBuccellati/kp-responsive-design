interface FooterNavListProps {
  title: string;
  items: string[];
}
const FooterNavList = ({ title, items }: FooterNavListProps) => {
  return (
    <ul>
      <li>
        <h3 className="text-matte-beige text-preset-1 py-4">{title}</h3>
      </li>
      {items.map((item) => {
        return (
          <li key={item} className="pb-3">
            <a href="#" className="py-3 pr-1 hover:opacity-75">
              {item}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default FooterNavList;
