import React from 'react';

const MenuTrigger = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="text-sm sm:text-base px-4 py-2 bg-[#293080] text-white rounded hover:bg-[#1e2566] transition-all duration-300"
    >
      Menu
    </button>
  );
};

export default MenuTrigger;
