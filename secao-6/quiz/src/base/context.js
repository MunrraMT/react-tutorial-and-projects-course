/* eslint-disable */

import { useContext, createContext, useState } from 'react';
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

const AppProvider = ({ children }) => {
  const [waiting, setWaiting] = useState(true);
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [index, setIndext] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [error, setError] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <AppContext.Provider
      value={{
        waiting,
        loading,
        questions,
        index,
        correct,
        error,
        isModalOpen,
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
