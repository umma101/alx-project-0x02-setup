import Header from '../components/layout/Header';

export default function Home() {
    return (
        <>
      <Header />
      <main style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>Home Page</h1>
        <p>Welcome to the Home page of this Next.js app.</p>
      </main>
    </>
  );
}