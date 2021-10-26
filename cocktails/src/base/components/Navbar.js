import { Link } from 'react-router-dom';

import logo from '../logo.svg';

const Navbar = () => (
  <nav className="navbar">
    <section className="nav-center">
      <Link to="/">
        <img src={logo} alt="logo" className="logo" />
      </Link>

      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </section>
  </nav>
);

export default Navbar;
