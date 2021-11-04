/* eslint-disable no-unused-vars */
// import moment from 'moment'

import { instanceOf, number, string } from 'prop-types';

const Article = ({ title, snippet, date, length }) => (
  <article className="post">
    <h2>{title}</h2>
    <footer className="post-info">
      <span>{date.toLocaleDateString()}</span>
      <span>{length} min read</span>
    </footer>
    <p>{snippet}</p>
  </article>
);

Article.propTypes = {
  title: string.isRequired,
  snippet: string.isRequired,
  date: instanceOf(Date).isRequired,
  length: number.isRequired,
};

export default Article;
