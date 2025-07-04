import React from 'react';

const AuthLayout = ({ children }) => {
  return (
    // Outer container: full screen on mobile, but for desktop it caps at 1440x1024
    <div className="w-full h-screen bg-[#55D6C2] flex items-center justify-center px-4 sm:px-8 
                    md:mx-auto md:max-w-[1440px] md:max-h-[1024px]">
      {/* Inner container: remains responsive, with fixed height on medium+ screens */}
      <div className="w-full h-auto max-w-[1000px] sm:h-[700px] bg-[rgba(239,237,237,0.5)]
                      rounded-xl shadow-xl flex items-center justify-center p-4 sm:p-8">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
