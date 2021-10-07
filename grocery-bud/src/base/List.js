import { arrayOf, func, shape, string } from 'prop-types';
import { FaEdit, FaTrash } from 'react-icons/fa';

const List = ({ items, removeItem }) => (
  <section className="grocery-list">
    {items.map(({ id, title }) => (
      <article key={id} className="grocery-item">
        <p className="title">{title}</p>

        <section className="btn-container">
          <button type="button" className="edit-btn">
            <FaEdit />
          </button>
          <button
            type="button"
            className="delete-btn"
            onClick={() => {
              removeItem(id);
            }}
          >
            <FaTrash />
          </button>
        </section>
      </article>
    ))}
  </section>
);

List.propTypes = {
  items: arrayOf(shape({ id: string, title: string })).isRequired,
  removeItem: func.isRequired,
};

export default List;
