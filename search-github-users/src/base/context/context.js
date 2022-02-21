/* eslint-disable no-unused-vars */
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { node } from 'prop-types';
import axios from 'axios';

import mockUser from './mockData.js/mockUser';
import mockRepos from './mockData.js/mockRepos';
import mockFollowers from './mockData.js/mockFollowers';

const rootUrl = 'https://api.github.com';

const GithubContext = createContext();

const GithubProvider = ({ children }) => {
  const [githubUser, setGithubUser] = useState(mockUser);
  const [githubRepos, setGithubRepos] = useState(mockRepos);
  const [githubFollowers, setGithubFollowers] = useState(mockFollowers);

  const [numberLastRequest, setNumberLastRequest] = useState(60);
  const [numberLimitRequest, setNumberLimitRequest] = useState(60);
  const [requestError, setRequestError] = useState({
    show: false,
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const toggleError = (show, message) => setRequestError({ show, message });

  const checkRequest = () => {
    axios(`${rootUrl}/rate_limit`)
      .then(({ data }) => {
        setNumberLimitRequest(data.rate.limit);
        setNumberLastRequest(data.rate.remaining);
      })
      .catch((e) =>
        setRequestError(
          toggleError(
            true,
            'sorry, you have exceeded your houurly rate limit!',
          ),
        ),
      );
  };

  useEffect(checkRequest, []);

  const searchGithubUser = (user) => {
    const requestUser = axios.get(`${rootUrl}/users/${user}`);
    const requestRepos = axios.get(`${rootUrl}/users/${user}/repos`);
    const requestFollowers = axios.get(`${rootUrl}/users/${user}/followers`);

    axios
      .all([requestUser, requestRepos, requestFollowers])
      .then(
        axios.spread((...responses) => {
          setGithubUser(responses[0].data);
          setGithubRepos(responses[1].data);
          setGithubFollowers(responses[2].data);

          toggleError(false, '');
        }),
      )
      .catch(() => toggleError(true, 'there is no user with that username!'));
  };

  const contextValue = useMemo(
    () => ({
      githubUser,
      githubRepos,
      githubFollowers,
      numberLastRequest,
      numberLimitRequest,
      requestError,
      searchGithubUser,
    }),
    [
      githubUser,
      githubRepos,
      githubFollowers,
      numberLastRequest,
      numberLimitRequest,
      requestError,
    ],
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
