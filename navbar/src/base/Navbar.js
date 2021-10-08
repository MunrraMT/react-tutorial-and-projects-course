import { useEffect, useRef, useState } from 'react';
import { FaBars } from 'react-icons/fa';

import { links, social } from './data';
import logo from './logo.svg';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;

    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    }

    if (!showLinks) {
      linksContainerRef.current.style.height = '0px';
    }
  }, [showLinks]);

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

        <section className="links-container" ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
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
