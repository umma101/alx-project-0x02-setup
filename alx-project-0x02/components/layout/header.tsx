// components/layout/Header.tsx
import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header style={{
      backgroundColor: '#000',
      padding: '1rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <h2>My Website</h2>
      <nav>
        <Link href="/home" style={{ marginRight: '1rem' }}>Home</Link>
        <Link href="/about">About</Link>
      </nav>
    </header>
  );
};

export default Header;
