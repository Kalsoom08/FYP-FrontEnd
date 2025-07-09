import React from 'react'
import SlipImage from '../../assets/FeesSlip/slip2.png';
import { IoMdDownload } from "react-icons/io";

export const SlipCard = () => {
  return (
     <div className="flex flex-col items-center gap-4 border border-[#293080] rounded-md px-4 py-6 w-full max-w-xs sm:max-w-sm bg-white">
          <h1 className="text-[1.2rem] sm:text-[1.3rem] font-semibold text-[#293080]">
            Renewable Slip
          </h1>
    
          <div className="w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] flex justify-center items-center bg-gray-100 rounded-md">
            <img src={SlipImage} alt="Timetable Sketch" className="w-[90px] sm:w-[100px]" />
          </div>
    
          <button
            type="button"
            className="relative mt-2 px-4 py-2 overflow-hidden border border-[#293080] text-white bg-[#293080] rounded-full group transition-all duration-500 ease-out cursor-pointer text-sm"
            disabled
          >
            <span className="relative z-10 flex items-center justify-center gap-2 group-hover:text-[#293080]">
              <IoMdDownload size={18} /> Download PDF
            </span>
            <span className="absolute inset-0 bg-white transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-700 ease-in-out"></span>
          </button>
    
          <p className="text-[11px] text-gray-500 text-center">
            Last updated: June 2025 <br />
          </p>
        </div>
  )
}
