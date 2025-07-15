import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {DesktopNavbar } from './Components/NavBar/DesktopNavbar';
import { Academics } from './Layout/Academics/Academics';
import { Examinations } from './Layout/Examinations/Examinations';
import { Home } from './Pages/Public/Home';
import {Students} from '../src/Layout/Students/Students';

const App = () => {
  return (
    <div>
      <DesktopNavbar />

      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/academics/*" element={<Academics />} />
          <Route path="/examinations/*" element={<Examinations />} />
          <Route path='/students/*' element={<Students/>}/>

        </Routes>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default App;
