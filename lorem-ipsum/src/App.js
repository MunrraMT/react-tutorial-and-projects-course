/* eslint-disable */
import { useEffect, useState } from 'react';
import data from './base/data';

function App() {
  const [textBase, setTextBase] = useState([]);
  const [count, setCount] = useState('0');
  const [textGenerated, setTextGenerated] = useState([]);

  useEffect(() => {
    setTextBase(data);
  }, []);

  const randomNumber = () => Math.floor(Math.random() * 100000);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (textBase.length === 0)
      setTextGenerated('Servidor de texto não encontrado.');

    if (Number(count) === 0) {
      setTextGenerated(
        textBase.map((text) => <p key={randomNumber()}>{text}</p>),
      );
    }

    if (Number(count) > 0) {
      setTextGenerated(
        textBase
          .slice(0, Number(count))
          .map((text) => <p key={randomNumber()}>{text}</p>),
      );
    }
  };

  const handleChange = (e) => {
    setCount(
      e.target.value < 0
        ? 0
        : e.target.value > textBase.length
        ? textBase.length
        : e.target.value,
    );
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
