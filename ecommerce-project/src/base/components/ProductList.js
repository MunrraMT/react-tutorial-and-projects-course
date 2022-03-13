import { useFilterContext } from '../context/filter_context';
import GridView from './GridView';
import ListView from './ListView';

const ProductList = () => {
  const { filteredProducts, allProducts, filters, gridView } =
    useFilterContext();

  if (filters.length === 0) {
    return gridView === false ? (
      <ListView products={allProducts} />
    ) : (
      <GridView products={allProducts} />
    );
  }

  if (filteredProducts.length === 0) {
    return (
      <h5 style={{ textTransform: 'none' }}>
        sorry, no products matched your search...
      </h5>
    );
  }

  return gridView === false ? (
    <ListView products={filteredProducts} />
  ) : (
    <GridView products={filteredProducts} />
  );
};

export default ProductList;
