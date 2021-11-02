/* eslint-disable */
import { useState, useEffect } from 'react';

import { FaSearch } from 'react-icons/fa';

import Photo from './base/Photo';

const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`;

const baseUrl = `https://api.unsplash.com/`;
const mainEndPoint = `/photos/`;
const searchEndPoint = `/search/photos/`;

function App() {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);

  const fetchImages = async (params = '') => {
    setLoading(true);

    try {
      const url = `${baseUrl}${params}${clientID}`;

      const response = await fetch(url);
      const data = await response.json();

      console.log(data);

      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchImages(mainEndPoint);
  }, []);

  return <h2>stock photos starter</h2>;
}

export default App;
