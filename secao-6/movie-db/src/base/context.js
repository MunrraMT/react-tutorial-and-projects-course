import { createContext, useContext, useEffect, useState } from 'react';

import { node } from 'prop-types';

// make sure to use https
const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState({ show: false, msg: '' });
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState({
    search: 'all',
    title: 'matrix',
    year: '',
    plot: '',
    page: 1,
  });

  const fetchMovies = async (url) => {
    setIsLoading(true);

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.Response && data.Search) {
        setMovies(data.Search);
        setError({ show: false, msg: '' });
        setIsLoading(false);
      } else {
        setError({ show: true, msg: data.Error });
        setIsLoading(false);
      }
    } catch (e) {
      setError({ show: true, msg: 'server not found!' });
    }
  };

  const urlConcat = () => {
    const querySearch = query.search === 'all' ? '&s=' : '&t=';
    const queryTitle = query.title ? `${querySearch}${query.title}` : '';
    const queryYear = query.year ? `&y=${query.year}` : '';
    const queryPlot = query.plot === 'full' ? `&plot=full` : '';
    const queryPage = `&page=${query.page}`;

    return `${API_ENDPOINT}${queryTitle}${queryYear}${queryPlot}${queryPage}`;
  };

  useEffect(() => {
    fetchMovies(urlConcat());
  }, [query]);

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

export { AppProvider, useGlobalContext };
