import { createContext, useContext } from 'react';

import { node } from 'prop-types';

// make sure to use https
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;
const AppContext = createContext();

const AppProvider = ({ children }) => (
  <AppContext.Provider value="hello">{children}</AppContext.Provider>
);

AppProvider.propTypes = {
  children: node.isRequired,
};

// make sure use
export const useGlobalContext = () => useContext(AppContext);

export { AppContext, AppProvider };
