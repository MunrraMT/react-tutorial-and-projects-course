/* eslint-disable no-unused-vars */
import { FaBars } from 'react-icons/fa';

import { useGlobalContext } from './Context';
import sublinks from './data';
import logo from './images/logo.svg';

const Navbar = () => {
  const { isSubmenuOpen, toggleSubmenuOpen } = useGlobalContext();

  return (
    <nav className="nav">
      <section className="nav-center">
        <header className="nav-header">
          <img src={logo} alt="logo" className="nav-logo" />
          <button
            type="button"
            className="btn toggle-btn"
            onClick={toggleSubmenuOpen}
          >
            <FaBars />
          </button>
        </header>

        <ul className="nav-links">
          {sublinks.map((link) => (
            <li key={link.page}>
              <button type="button" className="link-btn">
                {link.page}
              </button>
            </li>
          ))}
        </ul>

        <button type="button" className="btn signin-btn">
          Sign in
        </button>
      </section>
    </nav>
  );
};

export default Navbar;
