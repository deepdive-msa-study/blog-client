import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './router/Layout';
import LoginPage from './page/LoginPage';
import SignupPage from './page/SignUpPage';
import MainPage from './page/MainPage';
import MyPage from './page/MyPage';
import PostForm from './page/PostForm';
import ReadPost from './page/ReadPost';
import PostListPage from './page/PostListPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        
        <Route element={<Layout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/postForm" element={<PostForm />} />
          <Route path="/posts" element={<PostListPage />} />
          <Route path="/posts/:id" element={<ReadPost />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
