import { MdFileDownload } from "react-icons/md";
import timetableIcon from "../../assets/Timetable/timetable.png";

export const TimetableCard = ({ data, isLoading }) => {
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[300px]">
        <p className="text-gray-600">Loading timetable...</p>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="flex flex-col justify-center items-center border border-[#293080] gap-6 py-6 mt-2 m-auto rounded-md px-2">
        <h1 className="text-[24px] font-semibold">Timetable PDF</h1>
        <div className="bg-gray-100 w-[50%] h-[200px] rounded-md flex justify-center items-center">
          <img src={timetableIcon} alt="Timetable Placeholder" />
        </div>
        <p className="text-[14px] text-gray-500 text-center">No timetable found. Please search using your department, semester, and section.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center border border-[#293080] gap-6 py-6 mt-2 m-auto rounded-md px-2">
      <h1 className="text-[24px] font-semibold">Timetable PDF</h1>
      
      {/* Show PDF preview (iframe) */}
      <div className="bg-gray-100 w-[90%] h-[300px] rounded-md">
        <iframe
          src={data.fileUrl}
          title="Timetable Preview"
          width="100%"
          height="100%"
        ></iframe>
      </div>

      {/* Download/Open button */}
      <a
        href={data.fileUrl}
        target="_blank"
        rel="noopener noreferrer"
        download
        className="relative px-10 py-2 overflow-hidden border border-[#293080] text-white bg-[#293080] rounded-md group transition-all duration-500 ease-out cursor-pointer"
      >
        <span className="relative z-10 flex items-center gap-2 transition-all duration-500 group-hover:text-[#293080]">
          Download PDF <MdFileDownload />
        </span>
        <span className="absolute inset-0 bg-white transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-700 ease-in-out"></span>
      </a>

      <p className="text-[14px] text-gray-500 text-center">
        Department: <strong>{data.department}</strong> | Semester: <strong>{data.semester}</strong> | Section: <strong>{data.section}</strong>
      </p>
      <p className="text-[12px] text-gray-400">Last updated: {new Date(data.updatedAt).toLocaleDateString()}</p>
    </div>
  );
};
