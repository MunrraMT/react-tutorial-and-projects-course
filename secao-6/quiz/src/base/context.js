/* eslint-disable */

import { useContext, createContext, useState, useEffect } from 'react';
import { node } from 'prop-types';
import axios from 'axios';

// const table = {
//   sports: 21,
//   history: 23,
//   politics: 24,
// }

// const API_ENDPOINT = 'https://opentdb.com/api.php?'
const tempUrl =
  'https://opentdb.com/api.php?amount=10&category=20&difficulty=easy&type=multiple';

// const url = ''

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [waiting, setWaiting] = useState(true);
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [numberQuestions, setNumberQuestions] = useState(0);
  const [index, setIndex] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [error, setError] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchQuestions = async (url) => {
    setLoading(true);
    setWaiting(false);

    const response = await axios(url).catch((err) => console.log(err));

    if (response) {
      const data = await response.data.results;

      if (data.length > 0) {
        setQuestions(data);
        setNumberQuestions(data.length);
        setLoading(false);
        setWaiting(false);
        setError(false);
      } else {
        setWaiting(true);
        setError(true);
      }
    } else {
      setWaiting(true);
    }
  };

  const nextQuestion = () => {
    setIndex((prev) => {
      if (Number(index) === Number(numberQuestions) - 1) {
        // openModal();
        return 0;
      } else {
        return Number(prev) + 1;
      }
    });
  };

  useEffect(() => {
    fetchQuestions(tempUrl);
  }, []);

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
        numberQuestions,
        nextQuestion,
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
