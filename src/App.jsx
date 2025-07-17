import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Academics } from './Layout/Academics/Academics';
import { Examinations } from './Layout/Examinations/Examinations';
import { Home } from './Pages/Public/Home';
import {Students} from '../src/Layout/Students/Students';
import Navbar from './Components/NavBar/Navbar';
import Footer from '../src/Components/Footer/Footer';

const App = () => {
  return (
    <div>
      <Navbar />

      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/academics/*" element={<Academics />} />
          <Route path="/examinations/*" element={<Examinations />} />
          <Route path='/students/*' element={<Students/>}/>

        </Routes>
      </div>
      <Footer/>
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