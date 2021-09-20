import { arrayOf, number, shape, string } from 'prop-types';
import React from 'react';

const List = ({ people }) =>
  people.map(({ id, name, age, image }) => (
    <article key={id} className="person">
      <img src={image} alt={name} />
      <section>
        <h4>{name}</h4>
        <p>{age} anos</p>
      </section>
    </article>
  ));

List.propTypes = {
  people: arrayOf(
    shape({
      id: number,
      name: string,
      age: number,
      image: string,
    }),
  ).isRequired,
};

export default List;
