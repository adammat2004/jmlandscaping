"use client";

interface MenuItemProps {
  onClick: () => void;
  label: string;
}

const MenuItem = ({ onClick, label }: MenuItemProps) => {
  return (
    <div
      onClick={onClick}
      className="px-4 py-3 text-sm text-ink hover:bg-terracotta-100 transition-colors cursor-pointer"
    >
      {label}
    </div>
  );
};

export default MenuItem;
