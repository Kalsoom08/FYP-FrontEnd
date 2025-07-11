import { CiSearch } from "react-icons/ci";

export const SubjectForm = () => {
  return (
    <div className="w-full flex justify-center items-center py-4">
      <form className="w-full max-w-md flex flex-col gap-6 items-center">
    
        <label htmlFor="department" className="w-full flex flex-col gap-2">
          <p className="text-lg font-semibold text-[#293080]">Department</p>
          <select
            id="department"
            className="w-full outline-none border border-[#293080] rounded-md px-4 py-2 text-gray-700 text-sm focus:ring-2 focus:ring-[#293080]"
          >
            <option value="">Select Department</option>
            <option value="IT">BS IT</option>
            <option value="CS">BS CS</option>
          </select>
        </label>

   
        <label htmlFor="semester" className="w-full flex flex-col gap-2">
          <p className="text-lg font-semibold text-[#293080]">Semester</p>
          <select
            id="semester"
            className="w-full outline-none border border-[#293080] rounded-md px-4 py-2 text-gray-700 text-sm focus:ring-2 focus:ring-[#293080]"
          >
            <option value="">Select Semester</option>
            <option value="6th">6th</option>
            <option value="8th">8th</option>
          </select>
        </label>


        <button
          type="submit"
          disabled
          className="relative mt-4 px-6 py-2 w-full text-sm font-medium text-white bg-[#293080] border border-[#293080] rounded-full overflow-hidden group transition-all duration-500 ease-out cursor-not-allowed"
        >
          <span className="relative z-10 flex items-center justify-center gap-2 group-hover:text-[#293080]">
            <CiSearch size={20} /> View List
          </span>
          <span className="absolute inset-0 bg-white transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-700 ease-in-out" />
        </button>
      </form>
    </div>
  );
};
