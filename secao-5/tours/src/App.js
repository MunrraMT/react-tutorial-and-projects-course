import { useEffect, useState } from 'react';

import Loading from './base/Loading';
import Tours from './base/Tours';

const url = 'https://course-api.com/react-tours-project';

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);

    setTours(newTours);
  };

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

      {!loading && tours.length > 0 && (
        <Tours tours={tours} removeTour={removeTour} />
      )}

      {!loading && tours.length === 0 && (
        <section className="title">
          <h2>Sem nenhum passeio</h2>
          <button className="btn" type="button" onClick={fetchTours}>
            Recarregar passeios
          </button>
        </section>
      )}
    </main>
  );
}

export default App;
