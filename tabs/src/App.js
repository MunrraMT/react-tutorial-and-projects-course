/* eslint-disable */
import { useEffect, useState } from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    const url = 'https://course-api.com/react-tabs-project';
    const response = await fetch(url);
    const newJobs = await response.json();

    setJobs(newJobs);
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <main>
      {loading && (
        <section className="section loading">
          <h1>Loading...</h1>
        </section>
      )}

      {!loading && (
        <section className="section">
          <h1>teste</h1>
        </section>
      )}
    </main>
  );
}

export default App;
