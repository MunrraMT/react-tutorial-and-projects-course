import { useState } from 'react';

import { func, string } from 'prop-types';

const Tour = ({ id, name, info, image, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);

  const handleClickReadMore = () => {
    setReadMore((prev) => !prev);
  };

  const handleClickRemoveTour = () => {
    console.log(id);
    removeTour(id);
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
            {readMore ? 'Mostrar menos' : 'Ler mais'}
          </button>{' '}
        </p>
        <button
          type="button"
          className="delete-btn"
          onClick={handleClickRemoveTour}
        >
          Sem interesse
        </button>
      </footer>
    </article>
  );
};

Tour.propTypes = {
  id: string.isRequired,
  name: string.isRequired,
  info: string.isRequired,
  image: string.isRequired,
  price: string.isRequired,
  removeTour: func.isRequired,
};

export default Tour;
