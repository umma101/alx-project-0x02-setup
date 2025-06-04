import Link from 'next/link';

const Header = () => {
  return (
    <header style={{ backgroundColor: '#000', color: '#fff', padding: '1rem' }}>
      <nav>
        <Link href="/home" legacyBehavior>
          <a style={{ color: '#fff', marginRight: '1rem' }}>Home</a>
        </Link>
        <Link href="/about" legacyBehavior>
          <a style={{ color: '#fff', marginRight: '1rem' }}>About</a>
        </Link>
        <Link href="/posts" legacyBehavior>
          <a style={{ color: '#fff' }}>Posts</a>
        </Link>
      </nav>
    </header>
  );
};

export default Header;

