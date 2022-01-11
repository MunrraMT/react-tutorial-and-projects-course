import { useContext, createContext } from 'react';
import { node } from 'prop-types';

// const table = {
//   sports: 21,
//   history: 23,
//   politics: 24,
// }

// const API_ENDPOINT = 'https://opentdb.com/api.php?'
// const tempUrl = https://opentdb.com/api.php?amount=10&category=20&difficulty=easy&type=multiple

// const url = ''

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
