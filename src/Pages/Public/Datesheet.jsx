import { useRef } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { DatesheetForm } from "../../Components/Datesheet/DatesheetForm";
import { DatesheetCard } from "../../Components/Datesheet/DatesheetCard";

const dummyData = [
  { department: "Computer Science", semester: "8th" },
  { department: "Computer Science", semester: "6th" },
  { department: "Information Technology", semester: "6th" },
  { department: "Information Technology", semester: "8th" },
  { department: "Software Engineering", semester: "6th" },
];

export const Datesheet = () => {
  const scrollRef = useRef();

  const scroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = 300;
    if (direction === "left") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-10 relative">
      <h1 className="text-2xl sm:text-3xl font-bold text-center text-[#293080] mb-6">
        Date Sheet
      </h1>
      <DatesheetForm onFilter={() => {}} />
      <div className="relative mt-6">
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[#293080] text-white p-2 rounded-full shadow-md hover:bg-[#1f265c] transition cursor-pointer"
        >
          <FaAngleLeft size={20} />
        </button> 
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-4 px-8 no-scrollbar scroll-smooth"
        >
          {dummyData.map((item, index) => (
            <DatesheetCard
              key={index}
              department={item.department}
              semester={item.semester}
            />
          ))}
        </div>
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#293080] text-white p-2 rounded-full shadow-md hover:bg-[#1f265c] transition cursor-pointer"
        >
          <FaAngleRight size={20} />
        </button>
      </div>
    </section>
  );
};
