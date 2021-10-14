import { FaBars } from 'react-icons/fa';

import { useGlobalContext } from './Context';
import sublinks from './data';
import logo from './images/logo.svg';

const Navbar = () => {
  const { toggleSidebarOpen, openSubmenu } = useGlobalContext();

  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;

    openSubmenu(page, { center, bottom });
  };

  return (
    <nav className="nav">
      <section className="nav-center">
        <header className="nav-header">
          <img src={logo} alt="logo" className="nav-logo" />
          <button
            type="button"
            className="btn toggle-btn"
            onClick={toggleSidebarOpen}
          >
            <FaBars />
          </button>
        </header>

        <ul className="nav-links">
          {sublinks.map((link) => (
            <li key={link.page}>
              <button
                type="button"
                className="link-btn"
                onMouseOver={displaySubmenu}
                onFocus={displaySubmenu}
              >
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
