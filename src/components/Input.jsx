import React from "react";

const Input = ({ name, label, type, onChange }) => {
  return (
    <div className="w-full">
      <label className="font-medium text-lg">{label}</label>
      <input
        name={name}
        type={type}
        onChange={onChange}
        className="w-full px-7 py-3 bg-neutral-200 hover:bg-neutral-300 rounded-lg border-none outline-none"
      />
    </div>
  );
};

export default Input;
