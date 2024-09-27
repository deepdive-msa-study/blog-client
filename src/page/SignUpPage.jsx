import { useState, useCallback } from 'react';
import { useMutation } from 'react-query';
import axios from 'axios';

export const SignUpPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const mutation = useMutation(
    (newUser) => {
      return axios.post('https://api.example.com/signup', newUser);
    },
    {
      onSuccess: () => {
        alert('회원가입이 완료되었습니다!');
      },
      onError: (error) => {
        alert(`회원가입에 실패했습니다: ${error.response.data.message}`);
      },
    }
  );

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      if (formData.password !== formData.passwordConfirm) {
        alert('비밀번호가 일치하지 않습니다.');
        return;
      }

      mutation.mutate({
        username: formData.username,
        email: formData.email,
        password: formData.password,
      });
    },
    [formData, mutation]
  );

  return (
    <div id='webcrumbs'>
      <div className='w-[800px] shadow rounded-lg bg-neutral-50 min-h-[500px] p-6'>
        <div className='mb-4 text-center'>
          <h1 className='font-title text-3xl text-primary mb-2'>회원가입 페이지</h1>
        </div>
        <form className='space-y-4' onSubmit={handleSubmit}>
          <div>
            <label className='block text-sm font-medium mb-1' htmlFor='username'>
              Username
            </label>
            <input
              id='username'
              name='username'
              className='w-full p-2 border rounded-md'
              type='text'
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className='block text-sm font-medium mb-1' htmlFor='email'>
              Email
            </label>
            <input
              id='email'
              name='email'
              className='w-full p-2 border rounded-md'
              type='email'
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className='block text-sm font-medium mb-1' htmlFor='password'>
              Password
            </label>
            <input
              id='password'
              name='password'
              className='w-full p-2 border rounded-md'
              type='password'
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className='block text-sm font-medium mb-1' htmlFor='passwordConfirm'>
              Confirm Password
            </label>
            <input
              id='passwordConfirm'
              name='passwordConfirm'
              className='w-full p-2 border rounded-md'
              type='password'
              value={formData.passwordConfirm}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type='submit'
            className='w-full py-2 bg-primary text-white rounded-md hover:bg-primary-dark mt-4'
            disabled={mutation.isPending}
          >
            {mutation.isPending ? '가입 중...' : 'Sign Up'}
          </button>
          <div className='mt-4 text-center'>
            <span className='text-sm'>이미 아이디가 있나요?</span>
            <a href='/login' className='text-sm text-primary ml-2'>
              로그인
            </a>
          </div>
          <div className='mt-8 flex justify-center items-center space-x-2'>
            <p className='text-orange-500 font-semibold'>2024 goorm Deepdive 백엔드 1회차 Study Team 최적의 아이</p>
            <span className='material-symbols-outlined'>🎤</span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
