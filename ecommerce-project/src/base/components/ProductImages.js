/* eslint-disable no-unused-vars */
import { arrayOf, number, shape, string } from 'prop-types';
import { useState } from 'react';
import styled from 'styled-components';
import Loading from './Loading';

const ProductImages = ({ images }) => {
  const [mainImage, setMainImage] = useState(images[0]);

  const onClickHandle = (index) => {
    setMainImage(images[index]);
  };

  return (
    <Wrapper>
      <img
        className="main"
        src={mainImage.thumbnails.large.url}
        alt="product"
      />

      <div className="gallery">
        {images.map(({ id, thumbnails: { small } }, index) => (
          <button
            className={mainImage.id === id ? 'active' : ''}
            key={id}
            type="button"
            onClick={() => onClickHandle(index)}
          >
            <img src={small.url} alt="product thumbnails" />
          </button>
        ))}
      </div>
    </Wrapper>
  );
};

ProductImages.propTypes = {
  images: arrayOf(
    shape({
      filename: string,
      id: string,
      url: string,
      height: number,
      width: number,
      thumbnails: shape({
        large: shape({ height: number, url: string, width: number }),
        small: shape({ height: number, url: string, width: number }),
      }),
    }),
  ).isRequired,
};

const Wrapper = styled.section`
  .main {
    height: 600px;
  }
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    object-fit: cover;
  }
  .gallery {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 1rem;
    button {
      border: none;
      border-radius: 4px;
    }
    img {
      height: 100px;
      cursor: pointer;
    }
  }
  .active {
    box-shadow: 0px 0px 0px 2px var(--clr-primary-5);
  }
  @media (max-width: 576px) {
    .main {
      height: 300px;
    }
    .gallery {
      img {
        height: 50px;
      }
    }
  }
  @media (min-width: 992px) {
    .main {
      height: 500px;
    }
    .gallery {
      img {
        height: 75px;
      }
    }
  }
`;

export default ProductImages;
