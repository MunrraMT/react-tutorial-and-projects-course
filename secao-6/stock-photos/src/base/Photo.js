import { number, string } from 'prop-types';

const Photo = ({
  image,
  description,
  name,
  likes,
  portfolioUrl,
  userImage,
}) => (
  <article className="photo">
    <img src={image} alt={description} />
    <footer className="photo-info">
      <section>
        <h4>{name}</h4>
        <p>{likes} likes</p>
      </section>

      <a href={portfolioUrl}>
        <img src={userImage} alt={name} className="user-img" />
      </a>
    </footer>
  </article>
);

Photo.propTypes = {
  image: string.isRequired,
  description: string.isRequired,
  name: string.isRequired,
  likes: number.isRequired,
  portfolioUrl: string.isRequired,
  userImage: string.isRequired,
};

export default Photo;
