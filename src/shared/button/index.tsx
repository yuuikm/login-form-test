import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "active" | "inactive";
  fullWidth?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "inactive",
  fullWidth = false,
  className = "",
  disabled = false,
  ...rest
}) => {
  const baseClasses =
    "font-semibold py-3 px-6 rounded-lg transition-all duration-200 uppercase tracking-wider";

  const variantClasses = {
    active:
      "bg-primary hover:bg-cyan-600 text-white shadow-md hover:shadow-lg",
    inactive: "bg-cyan-100 text-cyan-600 dark:bg-gray-800 dark:text-gray-400 cursor-not-allowed opacity-75",
  };

  const widthClass = fullWidth ? "w-full" : "";
  const disabledClass = disabled ? "opacity-50 cursor-not-allowed" : "";

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${widthClass} ${disabledClass} ${className}`.trim()}
      disabled={disabled || variant === "inactive"}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
