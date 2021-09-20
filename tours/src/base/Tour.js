import { string } from 'prop-types';

const Tour = ({ name, info, image, price }) => (
  <article className="single-tour">
    <img src={image} alt={name} />
    <footer>
      <section className="tour-info">
        <h4>{name}</h4>
        <h4 className="tour-price">{price}</h4>
      </section>
      <p>{info}</p>
      <button type="button" className="delete-btn">
        Sem interesse
      </button>
    </footer>
  </article>
);

Tour.propTypes = {
  name: string.isRequired,
  info: string.isRequired,
  image: string.isRequired,
  price: string.isRequired,
};

export default Tour;
