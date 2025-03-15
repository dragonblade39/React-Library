import React from "react";
import { FaUser, FaLock, FaEnvelope, FaCalendar, FaHashtag, FaComment } from "react-icons/fa";

interface InputProps {
  type: "text" | "password" | "email" | "number" | "date" | "checkbox" | "radio" | "textarea" | "select";
  label?: string;
  placeholder?: string;
  value?: string | number;
  options?: string[];
  checked?: boolean;
  size?: "small" | "medium" | "large";
  width?: string;
  height?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
}

const sizeStyles = {
  small: { width: "150px", height: "30px", padding: "5px 30px" },
  medium: { width: "250px", height: "40px", padding: "8px 35px" },
  large: { width: "350px", height: "50px", padding: "10px 40px" },
};

const getIcon = (type: string) => {
  const iconStyle: React.CSSProperties = {
    position: "absolute",
    left: "12px",
    color: "#ccc",
    fontSize: "18px",
  };

  switch (type) {
    case "text":
      return <FaUser style={iconStyle} />;
    case "password":
      return <FaLock style={iconStyle} />;
    case "email":
      return <FaEnvelope style={iconStyle} />;
    case "number":
      return <FaHashtag style={iconStyle} />;
    case "date":
      return <FaCalendar style={iconStyle} />;
    case "textarea":
      return <FaComment style={iconStyle} />;
    default:
      return null;
  }
};


const Input: React.FC<InputProps> = ({ type, label, placeholder, value, options, checked, size = "medium", width, height, onChange }) => {
  const defaultSize = sizeStyles[size];

  const inputStyles = {
    fontSize: "16px",
    border: "1.5px solid #ccc",
    borderRadius: "8px",
    outline: "none",
    background: "white",
    width: width || defaultSize.width,
    height: height || defaultSize.height,
    padding: defaultSize.padding,
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", marginBottom: "15px", position: "relative", maxWidth: "100%" }}>
      {label && <label style={{ fontSize: "14px", fontWeight: 600, marginBottom: "5px", color: "#333" }}>{label}</label>}
      <div style={{ display: "flex", alignItems: "center", position: "relative", width: "100%" }}>
        {getIcon(type)}
        {type === "textarea" ? (
          <textarea style={inputStyles} placeholder={placeholder} value={value as string} onChange={onChange} />
        ) : type === "select" && options ? (
          <select style={inputStyles} value={value as string} onChange={onChange}>
            {options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        ) : (
          <input style={inputStyles} type={type} placeholder={placeholder} value={value} checked={checked} onChange={onChange} />
        )}
      </div>
    </div>
  );
};

export default Input;
