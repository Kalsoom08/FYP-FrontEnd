import { LiaBusinessTimeSolid } from "react-icons/lia";
import { MdFileDownload } from "react-icons/md";
import timtableIcon from '../../assets/Timetable/timetable.png'
export const TimetableCard = () => {
    return (
        <>
            <div className="flex flex-col justify-center items-center border-2 border-[#293080] gap-6 py-6 mt-2 w-[25%] m-auto rounded-md px-2">
                <h1 className="text-[24px] font-semibold">Timetable PDF</h1>
                <div className="bg-gray-100 w-[50%] h-[200px] rounded-md flex justify-center items-center ">
                    <img src={timtableIcon} />
                </div>
               <button className="relative px-10 py-2 overflow-hidden border border-[#293080] text-white bg-[#293080] rounded-md group transition-all duration-500 ease-out cursor-pointer">
                    <span className="relative z-10 flex items-center gap-2 transition-all duration-500 group-hover:text-[#293080]">
                    Download PDF <MdFileDownload />
                    </span>
                    <span className="absolute inset-0 bg-white transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-700 ease-in-out"></span>
                </button>
                <p className="text-[14px] text-gray-400 text-center">Latest Updated: 24 June 2025 Updated by Admin</p>
            </div>
        </>
    )
}