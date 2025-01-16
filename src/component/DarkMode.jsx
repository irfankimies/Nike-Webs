import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'

const DarkMode = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) {
        document.documentElement.setAttribute("data-theme", savedTheme);
      }
      setIsDarkMode(savedTheme === "dark");
    }, []);

   const handleDropdown = () => {
     setShowDropdown(!showDropdown);
   };


  const handleMode = (theme) => {
    setShowDropdown(!showDropdown);
    if(theme === 'dark'){
      document.documentElement.setAttribute("data-theme", "dark");
      setIsDarkMode(true);
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.removeAttribute("data-theme");
      setIsDarkMode(false);
      localStorage.setItem('theme', 'light');
    
    }
 
    
  }

  return (
    <div>
      <div onClick={() => handleDropdown()}>
        <FontAwesomeIcon
          icon={isDarkMode ? "fa-regular fa-moon" : "fa-regular fa-sun"}
          className="text-3xl mr-3 cursor-pointer text-coral-red"
        />
      </div>

      {/* dropDown Mode */}
      {showDropdown && (
        <div>
          <div className="w-48 flex flex-col gap-5 absolute top-full right-[4%] p-4 mt-3 rounded-lg shadow-coral-red bg-bg">
            {/* Dark Mode */}
            <div
              onClick={() => handleMode("dark")}
              className={`flex flex-row gap-3 justify-start items-center ml-2 cursor-pointer 
              ${
                isDarkMode ? "text-coral-red" : "text-black"
              } hover:text-opacity-60`}
            >
              <FontAwesomeIcon
                icon="fa-regular fa-moon"
                className="text-3xl basis-1/4  cursor-pointer"
              />
              <p className="text-xl font-bold">Dark</p>
            </div>
            {/* Light Mode*/}
            <div
              onClick={() => handleMode("light")}
              className={`flex flex-row gap-3  justify-start items-center ml-2 cursor-pointer 
                ${
                  isDarkMode ? "text-white" : "text-coral-red"
                } hover:text-opacity-60`}
            >
              <FontAwesomeIcon
                icon="fa-regular fa-sun"
                className="text-3xl basis-1/4"
              />
              <p className="text-xl font-bold">Light</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DarkMode