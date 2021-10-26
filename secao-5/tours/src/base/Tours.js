import { arrayOf, func, shape, string } from 'prop-types';

import Tour from './Tour';

const Tours = ({ tours, removeTour }) => (
  <section>
    <header>
      <h2>Nossos Passeios</h2>
      <div className="underline" />
    </header>
    <section>
      {tours.map(({ id, name, info, image, price }) => (
        <Tour
          key={id}
          id={id}
          name={name}
          info={info}
          image={image}
          price={price}
          removeTour={removeTour}
        />
      ))}
    </section>
  </section>
);

Tours.propTypes = {
  tours: arrayOf(
    shape({
      id: string,
      name: string,
      info: string,
      image: string,
      price: string,
    }),
  ).isRequired,
  removeTour: func.isRequired,
};

export default Tours;
