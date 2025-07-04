import React from 'react';

const InputField = ({ placeholder, type, value, onChange, name }) => {
  return (
    <input
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full max-w-[601px] h-[50px] sm:h-[60px] md:h-[73px] bg-white border border-black px-4 font-[Roboto] font-extrabold text-[16px] sm:text-[20px] md:text-[30px] tracking-[0px] text-black outline-none mb-6"
      required
    />
  );
};

export default InputField;
