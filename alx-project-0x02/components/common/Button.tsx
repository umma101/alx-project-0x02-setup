import React from 'react';
import { ButtonProps } from '@/interfaces';

const Button: React.FC<ButtonProps> = ({ label, size = 'medium', shape = 'rounded-md', onClick }) => {
  const sizeStyles = {
    small: '0.5rem 1rem',
    medium: '0.75rem 1.5rem',
    large: '1rem 2rem',
  };

  const shapeStyles = {
    'rounded-sm': '4px',
    'rounded-md': '8px',
    'rounded-full': '9999px',
  };

  return (
    <button
      onClick={onClick}
      style={{
        padding: sizeStyles[size],
        borderRadius: shapeStyles[shape],
        backgroundColor: '#0070f3',
        color: '#fff',
        border: 'none',
        cursor: 'pointer',
        marginRight: '1rem',
      }}
    >
      {label}
    </button>
  );
};

export default Button;
