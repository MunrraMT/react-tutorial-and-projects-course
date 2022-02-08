import styled from 'styled-components';

import { useGithubContext } from '../context/context';
import { ExampleChart } from './Charts/index';

const Repos = () => {
  const { githubRepos } = useGithubContext();

  console.log(githubRepos);

  return (
    <section className="section">
      <Wrapper className="section-center no_width_div">
        <ExampleChart />
      </Wrapper>
    </section>
  );
};

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 2rem;
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 2fr 3fr;
  }

  div:not(.recharts-tooltip-wrapper) {
    width: 100% !important;
  }

  .fusioncharts-container {
    width: 100% !important;
  }
  svg {
    width: 100% !important;
    border-radius: var(--radius) !important;
  }
`;

export default Repos;
