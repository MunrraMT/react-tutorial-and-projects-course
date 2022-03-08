/* eslint-disable no-unused-vars */
import { useEffect } from 'react';
import styled from 'styled-components';
import { useParams, useNavigate } from 'react-router-dom';

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

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchSingleProduct(id);
  }, [id]);

  if (singleProductLoading) return <Loading />;

  if (singleProductError) {
    setTimeout(() => {
      navigate(-1);
    }, 3000);

    return <Error />;
  }

  return <Wrapper>teste</Wrapper>;
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
