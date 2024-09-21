import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const MainPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/posts');
        const data = await response.json();

        if (!response.ok) throw new Error('게시글을 불러오는 중 오류가 발생했습니다.');
        
        setPosts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <p>로딩 중...</p>;
  if (error) return <p>에러 발생: {error}</p>;

  return (
    <div className="max-w-[1100px] p-6 bg-neutral-50 shadow-lg rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div key={post.id} className="bg-neutral-50 p-4 border-b border-gray-300 rounded-md">
            <h2 className="font-bold text-lg mb-2">{post.title}</h2>
            <p className="mb-4">{post.summary}</p>
            <Link to={`/posts/${post.id}`} className="text-primary font-semibold">더 읽기 →</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainPage;
