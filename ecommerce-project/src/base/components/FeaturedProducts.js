import styled from 'styled-components';
// import { Link } from 'react-router-dom'

// import { useProductsContext } from '../context/products_context'
// import Error from './Error'
// import Loading from './Loading'
// import Product from './Product'

const FeaturedProducts = () => <Wrapper>featured products</Wrapper>;

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
