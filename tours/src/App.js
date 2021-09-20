/* eslint-disable no-unused-vars */

import { useEffect, useState } from 'react';

import Loading from './base/Loading';
import Tours from './base/Tours';

const url = 'https://course-api.com/react-tours-project';

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const toursData = await response.json();

      setTours(toursData);
      setLoading(false);
    } catch (error) {
      console.log(error);

      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  return (
    <main>
      {loading && <Loading />}
      {!loading && <Tours />}
    </main>
  );
}

export default App;
