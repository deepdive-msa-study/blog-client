import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import { MainPage } from "../page/MainPage.jsx";
import { LoginPage } from "../page/LoginPage.jsx";
import { MyPage } from '../page/MyPage.jsx';
import { PostForm } from '../page/PostForm.jsx';
import { SignUpPage } from '../page/SignUpPage.jsx';
import { ReadPost } from '../page/ReadPost.jsx';

const Router = () => (
    <RouterProvider
        router={createBrowserRouter([
            {
                element: <Layout />,
                children: [
                    { path: '/', element: <MainPage /> },
                    { path: '/login', element: <LoginPage />},
                    { path: '/myPage', element: <MyPage />},
                    { path: '/postForm', element: <PostForm />},
                    { path: '/signup', element: <SignUpPage />},
                    { path: '/list', element: <ReadPost />}
                ],
            },
        ])}
    />
);

export default Router;