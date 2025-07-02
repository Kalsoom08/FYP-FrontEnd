import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { FaUser, FaLock } from 'react-icons/fa';
import Logo from '../../assets/Login/logo.png';
import { loginAdminAPI } from '../../APIs/Admin/AuthAPI';
// import Toast from '../../Components/Common/toast';
import { toast } from 'react-toastify';

const AdminLogin = () => {
  const [formData, setFormData] = useState(
    { 
      userName: '', 
      password: '' 
    });

  const mutation = useMutation({
    mutationFn: loginAdminAPI,
    onSuccess: (data) => {
      console.log('Login Successful:', data);
      toast.success("Login Successful");
         setFormData({
      userName: '', 
      password: '' 
    })
      
    },
    onError: (error) => {
      console.log('Login Failed:', error.message);
    },
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    mutation.mutate(formData);
 

  };

    


  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-sm text-center">
        <img src={Logo} alt="University Logo" className="w-20 mx-auto mb-4" />
        <h2 className="text-2xl font-semibold text-[#293080] mb-1">Login</h2>
        <p className="text-gray-500 text-sm mb-6">
          Access restricted to authorized administrators only.
        </p>


        <form onSubmit={handleSubmit} className="space-y-4">
          {mutation.isError && (
            <p className="text-red-500 text-sm mt-1">
              {mutation.error?.response?.data?.message || 'Login failed'}
            </p>
          )}
        
          <div className="flex items-center bg-gray-200 rounded-full px-4 py-4 focus-within:ring-2 focus-within:ring-[#293080]">
            <FaUser className="text-gray-500 mr-2" />
            <input
              type="text"
              name="userName"
              placeholder="Enter Username"
              onChange={handleChange}
              value={formData.userName}
              className="bg-transparent outline-none flex-1 text-sm"
            />
          </div>

   
          <div className="flex items-center bg-gray-200 rounded-full px-4 py-4 focus-within:ring-2 focus-within:ring-[#293080]">
            <FaLock className="text-gray-500 mr-2" />
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleChange}
              className="bg-transparent outline-none flex-1 text-sm"
            />
          </div>

           <button type='submit'
           className="relative mt-4 px-20 py-2 overflow-hidden border border-[#293080] text-white bg-[#293080] rounded-full group transition-all duration-500 ease-out cursor-pointer" disabled={mutation.isPending}>
                <span className="relative z-10 flex items-center gap-2 transition-all duration-500 group-hover:text-[#293080]">
                {mutation.isPending ? 'Logging in...' : 'Login'}
                </span>
                <span className="absolute inset-0 bg-white transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-700 ease-in-out"></span>
            </button>
            

        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
