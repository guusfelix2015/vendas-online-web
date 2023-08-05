import { useGlobalContext } from '../../../shared/hooks/useGlobalContext';

const Product = () => {
  const { user } = useGlobalContext();

  return <>{`Produtos ${user?.name}`}</>;
};

export default Product;
