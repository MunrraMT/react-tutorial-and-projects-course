import { createContext, useContext } from 'react';
import { node } from 'prop-types';
// import axios from 'axios';

// import mockUser from './mockData.js/mockUser';
// import mockRepos from './mockData.js/mockRepos';
// import mockFollowers from './mockData.js/mockFollowers';

// const rootUrl = 'https://api.github.com';

const GithubContext = createContext();

const GithubProvider = ({ children }) => (
  <GithubContext.Provider value="hello">{children}</GithubContext.Provider>
);

GithubProvider.propTypes = {
  children: node.isRequired,
};

const useGithubContext = () => useContext(GithubContext);

export { GithubProvider, useGithubContext };
