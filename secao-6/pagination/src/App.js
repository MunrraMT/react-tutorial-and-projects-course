/* eslint-disable */

import { useState, useEffect } from 'react';
import Follower from './base/Follower';

import useFetch from './base/useFetch';
// import Follower from './Follower';

const url = 'https://api.github.com/users/john-smilga/followers?per_page=100';

function App() {
  const [loading, data] = useFetch(url);

  return (
    <main>
      <section className="section-title">
        <h1>{loading ? 'loading' : 'pagination'}</h1>
        <div className="underline"></div>
      </section>

      <section className="followers">
        <section className="container">
          {data.map((person) => (
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
