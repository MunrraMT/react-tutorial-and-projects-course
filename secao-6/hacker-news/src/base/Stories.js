/* eslint-disable  */
import { useGlobalContext } from './context';

const Stories = () => {
  const { isLoading, hits } = useGlobalContext();

  return isLoading ? (
    <div className="loading" />
  ) : (
    <section className="stories">
      {hits.map(({ objectID, title, num_comments, url, points, author }) => (
        <article key={objectID} className="story">
          <h4 className="title">{title}</h4>
          <p className="info">
            {points} points by <span>{author} |</span> {num_comments} comments
          </p>
          <div>
            <a href={url} className="read-link" target="_blank">
              read more
            </a>
            <button className="remove-btn">remove</button>
          </div>
        </article>
      ))}
    </section>
  );
};

export default Stories;
