// Components/Common/DashboardLayout.jsx
import React from 'react';
import DashboardHeader from './DashboardHeader';
import DashboardSidebar from './DashboardSidebar';
import DashboardFooter from './DashboardFooter';

const DashboardLayout = ({ children, role, className = '' }) => {
  const isBlurred = className.includes('bg-[#383636]');
  return (
    <div className={`min-h-screen text-gray-800 overflow-hidden ${className}`}>
      <DashboardHeader blurred={isBlurred} />
      <div className="flex flex-col lg:flex-row h-[calc(100vh-90px)]">
        <DashboardSidebar role={role} blurred={isBlurred} />
        <div className="flex-1 flex flex-col">
          <main className="flex-1 overflow-y-auto px-12 py-4">{children}</main>
          <DashboardFooter blurred={isBlurred} />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
