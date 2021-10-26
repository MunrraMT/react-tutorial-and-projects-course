import { node } from 'prop-types';
import { createContext, useContext } from 'react';

// const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

const AppContext = createContext();

const AppProvider = ({ children }) => (
  <AppContext.Provider value="hello">{children}</AppContext.Provider>
);

AppProvider.propTypes = {
  children: node.isRequired,
};

const useGlobalContext = () => useContext(AppContext);

export { AppProvider, useGlobalContext };
