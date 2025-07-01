import React, { ButtonHTMLAttributes } from 'react';

interface HydrationSafeButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const HydrationSafeButton: React.FC<HydrationSafeButtonProps> = ({ 
  children, 
  className, 
  ...props 
}) => {
  return (
    <button 
      suppressHydrationWarning={true}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

export default HydrationSafeButton;