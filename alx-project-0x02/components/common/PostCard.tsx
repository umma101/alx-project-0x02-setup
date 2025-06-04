// components/common/PostCard.tsx
import { PostProps } from '@/interfaces';

const PostCard = ({ title, body, userId }: PostProps) => {
  return (
    <div className="border rounded-lg shadow p-4 mb-4">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-gray-700">{body}</p>
      <p className="text-sm text-gray-500 mt-2">User ID: {userId}</p>
    </div>
  );
};

export default PostCard;
