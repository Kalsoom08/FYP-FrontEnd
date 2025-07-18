import heroPic from '../../assets/Home/picture.png';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const headlines = [
  'Build Your Dream',
  'Shaping Future Leaders',
  'Empowering Innovation',
];

export const HeroSection = () => {
  const [currentText, setCurrentText] = useState('');
  const [fullText, setFullText] = useState(headlines[0]);
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const timeout = setTimeout(() => {
      const updatedText = isDeleting
        ? fullText.substring(0, currentText.length - 1)
        : fullText.substring(0, currentText.length + 1);

      setCurrentText(updatedText);

      if (!isDeleting && updatedText === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % headlines.length);
        setFullText(headlines[(index + 1) % headlines.length]);
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, fullText, index]);

  return (
    <section className="w-full bg-white relative py-10 px-6 md:px-20 overflow-hidden">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
    <motion.div
      className="flex flex-col gap-6 z-10"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex flex-col gap-2">
        <h1 className="text-lg md:text-xl text-[#293080] font-medium">
          We Help to
        </h1>
        <h2 className="text-3xl md:text-5xl font-bold leading-snug text-transparent bg-clip-text bg-gradient-to-r from-[#4f66d4] to-[#293080] min-h-[60px]">
          {currentText}
        </h2>
        <p className="text-gray-600 text-sm md:text-base max-w-md">
          We are always available to consult on taking your higher education to the next level so you can stay competitive in the global world.
        </p>
      </div>

      <div className="flex flex-wrap gap-4">
        <Link
          to="/explore"
          className="px-6 py-3 bg-[#293080] text-white rounded shadow hover:bg-[#1e2566] transition duration-300"
        >
          Explore More →
        </Link>
        <Link
          to="/about"
          className="px-6 py-3 border border-[#293080] text-[#293080] rounded hover:bg-[#293080] hover:text-white transition duration-300"
        >
          Learn More
        </Link>
      </div>

      <div className="flex gap-4 mt-4">
        <a href="#" className="text-[#293080] hover:text-[#1e2566] text-xl"><FaFacebookF /></a>
        <a href="#" className="text-[#293080] hover:text-[#1e2566] text-xl"><FaTwitter /></a>
        <a href="#" className="text-[#293080] hover:text-[#1e2566] text-xl"><FaInstagram /></a>
        <a href="#" className="text-[#293080] hover:text-[#1e2566] text-xl"><FaLinkedinIn /></a>
      </div>
    </motion.div>
<motion.div
  className="relative flex items-center justify-center z-10"
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1 }}
>
  <div className="absolute w-[280px] h-[280px] md:w-[360px] md:h-[360px] bg-[#b4b8f7] rounded-full z-0 shadow-[0_20px_50px_rgba(0,0,0,0.1)]"></div>
  <img
    src={heroPic}
    alt="Graduate"
    className="w-[400px] sm:w-[460px] md:w-[540px] relative z-10  mt-80 md:-mt-16"
  />
</motion.div>


  </div>
</section>

  );
};
