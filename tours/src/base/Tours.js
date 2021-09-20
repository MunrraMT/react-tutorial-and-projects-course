import { arrayOf, shape, string } from 'prop-types';

import Tour from './Tour';

const Tours = ({ tours }) => (
  <section>
    <header>
      <h2>Nossos Passeios</h2>
      <div className="underline" />
    </header>
    <section>
      {tours.map(({ id, name, info, image, price }) => (
        <Tour key={id} name={name} info={info} image={image} price={price} />
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
};

export default Tours;
