import { FaDownload } from "react-icons/fa";

export const HallStatementCard = () => {
  return (
    <div className="flex items-center justify-between gap-4 bg-white  rounded-md shadow-md p-4 max-w-2xl mx-auto mt-6 cursor-pointer">
      <div className="flex items-center gap-4">
        <div className="bg-gray-100 px-4 py-3 rounded-md shadow-inner">
          <p className="text-[#293080] font-bold text-sm">PDF</p>
        </div>
        <div>
          <h3 className="font-semibold text-[#293080] text-sm sm:text-base">
            Hall Statement &nbsp; <span className="font-medium text-black">CS Semester 1st</span>
          </h3>
          <p className="text-gray-500 text-xs sm:text-sm">Currently Available · Just now</p>
        </div>
      </div>
      <button
        disabled
        className="p-2 bg-[#293080] text-white rounded-md hover:bg-[#1f265c] transition shadow cursor-pointer"
      >
        <FaDownload size={16} />
      </button>
    </div>
  );
};
