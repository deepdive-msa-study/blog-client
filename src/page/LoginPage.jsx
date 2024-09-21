import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    
    if (!email || !password) {
      setError('이메일과 비밀번호를 입력하세요.');
      return;
    }

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();

      if (response.ok) {
        console.log('로그인 성공:', result);
        setError('');

        navigate('/');
      } else {
        setError(result.message || '로그인 실패');
      }
    } catch (error) {
      console.error('로그인 에러:', error);
      setError('서버와의 통신에 실패했습니다.');
    }
  };

  return (
    <div id="webcrumbs">
      <div className="w-[800px] rounded-lg shadow-md bg-neutral-50 min-h-[600px] p-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-title">로그인 페이지</h1>
        </div>
        <form className="space-y-6" onSubmit={handleLogin}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              이메일
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
              className="mt-1 block w-full px-3 py-2 bg-neutral-50 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium">
              비밀번호
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-neutral-50 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2 text-sm">기억하기</span>
            </label>
          </div>
          {error && <p className="text-red-500">{error}</p>}

          <button type="submit" className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-700">
            로그인
          </button>
        </form>
        <div className="text-center mt-8">
          <h2 className="text-2xl font-title text-primary">
            2024 goorm Deepdive 백엔드 1회차 Study Team 최적의 아이
          </h2>
          <p className="mt-4 text-sm">
            계정이 없으신가요? <a href="/signup" className="text-primary">회원가입</a>
          </p>
        </div>
      </div> 
    </div>
  );
};

export default LoginPage;