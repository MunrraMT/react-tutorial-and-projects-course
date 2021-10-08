import { useContext } from 'react';

import { FaTimes } from 'react-icons/fa';

import logo from './logo.svg';
import { social, links } from './data';
import { AppContext } from './context';

const Sidebar = () => {
  const { isOpenSideBar, toggleOpenSideBar } = useContext(AppContext);

  return (
    <aside className={isOpenSideBar ? 'sidebar show-sidebar' : 'sidebar'}>
      <header className="sidebar-header">
        <img src={logo} alt="logo" className="logo" />
        <button type="button" className="close-btn" onClick={toggleOpenSideBar}>
          <FaTimes />
        </button>
      </header>

      <ul className="links">
        {links.map(({ id, url, text, icon }) => (
          <li key={id}>
            <a href={url}>
              {icon}
              {text}
            </a>
          </li>
        ))}
      </ul>

      <ul className="social-icons">
        {social.map(({ id, url, icon }) => (
          <li key={id}>
            <a href={url}>{icon}</a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
