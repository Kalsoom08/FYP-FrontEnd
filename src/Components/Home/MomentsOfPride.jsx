import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa6";
import { useEffect, useState } from "react";

const departments = [
  {
    title: "Department of CS",
    description:
      "Empowering innovation through logic and code. Proudly celebrating our tech pioneers",
  },
  {
    title: "Department of IT",
    description:
      "Bridging systems and solutions through the future of digital transformation",
  },
  {
    title: "Department of BBA",
    description:
      "Shaping vision with strategy and nurturing tomorrow’s business leaders",
  },
  {
    title: "Department of AI",
    description:
      "Advancing intelligence with algorithms and innovation for a smarter tomorrow",
  },
];

export const MomentsOfPride = () => {
  const [animatedText, setAnimatedText] = useState("");
  const fullText =
    "The Institute of Business and Management Sciences (IBMS) proudly celebrated Convocation 2022, honoring the hard work, dedication, and achievements of our graduating students. This special event marked the successful completion of their academic journey and the beginning of a new chapter in their professional lives.";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setAnimatedText((prev) => prev + fullText[index]);
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 20);
    return () => clearInterval(interval);
  }, []);

  const handleViewGallery = () => {
    document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="w-full px-4 md:px-10 py-12 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-indigo-900 mb-2">
          Moments of Pride{" "}
          <span className="text-indigo-700">IBMS Convocation 2022</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative bg-gradient-to-br from-[#293080] via-indigo-700 to-indigo-500 text-white p-6 rounded-xl col-span-1 md:col-span-2 shadow-xl cursor-pointer overflow-hidden"
          >
            <div className="absolute -top-6 -right-6 w-40 h-40 bg-indigo-300/30 rounded-full z-0"></div>
            <div className="absolute -bottom-10 left-10 w-20 h-20 bg-indigo-300/20 rounded-full z-0"></div>
            <div className="absolute top-10 right-20 w-12 h-12 bg-indigo-200/30 rounded-full z-0"></div>
            <div className="absolute bottom-4 right-4 w-16 h-16 bg-indigo-200/40 rounded-full z-0"></div>
            <div className="absolute top-1/2 -left-8 w-10 h-10 bg-indigo-300/25 rounded-full z-0"></div>
            <div className="relative z-10 text-left">
              <p className="text-sm md:text-base whitespace-pre-line">
                {animatedText}
              </p>
              <button
                onClick={handleViewGallery}
                className="mt-4 px-4 py-2 bg-white text-indigo-700 font-medium rounded hover:bg-indigo-50 cursor-pointer"
              >
                View All Gallery
              </button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="rounded-xl overflow-hidden shadow-lg cursor-pointer"
          >
            <img
              src="https://images.pexels.com/photos/7944131/pexels-photo-7944131.jpeg"
              alt="Convocation"
              className="object-cover w-full h-full"
            />
          </motion.div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10">
          {departments.map((dept, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white shadow-gray shadow-lg p-4 text-left cursor-pointer transition-all duration-300 hover:bg-[#293080] hover:text-white group"
            >
              <div className="flex items-center gap-3 mb-2">
                <FaGraduationCap className="text-indigo-700 text-xl group-hover:text-white transition-all duration-300" />
                <h3 className="text-lg font-semibold text-indigo-900 group-hover:text-white transition-all duration-300">
                  {dept.title}
                </h3>
              </div>
              <p className="text-sm text-indigo-800 group-hover:text-white">
                {dept.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
