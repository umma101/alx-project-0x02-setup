// pages/posts.tsx
import { GetStaticProps } from 'next';
import { PostProps } from '@/interfaces';
import Header from '@/components/layout/Header';
import PostCard from '@/components/common/PostCard';

interface PostsPageProps {
  posts: PostProps[];
}

const PostsPage = ({ posts }: PostsPageProps) => {
  return (
    <>
      <Header />
      <main className="p-4">
        <h1 className="text-2xl font-bold mb-4">Posts</h1>
        {posts.map((post) => (
          <PostCard
            key={post.id}
            userId={post.userId}
            id={post.id}
            title={post.title}
            body={post.body}
          />
        ))}
      </main>
    </>
  );
};

// ✅ Add getStaticProps
export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts: PostProps[] = await res.json();

  return {
    props: {
      posts: posts.slice(0, 10), // optional: limit to 10 posts
    },
  };
};

export default PostsPage;
