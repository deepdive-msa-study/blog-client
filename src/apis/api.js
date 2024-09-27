import server from './server';

export const get = async (url) => {
  const res = await server.get(url);
  return res?.data?.data;
};

export const getMainPostList = () => {
  return get('/');
};

export const getUserInfo = () => {
  const token = localStorage.getItem('token');

  if (!token) {
    throw new Error('토큰이 존재하지 않습니다. 로그인 후 다시 시도하세요.');
  }

  const data = get('/api/user', {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
};

export const getPostList = (currentPage, postsPerPage) => {
  const data = get(`/api/posts?page=${currentPage}&limit=${postsPerPage}`);

  return data;
};

export const getPost = (id) => {
  return get(`/api/posts/${id}`).json();
};
