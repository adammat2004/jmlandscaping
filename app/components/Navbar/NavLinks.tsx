import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

const NavLinks = () => {
  return (
    <div className="hidden sm:flex items-center gap-6 md:gap-8">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-sm text-ink hover:text-terracotta transition-colors"
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;
