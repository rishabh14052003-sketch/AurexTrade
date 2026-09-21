import React from "react";

export interface BadgeProps {
  children: React.ReactNode;
  variant?: "red" | "outline" | "dark";
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "red",
  className = "",
}) => {
  const baseStyles =
    "inline-flex items-center uppercase tracking-[0.1em] text-[10px] font-bold px-[10px] py-[4px] rounded-[2px] border select-none";

  const variantStyles = {
    red: "bg-[#CC0000] border-[#CC0000] text-white",
    outline: "bg-transparent border-[#CC0000] text-[#CC0000]",
    dark: "bg-[#1a1a1a] border-[#222222] text-white",
  };

  return (
    <span className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;
