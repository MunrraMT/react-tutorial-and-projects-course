import { func } from 'prop-types';
import { FaBars } from 'react-icons/fa';

const Home = ({ setOpenModal }) => {
  const handleClickOpenModal = () => {
    setOpenModal((prev) => !prev);
  };

  return (
    <main>
      <button type="button" className="sidebar-toggle">
        <FaBars />
      </button>

      <button type="button" className="btn" onClick={handleClickOpenModal}>
        Show modal
      </button>
    </main>
  );
};

Home.propTypes = {
  setOpenModal: func.isRequired,
};

export default Home;
