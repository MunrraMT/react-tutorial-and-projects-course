import { useFilterContext } from '../context/filter_context';
import GridView from './GridView';
// import ListView from './ListView';

const ProductList = () => {
  const { filteredProducts, allProducts } = useFilterContext();

  return (
    <GridView
      products={filteredProducts.legth > 0 ? filteredProducts : allProducts}
    >
      List
    </GridView>
  );
};

export default ProductList;
