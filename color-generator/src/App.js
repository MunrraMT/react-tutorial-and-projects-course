/* eslint-disable */
import { useState } from 'react';

import Values from 'values.js';

function App() {
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      const colors = new Values(color).all(10);
      setError(false);
    } catch (error) {
      setError(true);
      console.log(error);
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
          <button type="submit">submit</button>
        </form>
      </section>

      <section className="colors">
        <h4>list goes here</h4>
      </section>
    </>
  );
}

export default App;