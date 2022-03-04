import styled from 'styled-components';

import { PageHero } from '../components';
import aboutImg from '../assets/hero-bcg.jpeg';

const AboutPage = () => (
  <main>
    <PageHero title="about" url="/" />
    <Wrapper className="page section section-center">
      <img src={aboutImg} alt="nice desk" />
      <article>
        <section className="title">
          <h2>our story</h2>
          <section className="underline" />
        </section>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat odit
          quisquam commodi praesentium a tenetur maxime rem harum. Non molestiae
          quam esse odit, sit labore id veniam autem eveniet aliquam.
        </p>
      </article>
    </Wrapper>
  </main>
);

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
