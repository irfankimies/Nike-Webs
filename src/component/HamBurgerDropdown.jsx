import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { navLink } from "../constant";

const HamburgerDropdown = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const handleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <section onClick={() => handleDropdown()}>
      <div>
        <FontAwesomeIcon icon={faBars} size={"xl"} className="text-text" />
      </div>

      {showDropdown && (
        <div className="absolute top-full mt-16 left-[30%] transform -translate-x-1/2  h-[400px] w-[450px] max-sm:w-[250px] bg-bg text-text z-10 rounded-xl shadow-coral-red">
          <ul className="flex flex-col items-center justify-center w-full">
            {navLink.map((item) => (
              <li key={item.label} className={`py-8  rounded-xl  `}>
                <a
                  href={item.href}
                  className="text-2xl font-montserrat leading-normal hover:text-coral-red"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};

export default HamburgerDropdown;
