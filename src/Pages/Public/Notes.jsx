import { useState, useEffect } from 'react';
import NotesSearch from '../../Components/Notes/NotesSearch';
import { CiSearch } from "react-icons/ci";
import { IoSearch } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";




function NotesPage() {
  const [department, setDepartment] = useState('');
  const [semester, setSemester] = useState('');
  const [subject, setSubject] = useState('');
  const [search, setSearch] = useState(false);

  useEffect(() => {
    setSearch(false);
  }, [department, semester, subject]);

  const handleSearch = () => {
    if (department && semester && subject) {
      setSearch(true);
    } else {
      alert('Please select Department, Semester, and Subject before searching.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-md">
        <h2 className="text-3xl font-bold text-[#293080] mb-8 text-center">Notes</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div>
            <label htmlFor="department" className="block mb-2 font-medium">Department</label>
            <select
              id="department"
              className="w-full p-3 border border-gray-300 rounded-md"
              onChange={(e) => setDepartment(e.target.value)}
              value={department}
            >
              <option value="" disabled>Select Department</option>
              <option value="IT">IT</option>
              <option value="CS">CS</option>
               <option value="IT">IT</option>
              <option value="CS">CS</option>
            </select>
          </div>

          <div>
            <label htmlFor="semester" className="block mb-2 font-medium">Semester</label>
            <select
              id="semester"
              className="w-full p-3 border border-gray-300 rounded-md"
              onChange={(e) => setSemester(e.target.value)}
              value={semester}
            >
              <option value="" disabled>Select Semester</option>
              <option value="6th">6th</option>
              <option value="7th">7th</option>
              <option value="2nd">2nd</option>
            </select>
          </div>

          <div>
            <label htmlFor="subject" className="block mb-2 font-medium">Subject</label>
            <select
              id="subject"
              className="w-full p-3 border border-gray-300 rounded-md"
              onChange={(e) => setSubject(e.target.value)}
              value={subject}
            >
              <option value="" disabled>Select Subject</option>
              <option value="DB">DB</option>
              <option value="ICT">ICT</option>
              <option value="C++">C++</option>
            </select>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={handleSearch}
            className="relative mt-4 px-20 py-2 overflow-hidden border border-[#293080] text-white bg-[#293080] rounded-md group transition-all duration-500 ease-out cursor-pointer"
          >
            <span className="relative z-10 flex items-center gap-3 transition-all duration-500 group-hover:text-[#293080]">
                <FaSearch />
                Search
            </span>

                <span className="absolute inset-0 bg-white transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-700 ease-in-out group-hover:text-[#293080]"></span>
           
          </button>
        </div>

      {search && (
  <div className="mt-10 ">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <NotesSearch
        department={department}
        semester={semester}
        subject={subject}
      />
    </div>
  </div>
)}

      </div>
    </div>
  );
}

export default NotesPage;
