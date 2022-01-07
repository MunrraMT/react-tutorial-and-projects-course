import { useContext, createContext, useReducer, useEffect } from 'react';
import { node } from 'prop-types';

import { SET_LOADING } from './actions';
import reducer from './reducer';

// const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?';

const initialState = {
  isLoading: true,
};

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchStories = async () => {
    dispatch({ type: SET_LOADING });
  };

  useEffect(() => {
    fetchStories();
  }, []);

  return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
};

AppProvider.propTypes = {
  children: node.isRequired,
};

// make sure use
const useGlobalContext = () => useContext(AppContext);

export { AppProvider, useGlobalContext };
