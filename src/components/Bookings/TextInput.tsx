import React from "react";

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean;
}

const TextInput: React.FC<TextInputProps> = ({
  hasError = false,
  className = "",
  ...props
}) => {
  return (
    <input
      className={`
        w-full px-4 py-2.5 rounded-lg border text-sm text-[#06111f]
        bg-white placeholder-gray-400 outline-none transition-all duration-200
        focus:ring-2 focus:ring-[#06111f]/20 focus:border-[#06111f]
        ${hasError ? "border-red-400 focus:ring-red-200" : "border-gray-300"}
        ${className}
      `}
      {...props}
    />
  );
};

export default TextInput;
