import styled from 'styled-components';

import { useGithubContext } from '../context/context';
import { Bar3D, Column3D, Doughnut2D, Pie3D } from './Charts';

import languagesMostUsed from '../../utils/languagesMostUsed';
import mostPopularRepository from '../../utils/mostPopularRepository';
import starsPerLanguages from '../../utils/starsPerLanguages';
import mostForkedRepository from '../../utils/mostForkedRepository';

const Repos = () => {
  const { githubRepos } = useGithubContext();

  return (
    <section className="section">
      <Wrapper className="section-center">
        <Pie3D data={languagesMostUsed(githubRepos)} />
        <Column3D data={mostPopularRepository(githubRepos)} />
        <Doughnut2D data={starsPerLanguages(githubRepos)} />
        <Bar3D data={mostForkedRepository(githubRepos)} />
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
