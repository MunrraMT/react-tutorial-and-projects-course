import { func } from 'prop-types';

const Categories = ({ filterItems }) => (
  <section className="btn-container">
    <button
      type="button"
      className="filter-btn"
      onClick={() => filterItems('all')}
    >
      Todos
    </button>

    <button
      type="button"
      className="filter-btn"
      onClick={() => filterItems('breakfast')}
    >
      Café da manhã
    </button>
  </section>
);

Categories.propTypes = {
  filterItems: func.isRequired,
};

export default Categories;
