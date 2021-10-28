import { string } from 'prop-types';

const Follower = ({ image, link, name }) => (
  <article className="card">
    <img src={image} alt={name} />
    <h4>{name}</h4>
    <a href={link} className="btn">
      view profile
    </a>
  </article>
);

Follower.propTypes = {
  image: string.isRequired,
  link: string.isRequired,
  name: string.isRequired,
};

export default Follower;
