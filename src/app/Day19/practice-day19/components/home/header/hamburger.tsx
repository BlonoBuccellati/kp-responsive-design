interface HamburgerProps {
  className: string;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Hamburger = ({ className, setIsOpen }: HamburgerProps) => {
  return (
    <button
      className={`rounded-full bg-black p-3 hover:cursor-pointer hover:opacity-75 ${className}`}
      aria-label="open navigation"
      onClick={() => setIsOpen((prev) => !prev)}
    >
      <div className="space-y-1">
        <span className="block h-0.5 w-4.5 bg-white"></span>
        <span className="block h-0.5 w-4.5 bg-white"></span>
        <span className="block h-0.5 w-4.5 bg-white"></span>
      </div>
    </button>
  );
};

export default Hamburger;
