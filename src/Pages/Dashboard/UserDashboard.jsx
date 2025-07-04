// Pages/Dashboard/UserDashboard.jsx
import React from 'react';
import DashboardLayout from '../../Components/Common/DashboardLayout.jsx';
import TicketCard from '../../Components/Tickets/TicketCard.jsx';

const UserDashboard = () => {
  return (
    <DashboardLayout role='user'>
      <div className='flex justify-center text-4xl mr-[60px] my-8'>Dashboard</div>
      <div className='flex gap-4'>
        <TicketCard title='Total Tickets' count={12} bgColor='#2F82FF' />
        <TicketCard title='Total Solved' count={8} bgColor='#0BFF68' />
        <TicketCard title='Total Awaiting Approval' count={2} bgColor='#FE594E' />
        <TicketCard title='Total in Progress' count={2} bgColor='#FCFF6C' />
      </div>
    </DashboardLayout>
  );
};

export default UserDashboard;
