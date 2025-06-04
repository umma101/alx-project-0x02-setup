// pages/about.tsx
import React from 'react';
import Header from '../components/layout/Header';

const AboutPage = () => {
  return (
    <>
      <Header />
      <main style={{ padding: '2rem' }}>
        <h1>About Page</h1>
        <p>This is the About page of the website.</p>
      </main>
    </>
  );
};

export default AboutPage;
