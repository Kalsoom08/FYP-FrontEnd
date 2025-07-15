import { FaDownload } from 'react-icons/fa';

export const CalendarCard = ({ calendarData }) => {
  return (
    <div className="border border-indigo-200 rounded-xl p-6 shadow-md bg-white">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6 text-center">
        {calendarData.map((item, idx) => (
          <div key={idx} className='shadow-md py-6 rounded-md'>
            <p className="font-semibold text-indigo-700 text-sm sm:text-base">{item.label}</p>
            <p className="text-gray-600 text-xs sm:text-sm">{item.date}</p>
          </div>
        ))}
      </div>
      <div className="bg-gray-100 p-4 rounded-lg flex flex-col sm:flex-row justify-between items-center gap-3">
        <div className="flex items-center gap-2 text-sm sm:text-base">
          <FaDownload className="text-indigo-700" />
          <span className="text-gray-700">Download full Academic Calendar PDF</span>
        </div>
        <button className="bg-indigo-900 text-white px-4 py-2 rounded text-sm sm:text-base">
          Download
        </button>
      </div>
    </div>
  );
};

