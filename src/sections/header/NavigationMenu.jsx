import { navMenu } from "@/data/Data";
import { useState } from "react";

export function NavMenu() {
  const [active, setActive] = useState(navMenu[0].title);
  console.log(active);
  return (
    <nav className="hidden lg:flex items-center gap-8 ml-auto">
      <ul className="flex items-center gap-6 font-light tracking-widest">
        {navMenu.map((nav, index) => {
          return (
            <li key={index}>
              <a
                href={nav.href}
                onClick={(e) => {
                  e.preventDefault();
                  setActive(nav.title);
                }}
                className={`uppercase link
              ${active === nav.title ? "link-active" : ""}`}
              >
                {nav.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
