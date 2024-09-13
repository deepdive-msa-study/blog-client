export const MainPage = () => {
    return (
        <div>
            <div className="w-[1100px] p-6 bg-neutral-50 shadow-lg rounded-lg">
                <div className="flex justify-between items-center mb-8">
                    <div className="text-center">
                        <h1 className="font-title text-3xl font-bold mb-2">블로그</h1>
                        <p>이것은 블로그 템플릿입니다. 원하는 대로 조정해 보세요. 다른 테마, 추가 필드 또는 멋진 아이콘이 필요하신가요? <br />AI에게 도움을 요청하세요. 즐거운 코딩 되세요!</p>
                    </div>
                    <div className="space-x-4">
                        <a href="/mypage" className="bg-primary text-white px-6 py-2 rounded-md font-semibold">마이페이지 →</a>
                        <a href="/logout" className="bg-primary text-white px-6 py-2 rounded-md font-semibold">로그아웃</a>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-2 row-span-2 bg-neutral-50 rounded-lg overflow-hidden relative">
                        <img src="https://tools-api.webcrumbs.org/image-placeholder/600/400/Post%20Cover/1" alt="Blog image" className="w-full h-full object-cover" />
                        <div className="absolute top-0 left-0 right-0 bottom-0 p-6 flex flex-col justify-end text-white space-y-4">
                            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                            <h2 className="font-bold text-lg mb-2 relative z-10">CSS Grid 이해하기: 종합 가이드</h2>
                            <p className="mb-4 relative z-10">CSS Grid를 사용하여 복잡한 레이아웃을 쉽게 생성하는 방법을 배워보세요. 이 가이드는 시작하는 데 필요한 모든 기본 사항을 다룹니다.</p>
                            <a href="#" className="bg-primary text-white px-4 py-2 rounded-md relative z-10 self-start">더 읽기 →</a>
                        </div>
                    </div>
                    <div className="col-span-1 row-span-1 bg-neutral-50 p-4 border-b border-gray-300 rounded-md">
                        <h2 className="font-bold text-lg mb-2">React 시작하기: 초보자 가이드</h2>
                        <p className="mb-4">React는 사용자 인터페이스 구축을 위한 강력한 라이브러리입니다. 이 가이드는 기본 사항을 이해하고 빠르게 시작하는 데 도움이 됩니다.</p>
                        <a href="#" className="text-primary font-semibold">더 읽기 →</a>
                    </div>
                    <div className="col-span-1 row-span-1 bg-neutral-50 p-4 border-b border-gray-300 rounded-md">
                        <h2 className="font-bold text-lg mb-2">알아두어야 할 JavaScript ES6 기능</h2>
                        <p className="mb-4">ES6는 JavaScript에 많은 새로운 기능을 도입했습니다. 화살표 함수, 구조 분해, 템플릿 리터럴 등에 대해 알아보세요.</p>
                        <a href="#" className="text-primary font-semibold">더 읽기 →</a>
                    </div>
                    <div className="col-span-1 row-span-1 bg-neutral-50 p-4 rounded-md">
                        <h2 className="font-bold text-lg mb-2">TailwindCSS를 사용하여 반응형 웹 사이트 구축하기</h2>
                        <p className="mb-4">TailwindCSS는 유틸리티 우선 프레임워크로, 반응형 디자인을 쉽게 구축할 수 있게 도와줍니다. 그 힘을 활용하는 방법을 알아보세요.</p>
                        <a href="#" className="text-primary font-semibold">더 읽기 →</a>
                    </div>
                    <div className="col-span-1 row-span-1 bg-neutral-50 p-4 rounded-md">
                        <h2 className="font-bold text-lg mb-2">현대 웹 디자인을 위한 Flexbox 마스터하기</h2>
                        <p className="mb-4">Flexbox는 강력한 레이아웃 모듈입니다. 이를 사용하여 유연하고 적응형 웹 디자인을 만드는 방법을 배워보세요.</p>
                        <a href="#" className="text-primary font-semibold">더 읽기 →</a>
                    </div>
                    <div className="col-span-1 row-span-1 bg-neutral-50 p-4 rounded-md">
                        <h2 className="font-bold text-lg mb-2">JavaScript 프레임워크의 미래 탐험하기</h2>
                        <p className="mb-4">다가올 JavaScript 프레임워크와 업계 트렌드에 대해 배우며 앞서 나가세요.</p>
                        <a href="#" className="text-primary font-semibold">더 읽기 →</a>
                    </div>
                </div>
                <div className="mt-8 flex justify-center items-center space-x-2">
                    <p className="text-orange-500 font-semibold">2024 goorm Deepdive 백엔드 1회차 Study Team 최적의 아이</p>
                    <span className="material-symbols-outlined">🎤</span>
                </div>
            </div>
        </div>
    )
}
