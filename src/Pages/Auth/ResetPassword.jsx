import React, { useState } from 'react';
import AuthLayout from '../../Components/Auth/AuthLayout.jsx';
import InputField from '../../Components/Auth/InputField.jsx';
import { Link } from 'react-router-dom';

const ResetPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // reset logic
  };

  return (
    <AuthLayout>
      <div className="w-full flex flex-col items-center px-4 sm:px-8 md:px-20">
        {/* Instruction text */}
        <p className="text-center text-black text-[16px] sm:text-[18px] md:text-[20px] font-[Roboto] mb-8">
          Don’t worry, Enter your email below and we will <br className="hidden sm:block" />
          send you a link to change password.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col items-center w-full">
          <InputField
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-[200px] sm:w-[260px] md:w-[321px] h-[50px] sm:h-[60px] md:h-[71px] bg-[#03CC17] text-white text-[16px] sm:text-[18px] md:text-[20px] font-bold rounded-[20px] mt-4 hover:bg-[#02b65f] transition"
          >
            Submit
          </button>

          {/* Sign In Button */}
          <Link
            to="/"
            className="w-[200px] sm:w-[260px] md:w-[321px] h-[50px] sm:h-[60px] md:h-[71px] bg-[#005DFF] text-white text-[16px] sm:text-[18px] md:text-[20px] font-bold rounded-[20px] mt-4 flex items-center justify-center hover:bg-[#0046c4] transition"
          >
            Sign In
          </Link>
        </form>
      </div>
    </AuthLayout>
  );
};

export default ResetPassword;
