import { string } from 'prop-types';
import { useState } from 'react/cjs/react.development';

const Tour = ({ name, info, image, price }) => {
  const [readMore, setReadMore] = useState(false);

  const handleClickReadMore = () => {
    setReadMore((prev) => !prev);
  };

  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <section className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">{price}</h4>
        </section>
        <p>
          {readMore ? info : `${info.slice(0, 200)}...`}{' '}
          <button type="button" onClick={handleClickReadMore}>
            {readMore ? 'Ler menos' : 'Ler mais'}
          </button>{' '}
        </p>
        <button type="button" className="delete-btn">
          Sem interesse
        </button>
      </footer>
    </article>
  );
};

Tour.propTypes = {
  name: string.isRequired,
  info: string.isRequired,
  image: string.isRequired,
  price: string.isRequired,
};

export default Tour;
