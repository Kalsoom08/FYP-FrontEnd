import { CiSearch } from "react-icons/ci";

export const SlipForm = () => {
  return (
   <form className="w-full flex flex-col gap-4">
    <h1 className="text-2xl sm:text-3xl font-bold text-[#293080] pb-5 md:pb-10" >Get Renewable Slip</h1>
  <label htmlFor="department" className="flex flex-col gap-1">
    <p className="text-[1.1rem] sm:text-[1.2rem] font-semibold text-[#293080]">
      Department
    </p>
    <select
      id="department"
      className="w-full outline-none border-2 border-[#293080] rounded-md px-3 py-2 text-gray-700 text-sm"
    >
      <option value="">Select Department</option>
      <option value="IT">BS IT</option>
      <option value="CS">BS CS</option>
    </select>
  </label>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <label htmlFor="semester" className="flex flex-col gap-1">
      <p className="text-[1.1rem] sm:text-[1.2rem] font-semibold text-[#293080]">
        Semester
      </p>
      <select
        id="semester"
        className="w-full outline-none border-2 border-[#293080] rounded-md px-3 py-2 text-gray-700 text-sm"
      >
        <option value="">Select Semester</option>
        <option value="6th">6th</option>
        <option value="8th">8th</option>
      </select>
    </label>

    <label htmlFor="rollnumber" className="flex flex-col gap-1">
      <p className="text-[1.1rem] sm:text-[1.2rem] font-semibold text-[#293080]">
        Roll Number
      </p>
      <input
        type="text"
        id="rollnumber"
        className="w-full outline-none border-2 border-[#293080] rounded-md px-3 py-2 text-gray-700 text-sm"
        placeholder="e.g. 2021-CS-001"
      />
    </label>
  </div>

  <button
    type="submit"
    className="relative mt-4 px-6 py-2 w-full max-w-xs mx-auto overflow-hidden border border-[#293080] text-white bg-[#293080] rounded-full group transition-all duration-500 ease-out cursor-pointer text-sm"
    disabled
  >
    <span className="relative z-10 flex items-center justify-center gap-2 group-hover:text-[#293080]">
      <CiSearch size={20} /> Search
    </span>
    <span className="absolute inset-0 bg-white transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-700 ease-in-out"></span>
  </button>
</form>

  );
};
