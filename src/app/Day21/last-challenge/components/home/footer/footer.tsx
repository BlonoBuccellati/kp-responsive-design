import FooterNavList from "./footer-nav-list";

const gettingAroundItems: string[] = ["Home", "About", "Contact"];
const otherThingsItems: string[] = ["Lorem ipsum", "dolor", "consectetur"];
const AndMoreItems: string[] = ["Lorem ipsum", "dolor", "consectetur"];
const HomeFooter = () => {
  return (
    <footer className="bg-matte-dark text-preset-3 px-8 pb-10 font-extralight text-white">
      <h2 className="text-preset-2 py-10 md:text-center">
        Just scratching the surface
      </h2>
      <div className="w-full md:flex md:gap-3">
        <div className="max-w-123">
          <h3 className="text-matte-beige text-preset-1 py-4">
            About our company
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>
        <nav className="w-full md:flex md:justify-around md:gap-3">
          <FooterNavList title="Getting around" items={gettingAroundItems} />
          <FooterNavList title="Other things" items={otherThingsItems} />
          <FooterNavList title="And more" items={AndMoreItems} />
        </nav>
      </div>
    </footer>
  );
};

export default HomeFooter;
