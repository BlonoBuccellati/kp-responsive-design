import AsideCard from "./aside-card";

const HomeAsideContents = () => {
  return (
    <aside className="px-8 pb-8 text-white md:flex md:gap-3">
      <AsideCard title="Break it down" className="mt-0 md:mt-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </AsideCard>
      <AsideCard title="Work your way up">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </AsideCard>
      <AsideCard title="Break it down">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </AsideCard>
    </aside>
  );
};

export default HomeAsideContents;
