// src/Components/Tickets/TicketCard.jsx
import React from 'react';

const TicketCard = ({ title, count, bgColor }) => {
  return (
    <div
      className="w-[248px] h-[273px] rounded-[15px] shadow-md flex flex-col justify-between px-4 py-4"
      style={{ backgroundColor: bgColor }}
    >
      <p className="text-[24px] font-medium text-black text-center h-[46px]">{title}</p>

      <div className="flex-1 flex items-center justify-center">
        <h2 className="text-6xl font-bold text-black">{count}</h2>
      </div>
    </div>
  );
};

export default TicketCard;
