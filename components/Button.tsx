import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
