import React from 'react';

const TicketModal = ({ ticket, onClose }) => {
  if (!ticket) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-6 w-[600px] rounded-lg shadow-xl border text-[16px] font-sanchez">
        <h2 className="text-xl font-semibold text-center mb-4">Ticket Details</h2>
        <div className="space-y-1">
          <p><strong>Ticket No:</strong> {ticket.ticketNo}</p>
          <p><strong>Date:</strong> {ticket.date}</p>
          <p><strong>Name:</strong> {ticket.name}</p>
          <p><strong>Dept:</strong> {ticket.department}</p>
          <br />
          <p><strong>Title:</strong> {ticket.subject}</p>
          <p><strong>Description:</strong> {ticket.description}</p>
          <p><strong>Category:</strong> {ticket.category}</p>
          <p><strong>Type:</strong> {ticket.type}</p>
          <p><strong>Priority:</strong> {ticket.priority}</p>
          <p><strong>Status:</strong> {ticket.status}</p>
          <p><strong>Attachment:</strong> {ticket.attachment || 'None'}</p>
        </div>
        <div className="text-center mt-5">
          <button
            onClick={onClose}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default TicketModal;
