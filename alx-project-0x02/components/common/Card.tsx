import React from 'react';
import { type CardProps } from '@/interfaces';



const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div style={{
      border: '1px solid #000',
      borderRadius: '8px',
      padding: '1rem',
      marginBottom: '1rem',
      backgroundColor: '#f9f9f9',
      boxShadow: '0 2px 4px rgba(210, 23, 23, 0.1)',
    }}>
      <h2 style={{ fontSize: '1.5rem', marginBottom: '8px' }}>{title}</h2>
      <p style={{ fontSize: '1rem', color: '#000' }}>{content}</p>
    </div>
  );
};

export default Card;
