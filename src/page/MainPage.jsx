import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getMainPostList } from '../apis/api';

const MainPage = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ['mainPostData'],
    queryFn: getMainPostList(),
  });

  if (isPending) return <p>로딩 중...</p>;
  if (error) return <p>에러 발생: {error}</p>;

  return (
    <div className='max-w-[1100px] p-6 bg-neutral-50 shadow-lg rounded-lg'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {data.map((post) => (
          <div key={post.id} className='bg-neutral-50 p-4 border-b border-gray-300 rounded-md'>
            <h2 className='font-bold text-lg mb-2'>{post.title}</h2>
            <p className='mb-4'>{post.summary}</p>
            <Link to={`/posts/${post.id}`} className='text-primary font-semibold'>
              더 읽기 →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainPage;
