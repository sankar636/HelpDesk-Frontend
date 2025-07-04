// src/Pages/User/UserProfile.jsx
import React from 'react';
import DashboardLayout from '../../Components/Common/DashboardLayout';
import { FileCog } from 'lucide-react';
import { Link } from 'react-router-dom';

const UserProfile = () => {
  return (
    <DashboardLayout role="user">
      <h2 className="text-4xl font-semibold my-4">User Profile</h2>

      <div className="w-full h-[85%] p-8 bg-[#84e8dd] flex flex-col items-center font-sanchez">
        <div className="flex justify-around w-full px-10 gap-6 items-start">
          
          {/* Profile Card */}
          <div className="relative bg-white shadow-md rounded-xl p-6 w-[400px] min-h-[300px] flex flex-col">
            <Link to='/user/profile-setting' className="absolute top-3 right-3 cursor-pointer">
              <FileCog className="text-gray-500 hover:text-black" />
            </Link>
            <div className="flex justify-center mb-4">
              <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center">
                <img
                  src="https://via.placeholder.com/94x95"
                  className="rounded-full w-[94px] h-[95px] object-cover"
                />
              </div>
            </div>
            <div className="text-gray-800 space-y-2 px-2">
              <p><span className="font-semibold">Username:</span> John Doe</p>
              <p><span className="font-semibold">Contact:</span> +91-9876543210</p>
              <p><span className="font-semibold">Email:</span> john@example.com</p>
              <p><span className="font-semibold">Department:</span> IT Support</p>
            </div>
          </div>

          {/* Feedback Card */}
          <div className="bg-white shadow-md rounded-xl p-6 w-[400px] min-h-[200px] flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-center">Give Your Feedback</h3>
              <textarea
                className="w-full h-20 p-3 rounded-md border border-gray-300 resize-none text-sm mb-3"
                placeholder="Write your feedback here..."
              />
              <div className="flex justify-center text-yellow-500 text-xl mb-3">
                {'★'.repeat(0)}{'☆'.repeat(5)}
              </div>
            </div>
            <button className="bg-[#2af5ff] w-full py-2 rounded hover:bg-[#03cccd] transition">
              Submit Feedback
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default UserProfile;
