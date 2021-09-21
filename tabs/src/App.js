/* eslint-disable */
import { useEffect, useState } from 'react';

import { FaAngleDoubleRight } from 'react-icons/fa';

import randomNumber from './random-number';

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
      {loading ? (
        <section className="section loading">
          <h1>Loading...</h1>
        </section>
      ) : (
        <section className="section">
          <header className="title">
            <h2>expierence</h2>
            <div className="underline"></div>
          </header>

          <section className="jobs-center">
            {/*  */}
            {/*  */}

            <article className="job-info">
              <h3>{jobs[value].title}</h3>
              <h4>{jobs[value].company}</h4>
              <p className="job-date">{jobs[value].dates}</p>

              {jobs[value].duties.map((duty) => (
                <section key={randomNumber(1000, 9999)} className="job-desc">
                  <FaAngleDoubleRight className="job-icon" />
                  <p>{duty}</p>
                </section>
              ))}
            </article>
          </section>
        </section>
      )}
    </main>
  );
}

export default App;
