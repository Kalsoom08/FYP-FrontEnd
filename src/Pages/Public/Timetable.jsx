import { TimetableForm } from "../../Components/Timetable/TimetableForm";
import { TimetableCard } from "../../Components/Timetable/TimetableCard";

export const Timetable = () => {
  return (
    <section className="max-w-6xl mx-auto py-8 px-4">
  <div className="border-2 border-[#293080] rounded-md p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-2 gap-6 bg-white">
    <div className="flex justify-center items-center px-2 sm:px-4">
      <div className="w-full max-w-md">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#293080]">View Your Class</h1>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#293080] mb-2">Timetable</h2>
        <p className="text-gray-500 text-sm sm:text-base mb-4 sm:mb-6">
          Stay organized and never miss your class with the latest IBMS Class schedule.
        </p>
        <TimetableForm />
      </div>
    </div>
    <div className="flex justify-center items-center px-2 sm:px-4">
      <TimetableCard />
    </div>
  </div>
</section>
  );
};
