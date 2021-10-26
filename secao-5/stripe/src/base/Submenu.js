/* eslint-disable no-unused-vars */
import { useEffect, useRef } from 'react';
import { useState } from 'react/cjs/react.development';

import { useGlobalContext } from './Context';

const Submenu = () => {
  const [columns, setColumns] = useState([]);

  const { isSubmenuOpen, closeSubmenu, location, page } = useGlobalContext();

  const container = useRef(null);

  useEffect(() => {
    const submenu = container.current;
    const { center, bottom } = location;

    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;

    if (page.links.length <= 3) setColumns(`col-${page.links.length}`);
    if (page.links.length > 3) setColumns('col-4');
  }, [location]);

  return (
    <aside
      className={isSubmenuOpen ? 'submenu show' : 'submenu'}
      ref={container}
      onMouseLeave={closeSubmenu}
    >
      <h4>{page.page}</h4>
      <section className={`submenu-center ${columns}`}>
        {page.links.map(({ label, icon, url }) => (
          <a href={url} key={label}>
            {icon} {label}
          </a>
        ))}
      </section>
    </aside>
  );
};

export default Submenu;
