import BtnMode from "./btn-mode";
import NavItems from "./nav-items";

const NavItmes: { name: string; path: string }[] = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Projects",
    path: "/projects",
  },
];

const Navbar = () => {
  return (
    <header className="w-full h-auto flex justify-between items-center md:grid  md:grid-cols-3 md:justify-items-end md:place-items-center top-0 inset-x-0 pt-6 z-10 ">
      <div className="md:col-start-2  md:w-full flex justify-center">
        <nav className="mx-auto py-3 px-6 rounded-full bg-accent border border-primary/20">
          <NavItems items={NavItmes} />
        </nav>
      </div>
      <BtnMode />
    </header>
  );
};

export default Navbar;
