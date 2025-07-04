// src/Components/Common/DashboardSidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import {
  LayoutDashboard,
  PlusCircle,
  List,
  Users,
  Settings,
  ShieldCheck,
  Briefcase,
  MessageCircle,
  DatabaseZap,
  Ticket,
  Tickets
} from 'lucide-react';

const DashboardSidebar = ({ role, blurred }) => {
  const renderLinks = () => {
    switch (role) {
      case 'user':
        return (
          <>
            <Link to="/user/dashboard" className="flex items-center gap-2">
              <LayoutDashboard /> Dashboard
            </Link>
            <Link to="/user/create-ticket" className="flex items-center gap-2">
              <PlusCircle /> New Ticket
            </Link>
            <Link to="/user/my-tickets" className="flex items-center gap-2">
              <List /> My Tickets
            </Link>
          </>
        );
      case 'admin':
        return (
          <>
            <Link to="/admin/dashboard" className="flex items-center gap-2">
              <LayoutDashboard /> Dashboard
            </Link>
            <Link to="/admin/database" className="flex items-center gap-2">
              <DatabaseZap /> Database
            </Link>
            <Link to="/admin/settings" className="flex items-center gap-2">
              <Settings /> Settings
            </Link>
            <Link to="/admin/users" className="flex items-center gap-2">
              <Users /> User Log History
            </Link>
          </>
        );
      case 'tech':
        return (
          <>
            <Link to="/tech/dashboard" className="flex items-center gap-2">
              <LayoutDashboard /> Dashboard
            </Link>
            <Link to="/tech/tickets" className="flex items-center gap-2">
              <Ticket /> My Tickets
            </Link>
            <Link to="/tech/performance" className="flex items-center gap-2">
              <MessageCircle /> Performance
            </Link>
          </>
        );
      case 'ops':
        return (
          <>
            <Link to="/ops/dashboard" className="flex items-center gap-2">
              <LayoutDashboard /> Dashboard
            </Link>
            <Link to="/ops/verify-tickets" className="flex items-center gap-2">
              <Ticket /> Ticket Approval
            </Link>
            <Link to="/ops/my-tickets" className="flex items-center gap-2">
            <Tickets /> My Tickets
            </Link>
            <Link to="/ops/performance" className="flex items-center gap-2">
              <MessageCircle /> Performance
            </Link>
          </>
        );
      default:
        return <p className="text-red-500">Invalid role</p>;
    }
  };

  return (
    <aside
      className={`w-[250px] h-full p-4 shadow-md 
        ${blurred ? 'bg-gray-100/50 backdrop-blur-sm' : 'bg-gray-100'}`}
    >
      <nav className="flex flex-col gap-6 text-lg">{renderLinks()}</nav>
    </aside>
  );
};

export default DashboardSidebar;
