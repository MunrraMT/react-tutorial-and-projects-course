import { arrayOf, number, shape, string } from 'prop-types';
import styled from 'styled-components';

import Product from './Product';

const GridView = ({ products }) => (
  <Wrapper>
    <div className="products-container">
      {products.map(({ id, image, name, price }) => (
        <Product key={id} id={id} image={image} name={name} price={price} />
      ))}
    </div>
  </Wrapper>
);

GridView.propTypes = {
  products: arrayOf(
    shape({
      id: string,
      image: string,
      name: string,
      price: number,
    }),
  ).isRequired,
};

const Wrapper = styled.section`
  img {
    height: 175px;
  }

  .products-container {
    display: grid;
    gap: 2rem 1.5rem;
  }

  @media (min-width: 992px) {
    .products-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (min-width: 1170px) {
    .products-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;

export default GridView;
