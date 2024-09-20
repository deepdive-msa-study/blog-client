export const MyPlugin = () => {
    return (
      <div id="webcrumbs"> 
          <div className="w-[800px] mx-auto rounded-lg shadow-lg bg-neutral-50">
              <header className="relative p-6 text-center bg-primary text-white rounded-t-lg">
                  <h1 className="font-title text-3xl">마이페이지</h1>
                  <a href="/main" className="absolute top-3 right-6 text-primary text-lg rounded-md px-6 py-3 shadow-md bg-white hover:bg-neutral-100 transition">
                      메인 페이지로 가기
                  </a>
              </header>
              <main className="p-6 text-center">
                  <div className="grid grid-cols-1 gap-6">
                      <div className="bg-neutral-100 rounded-md p-6 shadow-md">
                          <h2 className="text-2xl font-semibold mb-4">프로필 정보</h2>
                          <div className="space-y-4">
                              <div className="bg-neutral-50 rounded-xs p-4 shadow-sm">
                                  <p>이름: 홍길동</p>
                              </div>
                              <div className="bg-neutral-50 rounded-xs p-4 shadow-sm">
                                  <p>이메일: hong@gildong.com</p>
                              </div>
                          </div>
                      </div>
                      <div className="text-center">
                          <a href="/profile/edit" className="inline-block bg-primary text-white text-lg rounded-md px-6 py-3 shadow-md hover:bg-opacity-90 transition">
                              개인정보 수정
                          </a>
                      </div>
                  </div>
              </main>
              <footer className="p-6 bg-neutral-100 rounded-b-lg">
                  <div className="mt-8 flex justify-center items-center space-x-2">
                      <p className="text-orange-500 font-semibold">
                          2024 goorm Deepdive 백엔드 1회차 Study Team 최적의 아이
                      </p>
                      <span className="material-symbols-outlined text-orange-500">mic</span>
                  </div>
              </footer>
          </div> 
      </div>
    )
  }