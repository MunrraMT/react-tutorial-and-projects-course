import { useEffect, useState } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState({ show: false, msg: '' });

  useEffect(() => {
    setIsLoading(true);

    fetch(url)
      .then((response) => response.json())
      .then((dataFetch) => {
        if (dataFetch.Response === 'True') {
          setData(dataFetch);
          setError({ show: false, msg: '' });
          setIsLoading(false);
        }

        if (dataFetch.Response === 'False') {
          setError({ show: true, msg: dataFetch.Error });
          setIsLoading(false);
        }
      })
      .catch(() => {
        if (!isLoading) {
          setError({ show: true, msg: 'server not found' });
        }
      });
  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;
