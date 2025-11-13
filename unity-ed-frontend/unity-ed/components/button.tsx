import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
}

export const Button: React.FC<ButtonProps> = ({
  variant = "default",
  className = "",
  children,
  ...props
}) => {
  let baseStyles =
    "px-4 py-2 rounded-xl text-sm font-medium flex items-center justify-center transition-all";

  let variantStyles =
    variant === "outline"
      ? "border border-gray-300 bg-white text-gray-700 hover:bg-gray-100"
      : "bg-blue-600 text-white hover:bg-blue-700";

  return (
    <button className={`${baseStyles} ${variantStyles} ${className}`} {...props}>
      {children}
    </button>
  );
};
