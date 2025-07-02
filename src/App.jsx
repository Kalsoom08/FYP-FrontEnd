import React from 'react'
import  {TimetableCard}  from '../src/Components/Timetable/TimetableCard';
import AdminLogin from '../src/Pages/Admin/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div>
      {/* <TimetableCard/> */}
    
      <AdminLogin/>
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
  )
}

export default App