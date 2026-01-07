import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import { NavMenu } from "./NavigationMenu";

import { useState, useEffect } from "react";

function Header() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`flex justify-between items-center duration-500 w-full bg-white
          ${
            isSticky
              ? "fixed top-0 left-0 px-8 md:px-12 lg:px-16 xl:px-40 shadow-xl z-50 py-3"
              : "pt-6 pb-2"
          }`}
    >
      <Logo isSticky={isSticky} />
      <NavMenu />
      <div className="flex gap-4">
        <MobileMenu />
      </div>
    </div>
  );
}

export default Header;
