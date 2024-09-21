export const SignUpPage = () => {
    return (
      <div id="webcrumbs"> 
          <div className="w-[800px] shadow rounded-lg bg-neutral-50 min-h-[500px] p-6">
            <div className="mb-4 text-center">
              <h1 className="font-title text-3xl text-primary mb-2">회원가입 페이지</h1>
            </div>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="username">Username</label>
                <input id="username" className="w-full p-2 border rounded-md" type="text" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
                <input id="email" className="w-full p-2 border rounded-md" type="email" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="password">Password</label>
                <input id="password" className="w-full p-2 border rounded-md" type="password" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="passwordConfirm">Confirm Password</label>
                <input id="passwordConfirm" className="w-full p-2 border rounded-md" type="password" />
              </div>
              <button className="w-full py-2 bg-primary text-white rounded-md hover:bg-primary-dark mt-4">Sign Up</button>
              <div className="mt-4 text-center">
                <span className="text-sm">이미 아이디가 있나요?</span>
                <a href="/login" className="text-sm text-primary ml-2">로그인</a>
              </div>
                <div className="mt-8 flex justify-center items-center space-x-2">
                    <p className="text-orange-500 font-semibold">2024 goorm Deepdive 백엔드 1회차 Study Team 최적의 아이</p>
                    <span className="material-symbols-outlined">🎤</span>
                </div>
            </form>
          </div> 
      </div>
    )
  }

  export default SignUpPage;