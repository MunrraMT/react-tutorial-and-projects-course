import { useEffect, useState } from 'react';

import data from './base/data';
import Article from './base/Article';

function App() {
  const [theme, setTheme] = useState(() => {
    const localTheme = localStorage.getItem('theme');

    if (localTheme) return localTheme;

    return 'light-theme';
  });

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleTheme = () => {
    setTheme(() => {
      if (theme === 'dark-theme') return 'light-theme';

      return 'dark-theme';
    });
  };

  return (
    <main>
      <nav>
        <section className="nav-center">
          <h1>overreacted</h1>
          <button type="button" className="btn" onClick={handleTheme}>
            toggle
          </button>
        </section>
      </nav>

      <section className="articles">
        {data.map((item) => (
          <Article
            key={item.id}
            title={item.title}
            snippet={item.snippet}
            date={item.date}
            length={item.length}
          />
        ))}
      </section>
    </main>
  );
}

export default App;
