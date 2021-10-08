/* eslint-disable no-unused-vars */
import { FaTimes } from 'react-icons/fa';
import logo from './logo.svg';
import { social, links } from './data';

const Sidebar = () => (
  <aside className="sidebar">
    <header className="sidebar-header">
      <img src={logo} alt="logo" className="logo" />
      <button type="button" className="close-btn">
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

export default Sidebar;
