import { useState } from 'react';

export const LoginPage = () => {
  // 이메일과 비밀번호 상태 관리
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // 에러 메시지 상태 관리
  const [error, setError] = useState('');

  // 로그인 핸들러
  const handleLogin = async (e) => {
    e.preventDefault();  // 페이지 리로드 방지
    
    // 간단한 입력 검증
    if (!email || !password) {
      setError('이메일과 비밀번호를 입력하세요.');
      return;
    }

    // API 호출 (예시로 fetch를 사용)
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
        // 로그인 성공 로직 처리 (예: JWT 토큰 저장)
        console.log('로그인 성공:', result);
        setError('');  // 에러 메시지 초기화
        // TODO: 로그인 성공 시 페이지 이동
      } else {
        // 서버에서 받은 에러 처리
        setError(result.message || '로그인 실패');
      }
    } catch (error) {
      // 네트워크 에러 처리
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
              onChange={(e) => setEmail(e.target.value)}  // 이메일 상태 업데이트
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
              onChange={(e) => setPassword(e.target.value)}  // 비밀번호 상태 업데이트
              className="mt-1 block w-full px-3 py-2 bg-neutral-50 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2 text-sm">기억하기</span>
            </label>
            <a href="#" className="text-sm text-primary">
              비밀번호를 잊어버리셨나요?
            </a>
          </div>
          {/* 에러 메시지 출력 */}
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
            계정이 없으신가요? <a href="#" className="text-primary">회원가입</a>
          </p>
        </div>
      </div> 
    </div>
  );
};
