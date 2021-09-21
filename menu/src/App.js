/* eslint-disable no-unused-vars */
import { useState } from 'react';

import data from './base/data';
import Categories from './base/Categories';
import Menu from './base/Menu';

function App() {
  const [menuItems, setMenuItems] = useState(data);
  const [categories, setCategories] = useState([]);

  return (
    <main>
      <section className="menu section">
        <header className="title">
          <h2>Nosso menu</h2>
          <div className="underline" />
        </header>

        <Categories />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
