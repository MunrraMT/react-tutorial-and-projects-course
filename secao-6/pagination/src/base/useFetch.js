import { useState, useEffect } from 'react';

import paginate from './utils';

const useFetch = (url, number) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getProducts = async () => {
    setLoading(true);

    const response = await fetch(url);
    const dataFetch = await response.json();

    setData(paginate(dataFetch, number));
    setLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return [loading, data];
};

export default useFetch;
