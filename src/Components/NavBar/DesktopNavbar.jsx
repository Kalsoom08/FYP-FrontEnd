import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdArrowDropDown } from "react-icons/md";

export const DesktopNavbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setOpenDropdown(prev => (prev === menu ? null : menu));
  };

  return (
    <nav className="p-4 bg-[#293080] text-white">
      <ul className="flex gap-6 items-center justify-center">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li className="relative">
          <button
            onClick={() => toggleDropdown('academics')}
            className="flex items-center gap-1 focus:outline-none"
          >
            Academics <MdArrowDropDown />
          </button>
          {openDropdown === 'academics' && (
            <div className="absolute flex flex-col bg-[#293080] text-white mt-2 rounded shadow-lg min-w-[150px] z-10">
              <Link to="/academics/notes" className="px-4 py-2 ">Notes</Link>
              <Link to="/academics/softwares" className="px-4 py-2 ">Softwares</Link>
              <Link to="/academics/subjects" className="px-4 py-2 ">Subjects</Link>
              <Link to="/academics/timetable" className="px-4 py-2 ">Timetable</Link>
            </div>
          )}
        </li>

    
        <li className="relative">
          <button
            onClick={() => toggleDropdown('examinations')}
            className="flex items-center gap-1 focus:outline-none"
          >
            Examinations <MdArrowDropDown />
          </button>
          {openDropdown === 'examinations' && (
            <div className="absolute flex flex-col bg-[#293080] text-whitemt-2 rounded shadow-lg min-w-[150px] z-10">
              <Link to="/examinations/datesheet" className="px-4 py-2 ">Datesheet</Link>
              <Link to="/examinations/hall-statement" className="px-4 py-2 ">Hall Statement</Link>
              <Link to="/examinations/timetable" className="px-4 py-2 ">Timetable</Link>
              <Link to="/examinations/top-10-students" className="px-4 py-2 ">Top 10 Students</Link>
            </div>
          )}
        </li>


        <li className="relative">
          <button
            onClick={() => toggleDropdown('students')}
            className="flex items-center gap-1 focus:outline-none"
          >
            Student <MdArrowDropDown />
          </button>
          {openDropdown === 'students' && (
            <div className="absolute flex flex-col bg-[#293080] text-white mt-2 rounded shadow-lg min-w-[150px] z-10">
              <Link to="/students/registration" className="px-4 py-2 ">Registration</Link>
              <Link to="/students/feeslip" className="px-4 py-2 ">Renewal</Link>
              <Link to="/rollnumber" className="px-4 py-2 ">New Students Rollnumber</Link>
             
            </div>
          )}
        </li>


      <li className="relative">
          <button
            onClick={() => toggleDropdown('campusinfo')}
            className="flex items-center gap-1 focus:outline-none"
          >
            Campus Info <MdArrowDropDown />
          </button>
          {openDropdown === 'campusinfo' && (
            <div className="absolute flex flex-col bg-[#293080] text-white mt-2 rounded shadow-lg min-w-[150px] z-10">
    
            </div>
          )}
        </li>


        <li className="relative">
          <button
            onClick={() => toggleDropdown('resources')}
            className="flex items-center gap-1 focus:outline-none"
          >
            Resources <MdArrowDropDown />
          </button>
          {openDropdown === 'resources' && (
            <div className="absolute flex flex-col bg-[#293080] text-white mt-2 rounded shadow-lg min-w-[150px] z-10">
           
            </div>
          )}
        </li>



        <li className="relative">
          <button
            onClick={() => toggleDropdown('aboutus')}
            className="flex items-center gap-1 focus:outline-none"
          >
            About Us <MdArrowDropDown />
          </button>
          {openDropdown === 'aboutus' && (
            <div className="absolute flex flex-col bg-[#293080] text-white mt-2 rounded shadow-lg min-w-[150px] z-10">
  
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
};
