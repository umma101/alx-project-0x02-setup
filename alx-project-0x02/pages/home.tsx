import React, { useState } from 'react';
import Card from '@/components/common/Card';
import Header from '@/components/layout/Header';
import PostModal from '@/components/common/PostModal';

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [cards, setCards] = useState([
    { title: "Card One", content: "This is the content of the first card." },
    { title: "Card Two", content: "This is the content of the second card." },
    { title: "Card Three", content: "Another piece of information goes here." },
    { title: "Card Four", content: "This is the content of the fourth card." }
  ]);

  const handleAddPost = (title: string, content: string) => {
    setCards([...cards, { title, content }]);
  };

  return (
    <div>
      <Header />
      <main style={{ padding: '2rem' }}>
        <h1>Home Page</h1>

        <button onClick={() => setShowModal(true)} style={{ marginBottom: '1rem' }}>
          Add New Post
        </button>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
          {cards.map((card, index) => (
            <Card key={index} title={card.title} content={card.content} />
          ))}
        </div>

        {showModal && (
          <PostModal
            onClose={() => setShowModal(false)}
            onSubmit={handleAddPost}
          />
        )}
      </main>
    </div>
  );
};

export default Home;
