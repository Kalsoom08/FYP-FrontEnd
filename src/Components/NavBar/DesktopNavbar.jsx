import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MdArrowDropDown } from "react-icons/md";
import { menuItems } from '../../APIs/Menu/AllMenus.jsx'
export const DesktopNavbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();
  const navRef = useRef();

  useEffect(() => {
    setOpenDropdown(null);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = (menu) => {
    setOpenDropdown((prev) => (prev === menu ? null : menu));
  };

  const dropdownClass =
    "absolute flex flex-col bg-[#293080] text-white mt-2 rounded shadow-lg min-w-[180px] z-10 animate-fadeIn origin-top";

  const menuItemClass =
    "px-4 py-2 hover:bg-[#3340CC]/80 hover:text-white transition duration-200";

  return (
    <nav ref={navRef} className="p-4 bg-[#293080] text-white shadow-md z-50 relative">
      <ul className="flex gap-6 items-center justify-center">
        <li>
          <Link to="/" className="hover:text-gray-300 transition duration-200">
            Home
          </Link>
        </li>

        {menuItems.map((menu) => (
          <li key={menu.key} className="relative">
            <button
              onClick={() => toggleDropdown(menu.key)}
              className="flex items-center gap-1 focus:outline-none hover:text-gray-300 transition-all duration-200"
            >
              {menu.title} <MdArrowDropDown />
            </button>
            {openDropdown === menu.key && (
              <div className={dropdownClass}>
                {menu.links.map((link) => (
                  <Link key={link.path} to={link.path} className={menuItemClass}>
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};
