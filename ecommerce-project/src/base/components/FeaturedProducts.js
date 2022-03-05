/* eslint-disable no-unused-vars */
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { useProductsContext } from '../context/products_context';
import Error from './Error';
import Loading from './Loading';
import Product from './Product';

const FeaturedProducts = () => {
  const { productsLoading, productsError, featureProducts } =
    useProductsContext();

  if (productsLoading) return <Loading />;
  if (productsError) return <Error />;

  return (
    <Wrapper className="section">
      <div className="title">
        <h2>featured products</h2>
        <div className="underline" />
        <div className="section-center featured">
          {featureProducts.map(({ id, image, name, price }) => (
            <Product key={id} id={id} image={image} name={name} price={price} />
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--clr-grey-10);
  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    img {
      height: 225px;
    }
  }
  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`;

export default FeaturedProducts;
