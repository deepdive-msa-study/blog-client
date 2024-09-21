import { useState } from 'react';

export const PostForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const postData = {
      title,
      content,
      tags: tags.split(',').map((tag) => tag.trim()),
    };

    try {
      const response = await fetch('/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });

      if (!response.ok) {
        throw new Error('게시글 작성 중 오류가 발생했습니다.');
      }

      setSuccess(true);
      setTitle('');
      setContent('');
      setTags('');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div id="webcrumbs">
      <div className="w-[800px] bg-neutral-50 shadow-lg rounded-lg p-8">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium">
              Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 block w-full p-2 bg-white border border-neutral-300 rounded-md"
            />
          </div>
          <div>
            <label htmlFor="content" className="block text-sm font-medium">
              Content
            </label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="mt-1 block w-full p-2 bg-white border border-neutral-300 rounded-md h-[200px]"
            ></textarea>
          </div>
          <div>
            <label htmlFor="tags" className="block text-sm font-medium">
              Tags (comma-separated)
            </label>
            <input
              type="text"
              id="tags"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
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

        {/* 성공 메시지 */}
        {success && (
          <div className="mt-4 text-green-500 font-semibold">
            게시글이 성공적으로 작성되었습니다!
          </div>
        )}

        {/* 오류 메시지 */}
        {error && (
          <div className="mt-4 text-red-500 font-semibold">
            에러 발생: {error}
          </div>
        )}
      </div>
    </div>
  );
};

export default PostForm;
