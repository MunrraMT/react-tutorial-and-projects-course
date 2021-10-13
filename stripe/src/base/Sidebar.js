/* eslint-disable no-unused-vars */
import { FaTimes } from 'react-icons/fa';

import sublinks from './data';
import { useGlobalContext } from './Context';

const Sidebar = () => {
  const { isSidebarOpen, toggleSidebarOpen } = useGlobalContext();

  return (
    <aside
      className={isSidebarOpen ? 'sidebar-wrapper show' : 'sidebar-wrapper'}
    >
      <section className="sidebar">
        <button type="button" className="close-btn" onClick={toggleSidebarOpen}>
          <FaTimes />
        </button>

        <section className="sidebar-links">
          {sublinks.map(({ links, page }) => (
            <article key={page}>
              <h4>{page}</h4>
              <section className="sidebar-sublinks">
                {links.map(({ url, icon, label }) => (
                  <a href={url} key={label}>
                    {icon} {label}
                  </a>
                ))}
              </section>
            </article>
          ))}
        </section>
      </section>
    </aside>
  );
};

export default Sidebar;
