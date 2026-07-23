import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-terracotta text-cream hover:bg-terracotta-600 active:bg-terracotta-700",
  secondary:
    "border border-ink/16 text-ink hover:bg-ink/7 active:bg-ink/14",
  ghost: "text-terracotta hover:bg-terracotta/10 active:bg-terracotta/18",
};

const baseClasses =
  "inline-flex items-center justify-center gap-1.5 rounded-full font-display text-sm px-6 py-3.5 transition-colors disabled:opacity-45 disabled:cursor-not-allowed";

interface CommonProps {
  variant?: Variant;
  className?: string;
  children: ReactNode;
}

interface LinkButtonProps extends CommonProps {
  href: string;
}

type NativeButtonProps = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button(props: LinkButtonProps | NativeButtonProps) {
  const { variant = "primary", className = "", children } = props;
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if ("href" in props) {
    return (
      <Link href={props.href} className={classes}>
        {children}
      </Link>
    );
  }

  const { variant: _v, className: _c, children: _ch, ...rest } = props;

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
