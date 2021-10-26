import { string } from 'prop-types';
import { Link } from 'react-router-dom';

const Cocktail = ({ id, name, image, info, glass }) => (
  <article className="cocktail">
    <header className="img-container">
      <img src={image} alt={name} />
    </header>

    <footer className="cocktail-footer">
      <h3>{name}</h3>
      <h4>{glass}</h4>
      <p>{info}</p>
      <Link to={`/cocktail/${id}`} className="btn btn-primary btn-details">
        details
      </Link>
    </footer>
  </article>
);

Cocktail.propTypes = {
  id: string.isRequired,
  name: string.isRequired,
  image: string.isRequired,
  info: string.isRequired,
  glass: string.isRequired,
};

export default Cocktail;
