import { navMenu } from "@/data/Data";
import { useState } from "react";
import { Link } from "react-router-dom";

export function NavMenu() {
  const [active, setActive] = useState(navMenu[0].title);
  console.log(active);
  return (
    <nav className="hidden lg:flex items-center gap-8 ml-auto">
      <ul className="flex items-center gap-6 font-light tracking-widest">
        {navMenu.map((nav, index) => {
          return (
            <li key={index}>
              <Link
                to={nav.href}
                onClick={() => setActive(nav.title)}
                className={`uppercase link
              ${active === nav.title ? "link-active" : ""}`}
              >
                {nav.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
