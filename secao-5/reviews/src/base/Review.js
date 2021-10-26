/* eslint-disable no-unused-vars */
import { useState } from 'react';

import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

import peoples from './data';

const Review = () => {
  const [index, setIndext] = useState(0);

  const { name, job, image, text } = peoples[index];

  const handleClickPreviousPerson = () => {
    if (index === 0) setIndext(peoples.length - 1);
    if (index > 0) setIndext((prev) => Number(prev) - 1);
  };

  const handleClickNextPerson = () => {
    if (index === peoples.length - 1) setIndext(0);
    if (index < peoples.length - 1) setIndext((prev) => Number(prev) + 1);
  };

  const randomNumber = () => Math.floor(Math.random() * peoples.length);

  const handleClickRandomPerson = () => {
    const number = randomNumber();

    if (number === index)
      setIndext(Number(number) + 1 === peoples.length ? 0 : Number(number) + 1);

    if (number !== index) setIndext(number);
  };

  return (
    <article className="review">
      <header className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </header>

      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>

      <footer className="button-container">
        <button
          type="button"
          className="prev-btn"
          onClick={handleClickPreviousPerson}
        >
          <FaChevronLeft />
        </button>

        <button
          type="button"
          className="next-btn"
          onClick={handleClickNextPerson}
        >
          <FaChevronRight />
        </button>
      </footer>

      <button
        type="button"
        className="random-btn"
        onClick={handleClickRandomPerson}
      >
        Me surpreenda
      </button>
    </article>
  );
};

export default Review;
