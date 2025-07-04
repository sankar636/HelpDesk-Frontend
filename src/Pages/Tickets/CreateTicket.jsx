// src/Pages/Tickets/CreateTicket.jsx
import React from 'react';
import recaptchaImg from '../../assets/HumanverficationImg.png'
import DashboardLayout from '../../Components/Common/DashboardLayout';

const CreateTicket = () => {
  return (
    <DashboardLayout role="user">
      <div className="w-full max-h-[884px] h-full pr-6 py-8 bg-white font-[sanchez]">
        <h2 className="text-2xl font-semibold text-center mb-6">Create New Ticket</h2>

        <form className="w-[984px] mx-auto space-y-4">
          {/* Row 1: Ticket No. & Date */}
          <div className="flex gap-4">
            <div className="flex items-center w-1/2">
              <label className="w-[100px] text-sm font-medium">Ticket No.</label>
              <input type="text" className="flex-1 h-9 border border-gray-300 rounded px-2" />
            </div>
            <div className="flex items-center w-1/2">
              <label className="w-[100px] text-sm font-medium">Date:</label>
              <input type="date" className="flex-1 h-9 border border-gray-300 rounded px-2" />
            </div>
          </div>

          {/* Row 2: Name & Department */}
          <div className="flex gap-4">
            <div className="flex items-center w-1/2">
              <label className="w-[100px] text-sm font-medium">Name:</label>
              <input type="text" className="flex-1 h-9 border border-gray-300 rounded px-2" />
            </div>
            <div className="flex items-center w-1/2">
              <label className="w-[100px] text-sm font-medium">Department:</label>
              <input type="text" className="flex-1 h-9 border border-gray-300 rounded px-2" />
            </div>
          </div>

          {/* Row 3: Subject */}
          <div className="flex items-center">
            <label className="w-[100px] text-sm font-medium">Subject:</label>
            <input type="text" className="flex-1 h-9 border border-gray-300 rounded px-2" />
          </div>

          {/* Row 4: Category & Description */}
          <div className="flex gap-4">
            <div className="flex items-center w-1/2">
              <label className="w-[100px] text-sm font-medium">Category:</label>
              <input type="text" className="flex-1 h-9 border border-gray-300 rounded px-2" />
            </div>
            <div className="flex w-1/2">
              <label className="w-[100px] text-sm font-medium pt-1">Description:</label>
              <textarea className="flex-1 h-[80px] border border-gray-300 rounded px-2 py-1 resize-none" />
            </div>
          </div>

          {/* Row 5: Type & Priority */}
          <div className="flex gap-4">
            <div className="flex items-center w-1/2">
              <label className="w-[100px] text-sm font-medium">Type:</label>
              <input type="text" className="flex-1 h-9 border border-gray-300 rounded px-2" />
            </div>
            <div className="flex items-center w-1/2">
              <label className="w-[100px] text-sm font-medium">Priority:</label>
              <input type="text" className="flex-1 h-9 border border-gray-300 rounded px-2" />
            </div>
          </div>
        </form>

        {/* CAPTCHA + Submit */}
        <div className="mt-6 w-[984px] mx-auto flex justify-between items-center">
          <div className="w-[501px] h-[144px]">
            <img
              src={recaptchaImg}
              alt="I'm not a robot"
              className="w-full h-full object-contain"
            />
          </div>

          <button
            type="submit"
            className="w-[297px] h-[57px] bg-[#55D6D2] text-black font-medium rounded-[10px] hover:bg-[#3bc5c0] transition"
          >
            Submit
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CreateTicket;
