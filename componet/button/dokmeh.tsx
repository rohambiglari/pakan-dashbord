import React from "react";
import "./dokmeh.css";

interface ButtonProps {
  title?: string;
  className?: string;
  children?: React.ReactNode;
  onclick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  title = "",
  className = "",
  children,
  onclick,
}) => {
  return (
    <button onClick={onclick} className={className}>
      {title}
      {children}
    </button>
  );
};

export default Button;
