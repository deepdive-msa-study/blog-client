import { Outlet, Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Layout = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <div className='min-h-screen flex flex-col'>
      <header className='text-white fixed bg-pink-300 top-0 left-0 w-full shadow-md z-10'>
        <nav className=' container mx-auto px-6 py-4 flex justify-between items-center'>
          <Link to='/' className='text-2xl font-semibold'>
            🎤
          </Link>
          <div className='space-x-4'>
            {isLoggedIn ? (
              <>
                <Link to='/mypage' className='font-semibold text-xl'>
                  마이페이지
                </Link>
                <button onClick={handleLogout} className='font-semibold text-xl'>
                  로그아웃
                </button>
              </>
            ) : (
              <Link to='/login' className='text-xl'>
                로그인
              </Link>
            )}
          </div>
        </nav>
      </header>
      <main className='flex-grow pt-20 px-8'>
        <Outlet />
      </main>
      <footer className='bg-pink-300 py-4 flex justify-center items-center space-x-2'>
        <div className='flex items-center space-x-2 cursor-pointer' onClick={() => navigate('/')}>
          <p className='text-white text-xl'>2024 구름 딥다이브 백엔드 1회차 Study Team 최적의 아이</p>
          <span className='material-symbols-outlined'>🎤</span>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
