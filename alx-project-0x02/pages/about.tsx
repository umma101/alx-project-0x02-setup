// pages/about.tsx
import React from 'react';
import Header from '../components/layout/header'; // ✅ Make sure this path is correct

const AboutPage = () => {
  return (
    <>
      <Header />
      <main style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>About Page</h1>
        <p>This is the About page of the website.</p>
      </main>
    </>
  );
};

export default AboutPage; // ✅ This must be a valid React component
