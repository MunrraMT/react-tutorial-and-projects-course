import { useFilterContext } from '../context/filter_context';
import GridView from './GridView';
// import ListView from './ListView';

const ProductList = () => {
  const { filteredProducts } = useFilterContext();

  console.log(filteredProducts);

  return <GridView products={filteredProducts}>List</GridView>;
};

export default ProductList;
