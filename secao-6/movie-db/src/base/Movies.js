/* eslint-disable no-unused-vars */

// import { Link } from 'react-router-dom';

import { useGlobalContext } from './context';

const url =
  'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png';

const Movies = () => {
  const data = useGlobalContext();

  return <h2>movies component</h2>;
};

export default Movies;
