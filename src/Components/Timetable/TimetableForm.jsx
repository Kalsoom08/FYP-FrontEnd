import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchTimetableOptions } from "../../APIs/Public/TimetableApi";

export const TimetableForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    department: "",
    semester: "",
    section: "",
  });

 const { data, isLoading } = useQuery({
    queryKey: ["timetable-options"],
    queryFn: fetchTimetableOptions,
 });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  if (isLoading) return <p>Loading form options...</p>;

  const { departments = [], semesters = [], sections = [] } = data || {};

  return (
    <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center mx-auto gap-6 py-8 px-4">
      <div className="w-full">
        <label htmlFor="department" className="block mb-2 text-lg font-semibold text-gray-800">
          Department
        </label>
        <select
          id="department"
          name="department"
          value={formData.department}
          onChange={handleChange}
          required
          className="w-full border border-[#293080] outline-none py-2 px-3 rounded-md focus:ring-2 focus:ring-[#293080]"
        >
          <option value="">Select Department</option>
          {departments.map((dep) => (
            <option key={dep} value={dep}>{dep}</option>
          ))}
        </select>
      </div>

      <div className="w-full flex flex-col md:flex-row gap-6">
        <div className="w-full">
          <label htmlFor="semester" className="block mb-2 font-medium">Semester</label>
          <select
            id="semester"
            name="semester"
            value={formData.semester}
            onChange={handleChange}
            required
            className="w-full border border-[#293080] outline-none py-2 px-3 rounded-md focus:ring-2 focus:ring-[#293080]"
          >
            <option value="">Select Semester</option>
            {semesters.map((sem) => (
              <option key={sem} value={sem}>{sem}</option>
            ))}
          </select>
        </div>

        <div className="w-full">
          <label htmlFor="section" className="block mb-2 font-medium">Section</label>
          <select
            id="section"
            name="section"
            value={formData.section}
            onChange={handleChange}
            required
            className="w-full border border-[#293080] outline-none py-2 px-3 rounded-md focus:ring-2 focus:ring-[#293080]"
          >
            <option value="">Select Section</option>
            {sections.map((sec) => (
              <option key={sec} value={sec}>{sec}</option>
            ))}
          </select>
        </div>
      </div>

      <button type="submit" className="relative px-10 py-2 overflow-hidden border border-[#293080] text-white bg-[#293080] rounded-md group transition-all duration-500 ease-out cursor-pointer">
        <span className="relative z-10 flex items-center gap-2 transition-all duration-500 group-hover:text-[#293080]">
          <CiSearch size={22} /> View Timetable
        </span>
        <span className="absolute inset-0 bg-white transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-700 ease-in-out"></span>
      </button>
    </form>
  );
};
