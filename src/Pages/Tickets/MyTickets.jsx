import React, { useState } from 'react';
import DashboardLayout from '../../Components/Common/DashboardLayout';
import { Star, StarHalf } from 'lucide-react';
import ticketData from '../../assets/TicketData.js';
import TicketModal from '../../Components/Tickets/TicketModel.jsx';

const MyTicket = () => {
    const [selectedTicket, setSelectedTicket] = useState(null);

    const renderStars = (rating) => {
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 !== 0;
        const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
        return (
            <div className="flex gap-[2px]">
                {[...Array(fullStars)].map((_, i) => (
                    <Star key={`full-${i}`} className="text-yellow-500 fill-yellow-500 w-4 h-4" />
                ))}
                {halfStar && <StarHalf className="text-yellow-500 fill-yellow-500 w-4 h-4" />}
                {[...Array(emptyStars)].map((_, i) => (
                    <Star key={`empty-${i}`} className="text-gray-400 w-4 h-4" />
                ))}
            </div>
        );
    };

    const statusStyles = {
        'In Progress': 'bg-green-500',
        'On hold': 'bg-blue-800',
        Closed: 'bg-gray-700',
    };

    const isBlurred = !!selectedTicket;

    return (
        <DashboardLayout
            role="user"
            className={isBlurred ? 'bg-[#383636]/50 backdrop-blur-sm' : 'bg-white'}
        >
            <div className={`w-full h-full px-6 py-4 font-sanchez relative`}>
                <h2 className="text-2xl font-semibold text-center mb-4">List of Ticket</h2>

                <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-3">
                    <div className="flex items-center gap-2">
                        <input
                            type="text"
                            placeholder="Find ticket"
                            className="border px-3 py-1 rounded-md shadow-sm w-[200px]"
                        />
                        <button className="border bg-white px-2 py-[6px] shadow-sm rounded-md">🔍</button>
                    </div>

                    <div className="flex items-center gap-2">
                        <label htmlFor="entries" className="text-sm">Show:</label>
                        <select id="entries" className="border px-2 py-[4px] rounded-md shadow-sm">
                            <option value="10">10</option>
                            <option value="25">25</option>
                            <option value="50">50</option>
                        </select>
                        <span className="text-sm">Entries</span>
                    </div>
                </div>

                <div
                    className={`overflow-x-auto rounded-md shadow-md ${selectedTicket ? 'bg-[#383636]/30 backdrop-blur-sm text-white' : 'bg-white text-black'
                        }`}
                >
                    <table className="min-w-full table-auto border-t text-sm text-left">
                        <thead>
                            <tr>
                                <th className="px-4 py-2">Ticket No.</th>
                                <th className="px-4 py-2">Subject</th>
                                <th className="px-4 py-2">Status</th>
                                <th className="px-4 py-2">Support by</th>
                                <th className="px-4 py-2">Date</th>
                                <th className="px-4 py-2">Rate</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ticketData.map((ticket, index) => (
                                <tr
                                    key={ticket.id}
                                    className={`${selectedTicket
                                            ? 'hover:bg-[#5c5c5c]/40'
                                            : index % 2 === 0
                                                ? 'bg-gray-200'
                                                : 'bg-white'
                                        }`}
                                >
                                    <td
                                        className="px-4 py-2 text-blue-400 underline cursor-pointer"
                                        onClick={() => setSelectedTicket(ticket)}
                                    >
                                        {ticket.id}
                                    </td>
                                    <td className="px-4 py-2">{ticket.subject}</td>
                                    <td className="px-4 py-2">
                                        <span
                                            className={`px-2 py-1 rounded-full text-xs text-white ${statusStyles[ticket.status] || 'bg-gray-400'
                                                }`}
                                        >
                                            {ticket.status}
                                        </span>
                                    </td>
                                    <td className="px-4 py-2">{ticket.support}</td>
                                    <td className="px-4 py-2">{ticket.date}</td>
                                    <td className="px-4 py-2">{renderStars(ticket.rating)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>


                <div className="mt-4 text-sm text-gray-600">
                    Showing 1 to {ticketData.length} of {ticketData.length} entries
                </div>
                <div className="mt-1 text-sm text-right text-gray-500 pr-2">≪ 1 ≫</div>

                {/* Ticket Modal */}
                {selectedTicket && (
                    <div className="absolute inset-0 bg-opacity-40 backdrop-blur-sm flex justify-center items-center z-50">
                        <div className="bg-white rounded-lg shadow-lg w-[500px] max-w-[90%] px-8 py-6 font-sanchez text-left">
                            <h2 className="text-xl font-semibold text-center mb-4">Ticket Details</h2>
                            <p><strong>Ticket No:</strong> {selectedTicket.id}</p>
                            <p><strong>Date:</strong> {selectedTicket.date}</p>
                            <p><strong>Name:</strong> {selectedTicket.name}</p>
                            <p><strong>Dept:</strong> {selectedTicket.dept}</p>
                            <p><strong>Title:</strong> {selectedTicket.title}</p>
                            <p><strong>Description:</strong> {selectedTicket.description}</p>
                            <p><strong>Category:</strong> {selectedTicket.category}</p>
                            <p><strong>Type:</strong> {selectedTicket.type}</p>
                            <p><strong>Priority:</strong> {selectedTicket.priority}</p>
                            <p><strong>Status:</strong> {selectedTicket.status}</p>
                            <p><strong>Attachment:</strong> {selectedTicket.attachment || 'None'}</p>
                            <div className="mt-4 text-center">
                                <button
                                    onClick={() => setSelectedTicket(null)}
                                    className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </DashboardLayout>
    );
};

export default MyTicket;
