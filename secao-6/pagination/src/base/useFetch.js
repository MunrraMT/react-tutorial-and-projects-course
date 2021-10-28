import { useState, useEffect } from 'react';
// import paginate from './utils';

const useFetch = (url) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const getProducts = async () => {
    setLoading(true);

    const response = await fetch(url);
    const dataFetch = await response.json();

    setData(dataFetch);
    setLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return [loading, data];
};

export default useFetch();
