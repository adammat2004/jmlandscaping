"use client";

import { useEffect, useRef, useState } from "react";
import MenuItem from "./MenuItem";
import { AiOutlineMenu } from "react-icons/ai";
import { useRouter } from "next/navigation";

const UserMenu = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="sm:hidden">
      <div className="relative" ref={menuRef}>
        <div
          onClick={toggleOpen}
          className="flex items-center gap-3 cursor-pointer p-3 border border-ink/16 rounded-full hover:bg-ink/5 transition-colors"
        >
          <AiOutlineMenu size={18} />
        </div>
        {isOpen && (
          <div className="absolute right-0 top-14 w-[52vw] max-w-56 bg-cream rounded-lg shadow-[var(--shadow-organic-md)] overflow-hidden text-sm">
            <div className="flex flex-col cursor-pointer">
              <MenuItem label="Home" onClick={() => router.push("/")} />
              <MenuItem label="About" onClick={() => router.push("/about")} />
              <MenuItem label="Projects" onClick={() => router.push("/projects")} />
              <MenuItem label="Contact" onClick={() => router.push("/contact")} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserMenu;
