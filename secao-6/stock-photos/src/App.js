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
const mainEndPoint = `photos/`;
// const searchEndPoint = `search/photos/`;

function App() {
  const [loading, setLoading] = useState(true);
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const getPhotos = async (url) => {
    setLoading(true);

    const response = await fetch(url);
    const dataFetch = await response.json();

    setPhotos((prev) => [...prev, ...dataFetch]);
    setLoading(false);
  };

  useEffect(() => {
    getPhotos(
      `${baseUrl}${mainEndPoint}${clientID}&page=${page}`,
      // './mock.json',
    );
  }, [page]);

  useEffect(() => {
    const loadScrolling = () => {
      const innerHeight = Number(window.innerHeight);
      const scrollTop = Number(document.documentElement.scrollTop);
      const bodyScrollHeight = Number(document.documentElement.offsetHeight);

      if (innerHeight + scrollTop === bodyScrollHeight) {
        setPage((prev) => Number(prev) + 1);
      }
    };

    window.addEventListener('scroll', loadScrolling);

    return () => {
      window.removeEventListener('scroll', loadScrolling);
    };
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

        {photos.length > 0 && (
          <section className="photos-center">
            {photos.map((photo) => (
              <Photo
                key={photo.id}
                image={isValidImage(photo.urls.regular)}
                description={isValidDescription(photo.alt_description)}
                name={photo.user.name}
                likes={photo.likes}
                portfolioUrl={isValidPortfolioUrl(photo.user.portfolio_url)}
                userImage={photo.user.profile_image.medium}
              />
            ))}
          </section>
        )}
      </section>
    </main>
  );
}

export default App;
