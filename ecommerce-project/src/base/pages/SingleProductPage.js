/* eslint-disable no-unused-vars */
import { useEffect } from 'react';
import styled from 'styled-components';
import { useParams, useNavigate, Link } from 'react-router-dom';

import { useProductsContext } from '../context/products_context';
import { formatPrice } from '../utils/helpers';
import {
  Loading,
  Error,
  ProductImages,
  AddToCart,
  Stars,
  PageHero,
} from '../components';

const SingleProductPage = () => {
  const {
    fetchSingleProduct,
    singleProductLoading,
    singleProductError,
    singleProduct,
  } = useProductsContext();

  const { id: paramsID } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchSingleProduct(paramsID);
  }, [paramsID]);

  if (singleProductLoading) return <Loading />;

  if (singleProductError) {
    setTimeout(() => {
      navigate(-1);
    }, 3000);

    return <Error />;
  }

  const {
    category,
    company,
    description,
    id: SKU,
    name,
    price,
    reviews,
    stars,
    stock,
  } = singleProduct;

  return (
    <Wrapper>
      <PageHero title={name || 'Loading...'} url={`/product/${SKU}` || '/'} />
      <div className="section section-center page">
        <Link to="/products" className="btn">
          back to products
        </Link>
        <div className="products-center">
          <ProductImages />
          <section className="content">
            <h2>{name || 'Loading...'}</h2>
            <Stars />
            <h5 className="price">{formatPrice(price)}</h5>
            <p className="desc">{description}</p>
            <p className="info">
              <span>Available : </span>
              {stock > 0 ? 'In stock' : 'Out of stock'}
            </p>
            <p className="info">
              <span>SKU: </span>
              {SKU}
            </p>
            <p className="info">
              <span>Brand: </span>
              {company}
            </p>
            <hr />
            {stock > 0 && <AddToCart />}
          </section>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`;

export default SingleProductPage;
