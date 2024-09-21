import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const PostListPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const postsPerPage = 10;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`/api/posts?page=${currentPage}&limit=${postsPerPage}`);
        const data = await response.json();

        if (!response.ok) {
          throw new Error('게시글을 불러오는 중 오류가 발생했습니다.');
        }

        setPosts(data.posts);
        setTotalPages(data.totalPages);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchPosts();
  }, [currentPage]);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  if (loading) return <p>로딩 중...</p>;
  if (error) return <p>에러 발생: {error}</p>;

  return (
    <div className="flex justify-center">
      <div className="max-w-[1100px] p-6 bg-neutral-50 shadow-lg rounded-lg w-full">
        <h1 className="text-3xl font-bold mb-6">게시글 목록</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div key={post.id} className="col-span-1 bg-neutral-50 p-4 border-b border-gray-300 rounded-md">
              <h2 className="font-bold text-lg mb-2">{post.title}</h2>
              <p className="mb-4">{post.summary}</p>
              <Link to={`/posts/${post.id}`} className="text-primary font-semibold">
                더 읽기 →
              </Link>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-6 space-x-4">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded ${currentPage === 1 ? 'bg-gray-400' : 'bg-primary text-white'}`}
          >
            이전
          </button>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded ${currentPage === totalPages ? 'bg-gray-400' : 'bg-primary text-white'}`}
          >
            다음
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostListPage;
