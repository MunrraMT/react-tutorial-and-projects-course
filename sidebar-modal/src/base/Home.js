import { useContext } from 'react';

import { FaBars } from 'react-icons/fa';

import { AppContext } from './context';

const Home = () => {
  const { toggleOpenModal, toggleOpenSideBar } = useContext(AppContext);

  return (
    <main>
      <button
        type="button"
        className="sidebar-toggle"
        onClick={toggleOpenSideBar}
      >
        <FaBars />
      </button>

      <button type="button" className="btn" onClick={toggleOpenModal}>
        Show modal
      </button>
    </main>
  );
};

export default Home;
