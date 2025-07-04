// components/Layout/DashboardFooter.jsx
import React from 'react';

const DashboardFooter = ({ blurred = false }) => {
  return (
    <footer
      className={`w-full h-[50px] flex items-center justify-center text-white text-sm 
        ${blurred ? 'bg-[#55D6C2]/50 backdrop-blur-sm' : 'bg-[#55D6C2]'}`}
    >
      &copy; {new Date().getFullYear()} Helpdesk Community — All rights reserved.
    </footer>
  );
};

export default DashboardFooter;
