import type { Router as RemixRouter } from '@remix-run/router';
import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router-dom';

import { loginRouter } from './modules/login/routes';
import { useNotification } from './shared/hooks/useNotification';

const mainRouter: RouteObject[] = [
  {
    path: '/',
    element: <div>Home</div>,
  },
];

const router: RemixRouter = createBrowserRouter([...mainRouter, ...loginRouter]);

function App() {
  const { contextHolder } = useNotification();
  return (
    <>
      {contextHolder}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
