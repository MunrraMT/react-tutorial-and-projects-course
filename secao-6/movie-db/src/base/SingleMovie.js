import { Link, useParams } from 'react-router-dom';

import useFetch from './useFetch';
import { API_ENDPOINT } from './context';

const noImage = './No_image_available.svg';

const SingleMovie = () => {
  const { id } = useParams();

  const { data, isLoading, error } = useFetch(
    `${API_ENDPOINT}&i=${id}&plot=full`,
  );

  const { Poster: poster, Title: title, Plot: plot, Year: year } = data;

  const BackBtn = () => (
    <Link to="/" className="btn">
      back to movies
    </Link>
  );

  if (isLoading) return <section className="loading" />;

  if (error.show)
    return (
      <section className="page-error">
        <h1>{error.msg}</h1>
        <BackBtn />
      </section>
    );

  return (
    <section className="single-movie">
      <img src={poster === 'N/A' ? noImage : poster} alt={title} />
      <section className="single-movie-info">
        <h2>{title}</h2>
        <p>{plot}</p>
        <h4>{year}</h4>
        <BackBtn />
      </section>
    </section>
  );
};

export default SingleMovie;
