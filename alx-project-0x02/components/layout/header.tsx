// components/layout/header.tsx
import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header style={{
      backgroundColor: '#black',
      padding: '1rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <h1 style={{ fontSize: '1.5rem', margin: 0 }}>My Website</h1>

      <nav>
        {/* ✅ CORRECT LINKS */}
        <Link href="/home" style={{ marginRight: '1rem' }}>Home</Link>
        <Link href="/about">About</Link>
      </nav>
    </header>
  );
};

export default Header;
