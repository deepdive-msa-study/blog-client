export const MyPlugin = () => {
    return (
      <div id="webcrumbs"> 
          <div className="w-[800px] bg-neutral-50 shadow-lg rounded-lg p-8">
            <form className="space-y-4">
              <div>
                <label htmlFor="title" className="block text-sm font-medium">
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  className="mt-1 block w-full p-2 bg-white border border-neutral-300 rounded-md"
                />
              </div>
              <div>
                <label htmlFor="content" className="block text-sm font-medium">
                  Content
                </label>
                <textarea
                  id="content"
                  className="mt-1 block w-full p-2 bg-white border border-neutral-300 rounded-md h-[200px]"
                ></textarea>
              </div>
              <div>
                <label htmlFor="tags" className="block text-sm font-medium">
                  Tags
                </label>
                <input
                  type="text"
                  id="tags"
                  className="mt-1 block w-full p-2 bg-white border border-neutral-300 rounded-md"
                />
              </div>
              <button
                type="submit"
                className="mt-4 w-full bg-primary text-white py-2 rounded-md"
              >
                Submit
              </button>
            </form>
            <div className="mt-8 flex justify-center items-center space-x-2">
              <p className="text-orange-500 font-semibold">
                2024 goorm Deepdive 백엔드 1회차 Study Team 최적의 아이
              </p>
              <span className="material-symbols-outlined">🎤</span>
            </div>
          </div> 
      </div>
    )
  }
  