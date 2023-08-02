import './main.css';

import type { Router as RemixRouter } from '@remix-run/router';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router-dom';

import { loginRouter } from './modules/login/routes';

const mainRouter: RouteObject[] = [
  {
    path: '/',
    element: <div>Home</div>,
  },
];

const router: RemixRouter = createBrowserRouter([...mainRouter, ...loginRouter]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
