import { arrayOf, number, shape, string } from 'prop-types';
import { FaEdit, FaTrash } from 'react-icons/fa';

const List = ({ items }) => (
  <section className="grocery-list">
    {items.map(({ id, title }) => (
      <article key={id} className="grocery-item">
        <p className="title">{title}</p>

        <section className="btn-container">
          <button type="button" className="edit-btn">
            <FaEdit />
          </button>
          <button type="button" className="delete-btn">
            <FaTrash />
          </button>
        </section>
      </article>
    ))}
  </section>
);

List.propTypes = {
  items: arrayOf(shape({ id: number, title: string })).isRequired,
};

export default List;
