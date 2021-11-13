import { Link } from 'react-router-dom';

import { useGlobalContext } from './context';

const noImage = './No_image_available.svg';

const Movies = () => {
  const { movies, isLoading } = useGlobalContext();

  if (isLoading) return <section className="loading" />;

  return (
    <section className="movies">
      {movies &&
        movies.map(
          ({ imdbID: id, Poster: poster, Title: title, Year: year }) => (
            <Link to={`/${id}`} key={id} className="movie">
              <article>
                <img src={poster === 'N/A' ? noImage : poster} alt={title} />
                <footer className="movie-info">
                  <h4 className="title">{title}</h4>
                  <p>{year}</p>
                </footer>
              </article>
            </Link>
          ),
        )}
    </section>
  );
};

export default Movies;
