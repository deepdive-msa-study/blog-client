import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import { MainPage } from "../page/MainPage.jsx";

const Router = () => (
    <RouterProvider
        router={createBrowserRouter([
            {
                element: <Layout />,
                children: [
                    { path: '/', element: <MainPage /> },
                ],
            },
        ])}
    />
);

export default Router;