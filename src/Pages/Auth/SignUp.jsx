import React, { useState, useContext } from 'react';
import AuthLayout from '../../Components/Auth/AuthLayout';
import InputField from '../../Components/Auth/InputField';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserDataContext } from '../../Contexts/UserDataCoontext.jsx';

const SignUp = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '', role: 'user' });
  const [error, setError] = useState('');
  const { setUser } = useContext(UserDataContext);
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/user/register`,
        form,
        { withCredentials: true }
      );

      const userData = response.data?.data;
      console.log("userData", userData);
      
      setUser(userData);

      switch (userData.role) {
        case 'admin':
          navigate('/admin/dashboard');
          break;
        case 'operation':
          navigate('/ops/dashboard');
          break;
        case 'tech':
          navigate('/tech/dashboard');
          break;
        default:
          navigate('/user/dashboard');
      }
    } catch (err) {
      console.error('Registration failed:', err);
      setError(err.response?.data?.message || 'Something went wrong during registration.');
    }
  };

  return (
    <AuthLayout>
      <div className="w-full flex flex-col items-center px-4 sm:px-8 md:px-20">
        <h2 className="text-[20px] sm:text-[24px] md:text-[32px] font-[Roboto] font-bold italic text-black mb-6 text-center">
          Create an Account
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col items-center w-full">
          <InputField
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Name"
          />
          <InputField
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
          />
          <InputField
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Password"
          />
          <select
            name="role"
            value={form.role}
            onChange={handleChange}
            className="w-full max-w-[601px] h-[50px] sm:h-[60px] md:h-[73px] bg-white border border-black px-4 font-[Roboto] font-extrabold text-[16px] sm:text-[20px] md:text-[30px] tracking-[0px] text-black outline-none mb-6"
          >
            <option value="user">User</option>
            <option value="operation">Operation Team</option>
            <option value="tech">Technical Team</option>
            <option value="admin">Admin</option>
          </select>

          {error && <p className="text-red-500 mb-4">{error}</p>}

          <button
            type="submit"
            className="w-[200px] sm:w-[260px] md:w-[321px] h-[50px] sm:h-[60px] md:h-[71px] bg-[#03CC17] text-white text-[16px] sm:text-[18px] md:text-[20px] font-bold rounded-[20px] hover:bg-[#02b65f] transition"
          >
            Sign Up
          </button>

          <div className="text-sm mt-6 text-black flex justify-between w-full max-w-[321px]">
            <Link to="/reset-password" className="text-red-600 hover:underline">
              Forgot password
            </Link>
            <Link to="/" className="text-black font-bold text-[14px] sm:text-[16px] hover:underline">
              Sign In
            </Link>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
};

export default SignUp;
