import { FaBars } from 'react-icons/fa';

const Home = () => (
  <main>
    <button type="button" className="sidebar-toggle">
      <FaBars />
    </button>

    <button type="button" className="btn">
      Show modal
    </button>
  </main>
);

export default Home;
