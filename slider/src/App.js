/* eslint-disable */
import { useEffect, useState } from 'react';

import { FaQuoteRight } from 'react-icons/fa';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import data from './base/data';

function App() {
  const [people, setPeople] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setPeople(data);
  }, []);

  const articleFormatted = (position, { id, image, name, title, quote }) => (
    <article className={position} key={id}>
      <img src={image} alt={name} className="person-img" />
      <h4>{name}</h4>
      <p className="title">{title}</p>
      <p className="text">{quote}</p>
      <FaQuoteRight className="icon" />
    </article>
  );

  return (
    <main>
      <section className="section">
        <header className="title">
          <h1>
            <span>/</span>Análises
          </h1>
        </header>

        <section className="section-center">
          {people.length > 0 &&
            people.map((person, personIndex) => {
              if (personIndex === index) {
                return articleFormatted('activeSlide', person);
              }

              if (
                personIndex === index - 1 ||
                (index === 0 && personIndex === people.length - 1)
              ) {
                return articleFormatted('lastSlide', person);
              }

              return articleFormatted('nextSlide', person);
            })}

          <button type="button" className="prev">
            <FiChevronLeft />
          </button>

          <button type="button" className="next">
            <FiChevronRight />
          </button>
        </section>
      </section>
    </main>
  );
}

export default App;
