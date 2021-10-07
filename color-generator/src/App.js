import { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';

import Values from 'values.js';

import SingleColor from './base/SingleColor';

function App() {
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  useEffect(() => {
    const firstList = new Values('#f15025').all(10);

    setList(firstList);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      const colors = new Values(color).all(10);

      setList(colors);
      setError(false);
    } catch (errorMsg) {
      setError(true);
    }
  };

  const handleChange = (e) => {
    setColor(e.target.value);
  };

  return (
    <>
      <section className="container">
        <h3>color generator</h3>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="#f15025"
            value={color}
            onChange={handleChange}
            className={`${error && 'error'} `}
          />
          <button className="btn" type="submit">
            submit
          </button>
        </form>
      </section>

      <section className="colors">
        {list.map(({ rgb, weight, hex }, index) => (
          <SingleColor
            key={hex}
            rgb={rgb}
            weight={weight}
            hex={hex}
            index={index}
          />
        ))}
      </section>
    </>
  );
}

export default App;
