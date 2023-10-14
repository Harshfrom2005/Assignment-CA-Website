import React, { useState } from "react";
import "../index.css";
import DropdownArrow from "./dropdownarrow";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full bg-transparent">
      <nav className="container mx-auto px-4">
        <div className="flex items-center py-2 justify-between">
          <div className="flex items-center space-x-3">
            <a href="/">
              <img src="/assets/logo.png" alt="Logo" className="logo" />
            </a>

            {/* Responsive menu button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden text-black font-bold focus:outline-none"
            >
              {isMenuOpen ? "Close" : "Menu"}
            </button>

            {/* Responsive menu */}
            <div
              className={`lg:flex space-x-4 ${
                isMenuOpen ? "flex" : "hidden"
              }`}
            >
              <div className="dropdown inline-block relative">
                <button className="text-black font-bold flex items-center">
                  Solutions <DropdownArrow />
                </button>
                <div className="dropdown-content hidden absolute z-10 left-0 mt-2 space-y-2 bg-white shadow-md">
                  <a
                    href="#"
                    className="block px-4 py-2 text-black hover:text-blue-500"
                  >
                    Solution 1
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-black hover:text-blue-500"
                  >
                    Solution 2
                  </a>
                </div>
              </div>
              <div className="dropdown inline-block relative">
                <button className="text-black font-bold flex items-center">
                  Features <DropdownArrow />
                </button>
                <div className="dropdown-content hidden absolute z-10 left-0 mt-2 space-y-2 bg-white shadow-md">
                  <a
                    href="#"
                    className="block px-4 py-2 text-black hover:text-blue-500"
                  >
                    Feature 1
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-black hover:text-blue-500"
                  >
                    Feature 2
                  </a>
                </div>
              </div>
              <a href="#" className="text-black font-bold hover:text-blue-500">
                Blogs
              </a>
              <div className="dropdown inline-block relative">
                <button className="text-black font-bold ml-5 flex items-center">
                  About <DropdownArrow />
                </button>
                <div className="dropdown-content hidden absolute z-10 left-0 mt-2 space-y-2 bg-white shadow-md">
                  <a
                    href="#"
                    className="block px-4 py-2 text-black hover:text-blue-500"
                  >
                    About Us
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-black hover:text-blue-500"
                  >
                    Our Team
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button className="text-blue-500 font-bold border rounded-md border-sky-400 p-2 px-4 hover:bg-sky-500 hover:text-blue-50">
              Login
            </button>

            <button className="text-white font-bold bg-blue-500 border rounded-md border-blue-700 p-2 px-4 hover:bg-sky-500 hover:text-blue-50">
              Register
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
