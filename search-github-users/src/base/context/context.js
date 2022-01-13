/* eslint-disable no-unused-vars */
import { createContext, useContext, useMemo, useState } from 'react';
import { node } from 'prop-types';
// import axios from 'axios';

import mockUser from './mockData.js/mockUser';
import mockRepos from './mockData.js/mockRepos';
import mockFollowers from './mockData.js/mockFollowers';

// const rootUrl = 'https://api.github.com';

const GithubContext = createContext();

const GithubProvider = ({ children }) => {
  const [githubUser, setGithubUser] = useState(mockUser);
  const [githubRepos, setGithubRepos] = useState(mockRepos);
  const [githubFollowers, setGithubFollowers] = useState(mockFollowers);

  const contextValue = useMemo(
    () => ({
      githubUser,
      githubRepos,
      githubFollowers,
    }),
    [githubUser, githubRepos, githubFollowers],
  );

  return (
    <GithubContext.Provider value={contextValue}>
      {children}
    </GithubContext.Provider>
  );
};

GithubProvider.propTypes = {
  children: node.isRequired,
};

const useGithubContext = () => useContext(GithubContext);

export { GithubProvider, useGithubContext };
