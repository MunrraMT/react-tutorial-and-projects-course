/* eslint-disable */
import { useEffect, useState } from 'react';
import data from './base/data';

function App() {
  const [textBase, setTextBase] = useState([]);
  const [count, setCount] = useState(0);
  const [textGenerated, setTextGenerated] = useState([]);

  useEffect(() => {
    setTextBase(data);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(count);
  };

  const handleChange = (e) => {
    setCount(e.target.value);
  };

  return (
    <section className="section-center">
      <h3>cansado de lorem ipsum chato?</h3>

      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">Parágrafos:</label>
        <input
          type="number"
          id="amount"
          name="amount"
          value={count}
          onChange={handleChange}
        />
        <button type="submit" className="btn">
          gerar
        </button>
      </form>

      <article className="lorem-text">{textGenerated}</article>
    </section>
  );
}

export default App;
