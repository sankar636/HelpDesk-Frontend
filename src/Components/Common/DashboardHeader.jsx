// components/Layout/DashboardHeader.jsx
import React, { useContext } from 'react';
import { Bell, User, LogOut } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserDataContext } from '../../Contexts/UserDataCoontext.jsx';

const DashboardHeader = ({ blurred }) => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserDataContext);

  const handleLogout = async () => {
    try {
      await axios.post(`${import.meta.env.VITE_BASE_URL}/user/logout`, {}, {
        withCredentials: true
      });
      localStorage.removeItem('token');
      setUser(null); 
      navigate('/'); 
    } catch (err) {
      console.error("Logout failed", err);
    }
  };

  return (
    <header
      className={`w-full h-[90px] flex items-center justify-between px-6 shadow-md 
        ${blurred ? 'bg-[#55D6C2]/50 backdrop-blur-sm' : 'bg-[#55D6C2]'}`}
    >
      <h1 className="text-2xl font-bold text-white">Helpdesk</h1>
      <div className="flex items-center gap-6">
        <Bell className="text-black cursor-pointer" />
        <Link to="/user/profile" className="flex items-center gap-2">
          <User className="text-black cursor-pointer" />
        </Link>
        <LogOut
          className="text-black cursor-pointer"
          onClick={handleLogout}
          title="Logout"
        />
      </div>
    </header>
  );
};

export default DashboardHeader;
