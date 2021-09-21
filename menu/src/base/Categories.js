import { func } from 'prop-types';

const Categories = ({ filterItems }) => (
  <section className="btn-container">
    <button type="button" onClick={() => filterItems('breakfast')}>
      Breakfast
    </button>
  </section>
);

Categories.propTypes = {
  filterItems: func.isRequired,
};

export default Categories;
