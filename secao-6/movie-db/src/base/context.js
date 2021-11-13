import { createContext, useContext, useEffect, useState } from 'react';

import { node } from 'prop-types';

import useFetch from './useFetch';

// make sure to use https
const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('matrix');

  const { data, isLoading, error } = useFetch(`${API_ENDPOINT}&s=${query}`);

  useEffect(() => {
    if (data.Search) {
      setMovies(data.Search);
    }
  }, [data]);

  return (
    <AppContext.Provider
      value={{
        isLoading,
        error,
        movies,
        query,
        setQuery,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: node.isRequired,
};

// make sure use
const useGlobalContext = () => useContext(AppContext);

export { API_ENDPOINT, AppProvider, useGlobalContext };
