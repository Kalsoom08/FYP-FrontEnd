export const DatesheetForm = ({ onFilter }) => {
  return (
    <form
      className="w-full flex flex-col sm:flex-row items-center gap-4 bg-[#f6f6f6] p-4 rounded-md"
      onSubmit={(e) => {
        e.preventDefault();
        onFilter(); // handle filter logic
      }}
    >
      <select
        className="flex-1 border-2 border-[#293080] rounded-md px-3 py-2 text-sm text-gray-700"
        defaultValue=""
      >
        <option value="">Select Department</option>
        <option value="CS">Computer Science</option>
        <option value="IT">Information Technology</option>
      </select>
      <select
        className="flex-1 border-2 border-[#293080] rounded-md px-3 py-2 text-sm text-gray-700"
        defaultValue=""
      >
        <option value="">Select Semester</option>
        <option value="6th">6th</option>
        <option value="8th">8th</option>
      </select>
      <button
        type="submit"
        className="relative px-6 py-2 w-full sm:w-auto overflow-hidden border border-[#293080] text-white bg-[#293080] rounded-md group transition-all duration-500 ease-out cursor-pointer"
        >
            <span className="relative z-10 flex items-center justify-center gap-2 text-sm group-hover:text-[#293080] transition-all duration-300">
            Filter
            </span>
            <span className="absolute inset-0 bg-white transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-700 ease-in-out"></span>
      </button>

    </form>
  );
};
