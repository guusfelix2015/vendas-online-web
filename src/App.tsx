import type { Router as RemixRouter } from '@remix-run/router';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { firstScreenRouter } from './modules/home/routes';
import { loginRouter } from './modules/login/routes';
import { productScreenRouter } from './modules/product/routes';
import { useNotification } from './shared/hooks/useNotification';

const router: RemixRouter = createBrowserRouter([...firstScreenRouter, ...loginRouter, ...productScreenRouter]);

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
