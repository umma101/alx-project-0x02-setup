import Link from 'next/link';

const Header = () => {
  return (
    <header style={{ backgroundColor: '#000', color: '#fff', padding: '1rem' }}>
      
      <nav>
        <Link href="/home" style={{ color: '#fff', marginRight: '1rem' }}>Home</Link>
        <Link href="/about" style={{ color: '#fff' }}>About</Link>
      </nav>
    </header>
  );
};

export default Header;
