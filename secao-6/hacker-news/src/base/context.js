import { useContext, createContext } from 'react';
import { node } from 'prop-types';

// import {
//   SET_LOADING,
//   SET_STORIES,
//   REMOVE_STORY,
//   HANDLE_PAGE,
//   HANDLE_SEARCH,
// } from './actions'
// import reducer from './reducer'

// const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?';

// const initialState = {};

const AppContext = createContext();

const AppProvider = ({ children }) => (
  <AppContext.Provider value="hello">{children}</AppContext.Provider>
);

AppProvider.propTypes = {
  children: node.isRequired,
};

// make sure use
const useGlobalContext = () => useContext(AppContext);

export { AppProvider, useGlobalContext };
