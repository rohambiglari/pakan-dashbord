import React from "react";
import "./input.css";

interface InputProps {
  title: string;
  name: string;
  type?: string;
  err?: string;
  value: string;
  change: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  classLabel?: string;
  classInput?: string;
  showErr?: string;
  onFocus?: () => void;
}
const Input: React.FC<InputProps> = ({
  title,
  name,
  type,
  err,
  value,
  change,
  placeholder,
  classLabel,
  classInput,
  showErr,
  onFocus,
}) => {
  return (
    <div className="style-input">
      <label className={classLabel} htmlFor="add">
        {title}
      </label>
      <input
        className={classInput}
        name={name}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={change}
      ></input>
    </div>
  );
};
export default Input;
