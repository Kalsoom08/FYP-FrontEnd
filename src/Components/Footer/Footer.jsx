import { FaPhoneAlt, FaEnvelope, FaFacebook, FaWhatsapp, FaTwitter, FaMapMarkerAlt } from 'react-icons/fa';
import Logo from '../../assets/Logo/logo.png'; 

const Footer = () => {
  return (
    <footer className="bg-[#293080] text-white px-6 py-10">
     
      <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8">
        <img src={Logo} alt="Logo" className="w-14 h-14 object-contain" />
        <h2 className="text-lg md:text-xl font-medium">
          Institute of Business and Management Science
        </h2>
      </div>

     
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
     
        <div className="space-y-2">
          <p className="font-semibold">Home</p>
          <p>About us</p>
          <p>News and Events</p>
          <p>Campus Map</p>
          <p>Calender</p>
          <p>Notification</p>
        </div>

        
        <div className="flex flex-col gap-2">
          <p className="font-semibold">Academics</p>
          <a href="/academics/timetable" target='_blank'>Class Timetables</a>
          <p>Faculty</p>
          <a href='/students/rollnumber' target='_blank'>New Students Rollno</a>
          <a href='/academics/subjects' target='_blank'>Subjects and contents</a>
        </div>

      
        <div className="space-y-2">
          <p className="font-semibold">Departments</p>
          <p>BS CS</p>
          <p>BS IT</p>
          <p>BS AI</p>
          <p>BBA</p>
        </div>

      
        <div className="space-y-2">
          <p className="font-semibold">Contact us</p>
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-sm" />
            <span>+923738474747</span>
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-sm" />
            <span>pio@uop.edu.pk</span>
          </div>
          <div className="flex gap-4 mt-2 text-lg">
            <FaFacebook className="hover:text-blue-400 cursor-pointer" />
            <FaWhatsapp className="hover:text-green-400 cursor-pointer" />
            <FaTwitter className="hover:text-blue-300 cursor-pointer" />
            <FaMapMarkerAlt className="hover:text-red-400 cursor-pointer" />
          </div>
        </div>
      </div>

     
      <div className="mt-10 border-t border-white/20 pt-4 text-center text-xs">
        © 2025 IBMS - University of Agriculture, Peshawar
      </div>
    </footer>
  );
};

export default Footer;
0