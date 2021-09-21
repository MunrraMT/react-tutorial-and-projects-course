/* eslint-disable no-unused-vars */
import { useState } from 'react';

import data from './base/data';
import Menu from './base/Menu';
import Categories from './base/Categories';

function App() {
  const [menuItems, setMenuItems] = useState(data);
  const [categories, setCategories] = useState([]);

  const filterItems = (category) => {
    if (category === 'all') setMenuItems(data);

    if (category !== 'all') {
      const newItems = data.filter((item) => item.category === category);

      setMenuItems(newItems);
    }
  };

  return (
    <main>
      <section className="menu section">
        <header className="title">
          <h2>Nosso menu</h2>
          <div className="underline" />
        </header>

        <Categories filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
