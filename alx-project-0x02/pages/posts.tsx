// pages/posts.tsx
import { GetStaticProps } from 'next';

import { PostProps } from '@/interfaces';
import PostCard from '@/components/common/PostCard';
import Header from '@/components/layout/Header';

const PostsPage = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data: PostProps[] = await res.json();
      setPosts(data.slice(0, 10)); // optional: only take first 10 posts
    };

    fetchPosts();
  }, []);

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

export default PostsPage;





