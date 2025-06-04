import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  return (
    <header style={{
      backgroundColor: '#pink',
      padding: '1rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxShadow: '0 2px 4px rgba(243, 12, 12, 0.1)'
    }}>
      <h1 style={{ fontSize: '1.5rem', margin: 0 }}>My Website</h1>

      <nav style={{ position: 'relative' }}>
        <Link href="/" style={{ marginRight: '1rem' }}>Home</Link>
        <Link href="/about" style={{ marginRight: '1rem' }}>About</Link>

        {/* Dropdown Toggle */}
        <button
          onClick={toggleDropdown}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontSize: '1rem',
          }}
        >
          Menu ▾
        </button>

        {/* Dropdown Menu */}
        {dropdownOpen && (
          <div style={{
            position: 'absolute',
            top: '2.5rem',
            right: 0,
            backgroundColor: '#f3f3f3',
            boxShadow: '0 4px 8px rgba(239, 8, 8, 0.1)',
            borderRadius: '4px',
            padding: '0.5rem 1rem',
            zIndex: 1000
          }}>
            <p style={{ margin: '0.5rem 0' }}>
              <Link href="/services">Services</Link>
            </p>
            <p style={{ margin: '0.5rem 0' }}>
              <Link href="/contact">Contact</Link>
            </p>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
