import { useState } from 'react';
import { FaBars } from 'react-icons/fa';

import { links, social } from './data';
import logo from './logo.svg';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const handleClick = () => {
    setShowLinks((prev) => !prev);
  };

  return (
    <nav>
      <section className="nav-center">
        <header className="nav-header">
          <img src={logo} alt="logo" />
          <button type="button" className="nav-toggle" onClick={handleClick}>
            <FaBars />
          </button>
        </header>

        <section className={`links-container ${showLinks && 'show-container'}`}>
          <ul className="links">
            {links.map((link) => (
              <li key={link.id}>
                <a href={link.url}>{link.text}</a>
              </li>
            ))}
          </ul>
        </section>

        <ul className="social-icons">
          {social.map((item) => (
            <li key={item.id}>
              <a href={item.url}>{item.icon}</a>
            </li>
          ))}
        </ul>
      </section>
    </nav>
  );
};

export default Navbar;
