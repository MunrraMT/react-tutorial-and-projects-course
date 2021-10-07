import { useState } from 'react';

function App() {
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Hello');
  };

  const handleChange = (e) => {
    setColor(e.target.value);
  };

  return (
    <>
      <section className="container">
        <h1>color generator</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="#f15025"
            value={color}
            onChange={handleChange}
          />
          <button type="submit">submit</button>
        </form>
      </section>

      <section className="colors">
        <h2>list goes here</h2>
      </section>
    </>
  );
}

export default App;
