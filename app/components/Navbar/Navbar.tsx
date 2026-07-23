import Logo from "./Logo";
import NavLinks from "./NavLinks";
import UserMenu from "./UserMenu";
import Button from "../ui/Button";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-20 bg-cream/92 backdrop-blur-md border-b border-ink/10">
      <div className="max-w-[1280px] mx-auto px-6 md:px-16">
        <div className="flex items-center justify-between gap-6 py-3.5">
          <Logo />
          <div className="flex items-center gap-4 md:gap-10">
            <NavLinks />
            <Button href="/contact" className="hidden sm:inline-flex !py-2.5 !px-5 !text-xs">
              Get a Quote
            </Button>
            <UserMenu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
