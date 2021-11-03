/* eslint-disable */
import { useState, useEffect } from 'react';

import { FaSearch } from 'react-icons/fa';

import Photo from './base/Photo';
import {
  isValidDescription,
  isValidImage,
  isValidPortfolioUrl,
} from './base/utils/isValid';

const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`;

const baseUrl = `https://api.unsplash.com/`;
const mainEndPoint = `/photos/`;
const searchEndPoint = `/search/photos/`;

function App() {
  const [loading, setLoading] = useState(true);
  const [photos, setPhotos] = useState([]);

  const getPhotos = async (url) => {
    setLoading(true);

    const response = await fetch(url);
    const dataFetch = await response.json();

    setPhotos(dataFetch);
    setLoading(false);
  };

  useEffect(() => {
    getPhotos(
      // `${baseUrl}${mainEndPoint}${clientID}`,
      './mock.json',
    );
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <main>
      <section className="search">
        <form className="search-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="search" className="form-input" />
          <button type="submit" className="submit-btn">
            <FaSearch />
          </button>
        </form>
      </section>

      <section className="photos">
        {loading && <h2 className="loading">loading...</h2>}

        {!loading && (
          <section className="photos-center">
            {photos.map(
              ({
                id,
                urls: { regular },
                alt_description,
                likes,
                user: {
                  name,
                  portfolio_url,
                  profile_image: { medium },
                },
              }) => (
                <Photo
                  key={id}
                  image={isValidImage(regular)}
                  description={isValidDescription(alt_description)}
                  name={name}
                  likes={likes}
                  portfolioUrl={isValidPortfolioUrl(portfolio_url)}
                  userImage={medium}
                />
              ),
            )}
          </section>
        )}
      </section>
    </main>
  );
}

export default App;
