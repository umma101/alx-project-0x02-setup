import React from 'react';
import Header from '@/components/layout/Header';
import Button from '@/components/common/Button';

const About = () => {
  return (
    <div>
      <Header />
      <main style={{ padding: '2rem' }}>
        <h1>About Page</h1>
        <div>
          <Button label="Small Button" size="small" shape="rounded-sm" />
          <Button label="Medium Button" size="medium" shape="rounded-md" />
          <Button label="Large Button" size="large" shape="rounded-full" />
        </div>
      </main>
    </div>
  );
};

export default About;
