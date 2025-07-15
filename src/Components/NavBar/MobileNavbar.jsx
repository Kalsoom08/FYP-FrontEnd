import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdClose, MdArrowDropDown } from 'react-icons/md';
import { menuItems } from '../../APIs/Menu/AllMenus.jsx';

export const MobileNavbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (key) => {
    setOpenDropdown(prev => (prev === key ? null : key));
  };

  return (
    <>
      <nav className="w-full px-4 py-3 flex items-center justify-end bg-transparent text-black">
        <button
          onClick={() => setOpenMenu(true)}
          className="text-sm sm:text-base px-4 py-2 bg-[#293080] text-white rounded hover:bg-[#1e2566] transition-all duration-300"
        >
          Menu
        </button>
      </nav>
      <div
        className={`fixed top-0 left-0 h-full w-[65%] bg-[#293080] text-white z-50 transform transition-transform duration-300 ease-in-out shadow-xl ${
          openMenu ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={() => {
              setOpenMenu(false);
              setOpenDropdown(null);
            }}
            className="text-3xl hover:text-gray-300"
          >
            <MdClose />
          </button>
        </div>
        <div className="px-6 pb-6 space-y-6 overflow-y-auto max-h-[90vh]">
          {menuItems.map(menu => (
            <div key={menu.key}>
              <button
                onClick={() => toggleDropdown(menu.key)}
                className="w-full text-left flex justify-between items-center text-lg font-semibold hover:text-gray-300 transition duration-200"
              >
                {menu.title}
                <MdArrowDropDown
                  className={`text-2xl transition-transform duration-300 ${
                    openDropdown === menu.key ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openDropdown === menu.key && (
                <div className="ml-4 mt-2 pl-2 border-l border-white space-y-2 text-sm transition-all duration-300 ease-in-out">
                  {menu.links.map(link => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => {
                        setOpenMenu(false);
                        setOpenDropdown(null);
                      }}
                      className="block px-2 py-1 rounded hover:bg-[#3340CC]/80  transition duration-200"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};