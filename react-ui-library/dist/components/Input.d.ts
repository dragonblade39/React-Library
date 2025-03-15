import React from "react";
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
declare const Input: React.FC<InputProps>;
export default Input;
