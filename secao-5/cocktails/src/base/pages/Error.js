import { Link } from 'react-router-dom';

const Error = () => (
  <section className="section error-page">
    <section className="error-container">
      <h1>oops! it&rsquo;s a dead end</h1>

      <Link to="/" className="btn btn-primary">
        back home
      </Link>
    </section>
  </section>
);

export default Error;
