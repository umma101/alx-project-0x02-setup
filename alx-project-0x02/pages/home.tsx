import React from 'react';
import Card from '@/components/common/Card';
import Header from '@/components/layout/Header';

const Home = () => {
  return (
    <div>
      <Header />
      <main style={{ padding: '2rem' }}>
        <h1>Home Page</h1>

<div style={{ display: 'flex', gap: '1rem' }}>
          <Card title="Card One" content="This is the content of the first card." />
          <Card title="Card Two" content="This is the content of the second card." />
          <Card title="Card Three" content="Another piece of information goes here." />
          <Card title="Card Four" content="This is the content of the first card." />
          

        </div>
         <div style={{ display: 'flex', gap: '1rem' }}>
          <Card title="Card One" content="This is the content of the first card." />
          <Card title="Card Two" content="This is the content of the second card." />
          <Card title="Card Three" content="Another piece of information goes here." />
          <Card title="Card Four" content="This is the content of the first card." />
        </div>
      </main>
    </div>
  );
};

export default Home;
