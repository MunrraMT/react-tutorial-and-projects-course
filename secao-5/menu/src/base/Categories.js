import { arrayOf, func, string } from 'prop-types';

const Categories = ({ categories, filterItems }) => (
  <section className="btn-container">
    {categories.map((category) => (
      <button
        key={category}
        type="button"
        className="filter-btn"
        onClick={() => filterItems(category)}
      >
        {category === 'all' && 'Todos'}
        {category === 'breakfast' && 'Café da manhã'}
        {category === 'lunch' && 'Almoço'}
        {category === 'shakes' && 'Milk Shakes'}
      </button>
    ))}
  </section>
);

Categories.propTypes = {
  categories: arrayOf(string).isRequired,
  filterItems: func.isRequired,
};

export default Categories;
