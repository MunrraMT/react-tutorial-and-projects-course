/* eslint-disable react/no-array-index-key */
import { number } from 'prop-types';
import styled from 'styled-components';
import { BsStar, BsStarHalf, BsStarFill } from 'react-icons/bs';

const Stars = ({ stars, reviews }) => {
  const starsIcons = Array.from({ length: 5 }, (__, index) => {
    const starIndex = index + 1;

    if (starIndex - stars >= 1) {
      return (
        <span key={`star${index}`}>
          <BsStar />
        </span>
      );
    }

    if (starIndex - stars > 0) {
      return (
        <span key={`star${index}`}>
          <BsStarHalf />
        </span>
      );
    }

    return (
      <span key={`star${index}`}>
        <BsStarFill />
      </span>
    );
  });

  return (
    <Wrapper>
      <div className="stars">{starsIcons}</div>
      <p className="reviews">{reviews} customer reviews</p>
    </Wrapper>
  );
};

Stars.propTypes = {
  stars: number.isRequired,
  reviews: number.isRequired,
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  span {
    color: #ffb900;
    font-size: 1rem;
    margin-right: 0.25rem;
  }
  p {
    margin-left: 0.5rem;
    margin-bottom: 0;
  }
  margin-bottom: 0.5rem;
`;
export default Stars;
