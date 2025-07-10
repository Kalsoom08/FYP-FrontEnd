import { useState } from "react";
import { CiSearch } from "react-icons/ci";

export const StatusForm = ({ onSearch }) => {
  const [registration, setRegistration] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = registration.trim();
    if (trimmed) {
      onSearch(trimmed);
      setRegistration("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex flex-col "
    >
      <h1 className="text-center text-2xl sm:text-3xl font-bold text-[#293080] mb-6">
        Registration Status
      </h1>

      <div className="flex flex-col gap-5 items-center">
        <label htmlFor="registration" className="sr-only">
          Registration Number
        </label>
        <div className="w-full flex justify-center">
          <input
            type="text"
            id="registration"
            value={registration}
            onChange={(e) => setRegistration(e.target.value)}
            className="w-full sm:w-[65%] outline-none border-2 border-[#293080] rounded-md px-3 py-2 text-gray-700 text-sm"
            placeholder="e.g. 2021-CS-001"
          />
        </div>

        <button
          type="submit"
          disabled={!registration.trim()}
          className={`relative mt-4 px-6 py-2 w-full max-w-xs mx-auto overflow-hidden border border-[#293080] text-white bg-[#293080] rounded-md group transition-all duration-500 ease-out cursor-pointer text-sm ${
            !registration.trim() ? " cursor-not-allowed" : ""
          }`}
        >
          <span className="relative z-10 flex items-center justify-center gap-2 group-hover:text-[#293080]">
            <CiSearch size={20} /> Search
          </span>
          <span className="absolute inset-0 bg-white transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-700 ease-in-out"></span>
        </button>
      </div>
    </form>
  );
};
