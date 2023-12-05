import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Videos from './pages/Videos.tsx';
import ErrorPage from './pages/error-page.tsx';
import VideoDetail from './pages/VideoDetail.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Videos />,
      },
      {
        path: 'videos',
        element: <Videos />,
      },
      {
        path: 'videos/:keyword',
        element: <Videos />,
      },
      {
        path: 'videos/watch/:id',
        element: <VideoDetail />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
