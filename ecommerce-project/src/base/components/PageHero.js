import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { string } from 'prop-types';

const PageHero = ({ title, url }) => (
  <Wrapper>
    <section className="section-center">
      <h3>
        <Link to={url}>home / </Link> {title}
      </h3>
    </section>
  </Wrapper>
);

PageHero.propTypes = {
  title: string.isRequired,
  url: string.isRequired,
};

const Wrapper = styled.section`
  background: var(--clr-primary-10);
  width: 100%;
  min-height: 20vh;
  display: flex;
  align-items: center;

  color: var(--clr-primary-1);
  a {
    color: var(--clr-primary-3);
    padding: 0.5rem;
    transition: var(--transition);
  }
  a:hover {
    color: var(--clr-primary-1);
  }
`;

export default PageHero;
