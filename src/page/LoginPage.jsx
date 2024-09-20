export const MyPlugin = () => {
    return (
      <div id="webcrumbs"> 
          <div className="w-[800px] rounded-lg shadow-md bg-neutral-50 min-h-[600px] p-8">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-title">로그인 페이지</h1>
            </div>
            <form className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium">
                  이메일
                </label>
                <input
                  type="email"
                  id="email"
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
              <button type="submit" className="w-full py-2 px-4 bg-primary text-white rounded-md">
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
    )
  }
  