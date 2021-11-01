/* eslint-disable */

import { useState, useEffect } from 'react';

import useFetch from './base/useFetch';
import Follower from './base/Follower';

const url = 'https://api.github.com/users/john-smilga/followers?per_page=100';

function App() {
  const [page, setPage] = useState(0);
  const [followers, setFollowers] = useState([]);

  const [loading, data] = useFetch(url);

  useEffect(() => {
    setFollowers(data[page]);
  }, [data, page]);

  return (
    <main>
      <section className="section-title">
        <h1>{loading ? 'loading' : 'pagination'}</h1>
        <div className="underline"></div>
      </section>

      <section className="followers">
        <section className="container">
          {!loading &&
            followers.map((person) => (
              <Follower
                key={person.id}
                image={person['avatar_url']}
                link={person['html_url']}
                name={person['login']}
              />
            ))}
        </section>
      </section>
    </main>
  );
}

export default App;