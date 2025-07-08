import { IoMdDownload } from "react-icons/io";

export const DatesheetCard = ({ department, semester }) => {
  return (
    <div className="min-w-[240px] bg-white shadow-md rounded-md p-4 flex flex-col items-start gap-2 mx-2 flex-shrink-0 cursor-pointer">
      <h2 className="font-semibold text-[#293080] text-base">{department}</h2>
      <p className="text-sm text-gray-500">Semester {semester}</p>
      <button
        className="relative mt-2 px-6 py-2 w-full overflow-hidden border border-[#293080] text-white bg-[#293080] rounded-md group transition-all duration-500 ease-out cursor-pointer"
        disabled
      >
        <span className="relative z-10 flex items-center justify-center gap-2 text-sm group-hover:text-[#293080] transition-all duration-300">
        <IoMdDownload size={16} /> Download PDF
        </span>
        <span className="absolute inset-0 bg-white transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-700 ease-in-out"></span>
      </button>

    </div>
  );
};
