import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getPost } from '../apis/api';

const ReadPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { isPending, error, data } = useQuery({
    queryKey: ['getPost'],
    queryFn: getPost(id),
  });

  if (isPending) return <p>로딩 중...</p>;
  if (error) return <p>에러 발생: {error}</p>;
  if (!data) return <p>게시글이 존재하지 않습니다.</p>;

  return (
    <div className='w-[800px] bg-neutral-50 shadow-lg rounded-lg p-8'>
      <h1 className='text-2xl font-title mb-4'>{data.title}</h1>
      <p>{data.content}</p>
      <p className='mt-4 text-gray-700'>태그: {data.tags.join(', ')}</p>
      <button className='bg-blue-500 text-white py-2 px-4 rounded-md mt-4' onClick={() => navigate('/')}>
        메인페이지로 돌아가기
      </button>
    </div>
  );
};

export default ReadPost;
