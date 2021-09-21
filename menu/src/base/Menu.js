import { arrayOf, number, shape, string } from 'prop-types';

const Menu = ({ items }) => (
  <section className="section-center">
    {items.map(({ id, title, img, desc, price }) => (
      <article key={id} className="menu-item">
        <img src={img} alt={title} className="photo" />

        <section className="item-info">
          <header>
            <h4>{title}</h4>
            <h4 className="price">R$ {price}</h4>
          </header>

          <p>{desc}</p>
        </section>
      </article>
    ))}
  </section>
);

Menu.propTypes = {
  items: arrayOf(
    shape({
      id: number,
      title: string,
      category: string,
      price: number,
      img: string,
      desc: string,
    }),
  ).isRequired,
};

export default Menu;
