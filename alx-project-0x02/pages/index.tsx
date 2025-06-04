import Head from 'next/head';
import Header from '../components/layout/Header';

const Home = () => {
  return (
    <>
      <Head>
        <title>Welcome to My Website</title>
        <meta name="description" content="A friendly welcome page built with Next.js" />
      </Head>

      <Header />

      <main style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh', flexDirection: 'column' }}>
        <h1 style={{ fontSize: '3rem', color: '#333' }}>Welcome to My Website!</h1>
        <p style={{ fontSize: '1.2rem', color: '#666' }}>
          This is a simple homepage built with Next.js.
        </p>
      </main>
    </>
  );
};

export default Home;
