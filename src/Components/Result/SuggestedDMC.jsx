import { useRef } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";

export const SuggestedDMC = () => {
  const scrollRef = useRef();

  const scroll = (dir) => {
    const container = scrollRef.current;
    container.scrollBy({
      left: dir === "left" ? -300 : 300,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative mt-10">
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[#293080] text-white p-2 rounded-full cursor-pointer"
      >
        <FaAngleLeft />
      </button>

      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-4 px-8 no-scrollbar scroll-smooth cursor-pointer"
      >
        {[...Array(6)].map((_, i) => (
          <div key={i} className="border-2 border-[#293080] rounded-md p-4 min-w-[240px] text-center bg-white">
            <p className="font-semibold">Tom Smith</p>
            <p className="text-sm">Roll No: 81</p>
            <p className="text-sm">GPA: <b>3.30</b> | CGPA: <b>3.20</b></p>
            <button className="mt-3 px-4 py-1 bg-[#293080] text-white rounded-md text-xs hover:bg-[#1f265c] transition cursor-pointer">
              <IoDocumentTextOutline className="inline mr-1" /> View DMC
            </button>
          </div>
        ))}
      </div>

      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#293080] text-white p-2 rounded-full cursor-pointer"
      >
        <FaAngleRight />
      </button>
    </div>
  );
};
