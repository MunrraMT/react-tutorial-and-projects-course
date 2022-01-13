import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--clr-primary-10);
  text-align: center;
  h1 {
    font-size: 10rem;
  }
  h3 {
    color: var(--clr-grey-3);
    margin-bottom: 1.5rem;
  }
  .btn {
    max-width: 10rem;
  }
`;

const Error = () => (
  <Wrapper>
    <h1>404</h1>
    <h3>sorry, the page you tried cannot be found</h3>
    <Link to="/" className="btn">
      back page
    </Link>
  </Wrapper>
);

export default Error;
