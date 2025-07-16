import { useState } from 'react';
import { DesktopNavbar } from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';
import Logo from '../../assets/Logo/logo.png';

const Navbar = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  return (
    <>
      <div className='relative flex items-center justify-between px-4 py-2 bg-white shadow-sm'>

        <div className='flex items-center z-10'>
          <img src={Logo} alt="Logo" className='w-12 h-12 object-contain' />
        </div>

    
        <div className='absolute left-1/2 transform -translate-x-1/2 hidden lg:block'>
          <h2 className='text-center text-sm font-semibold text-[#293080]'>
            INSTITUTE OF BUSINESS AND MANAGEMENT SCIENCES - UNIVERSITY OF AGRICULTURE PESHAWAR
          </h2>
        </div>

    
        <div className='flex items-center gap-3 z-10'>
          <button className='bg-[#293080] text-white px-4 py-2 rounded text-sm font-medium hover:bg-[#1e2566] transition'>
            Login
          </button>
          <button
            onClick={() => setOpenMobileMenu(true)}
            className='md:hidden bg-[#293080] text-white px-4 py-2 rounded text-sm font-medium hover:bg-[#1e2566] transition'
          >
            Menu
          </button>
        </div>
      </div>

      <div className="hidden md:block">
        <DesktopNavbar />
      </div>

      
      <MobileNavbar openMenu={openMobileMenu} setOpenMenu={setOpenMobileMenu} />
    </>
  );
};

export default Navbar;
