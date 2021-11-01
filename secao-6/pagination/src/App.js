/* eslint-disable */

import { useState, useEffect } from 'react';

import useFetch from './base/useFetch';
import Follower from './base/Follower';

const url = 'https://api.github.com/users/john-smilga/followers?per_page=100';

function App() {
  const [page, setPage] = useState(0);
  const [followers, setFollowers] = useState([]);

  const [loading, data] = useFetch('./mock.json', 8);

  useEffect(() => {
    setFollowers(data[page]);
  }, [data, page]);

  const handleClickPage = (index) => {
    setPage(index);
  };

  const handleClickIncreasePage = () => {
    if (page === data.length - 1) {
      setPage(0);
    } else {
      setPage((prev) => Number(prev) + 1);
    }
  };

  const handleClickDecreasePage = () => {
    if (page === 0) {
      setPage(data.length - 1);
    } else {
      setPage((prev) => prev - 1);
    }
  };

  return (
    <main>
      <section className="section-title">
        <h1>{loading ? 'loading' : 'pagination'}</h1>
        <div className="underline"></div>
      </section>

      {!loading && (
        <section className="followers">
          <section className="container">
            {followers.map((person) => (
              <Follower
                key={person.id}
                image={person['avatar_url']}
                link={person['html_url']}
                name={person['login']}
              />
            ))}
          </section>

          <footer className="btn-container">
            <button
              type="button"
              className="prev-btn"
              onClick={handleClickDecreasePage}
            >
              Prev
            </button>

            {data.map((_, index) => (
              <button
                type="button"
                key={index}
                className={`page-btn ${index === page && 'active-btn'}`}
                onClick={() => handleClickPage(index)}
              >
                {Number(index) + 1}
              </button>
            ))}

            <button
              type="button"
              className="next-btn"
              onClick={handleClickIncreasePage}
            >
              Next
            </button>
          </footer>
        </section>
      )}
    </main>
  );
}

export default App;
