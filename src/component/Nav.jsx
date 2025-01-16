import React from "react";
import { headerLogo } from "../assets/images";
import { navLink } from "../constant";
import DarkMode from "./DarkMode";
import HamburgerDropdown from "./HamBurgerDropdown";

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full bg-bg shadow-coral-red">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="headerLogo" width={130} height={29} />
        </a>

        {/* hammerburger component */}
        <div className="hidden max-lg:block cursor-pointer relative">
          <HamburgerDropdown />
        </div>

        {/* nav link  */}
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLink.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-text hover:text-coral-red"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div>
          <DarkMode />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
