import { RouteObject } from 'react-router-dom';

import Product from '.';

export enum ProductRoutesEnum {
  PRODUCT = '/product',
}

export const productScreenRouter: RouteObject[] = [
  {
    path: ProductRoutesEnum.PRODUCT,
    element: <Product />,
    errorElement: <div>404</div>,
  },
];
