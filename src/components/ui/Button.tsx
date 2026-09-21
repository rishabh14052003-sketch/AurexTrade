import React from "react";
import Link from "next/link";

export interface ButtonProps {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  href?: string;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  children,
  onClick,
  href,
  className = "",
  disabled = false,
  type = "button",
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold uppercase tracking-[0.1em] transition-all duration-200 cursor-pointer rounded-[2px] border select-none text-center";

  const sizeStyles = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const variantStyles = {
    primary:
      "bg-[#CC0000] border-[#CC0000] text-white hover:bg-[#aa0000] hover:border-[#aa0000] active:scale-[0.98]",
    outline:
      "bg-transparent border-white text-white hover:bg-white hover:text-black active:scale-[0.98]",
    ghost:
      "bg-transparent border-transparent text-white hover:bg-white/10 hover:text-white active:scale-[0.98]",
  };

  const disabledStyles = disabled
    ? "opacity-50 cursor-not-allowed pointer-events-none"
    : "";

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${disabledStyles} ${className}`.trim();

  if (href && !disabled) {
    return (
      <Link href={href} className={combinedClasses} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={combinedClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
