import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="flex flex-col gap-0.5 leading-none">
      <span className="font-display text-xl md:text-2xl text-ink">Joe Matthews</span>
      <span className="text-[10px] tracking-[0.16em] font-semibold text-terracotta-700 uppercase">
        Landscaping &amp; Paving
      </span>
    </Link>
  );
};

export default Logo;
