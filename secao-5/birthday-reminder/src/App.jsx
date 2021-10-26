import { useState } from 'react';

import data from './base/data';
import List from './base/List';

function App() {
  const [people, setPeople] = useState(data);

  const count = people.length;

  const clearAll = () => {
    setPeople([]);
  };

  return (
    <main>
      <section className="container">
        <h3>{count} aniversários hoje.</h3>
        <List people={people} />
        <button type="button" onClick={clearAll}>
          Limpar todos
        </button>
      </section>
    </main>
  );
}

export default App;
