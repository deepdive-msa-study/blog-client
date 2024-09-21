import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const ReadPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`/api/posts/${id}`);
        const data = await response.json();

        if (!response.ok) throw new Error('게시글을 불러오는 중 오류가 발생했습니다.');
        
        setPost(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) return <p>로딩 중...</p>;
  if (error) return <p>에러 발생: {error}</p>;
  if (!post) return <p>게시글이 존재하지 않습니다.</p>;

  return (
    <div className="w-[800px] bg-neutral-50 shadow-lg rounded-lg p-8">
      <h1 className="text-2xl font-title mb-4">{post.title}</h1>
      <p>{post.content}</p>
      <p className="mt-4 text-gray-700">태그: {post.tags.join(', ')}</p>
      <button className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4" onClick={() => navigate('/')}>
        메인페이지로 돌아가기
      </button>
    </div>
  );
};

export default ReadPost;
