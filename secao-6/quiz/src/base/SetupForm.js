import { useGlobalContext } from './context';

const SetupForm = () => {
  const { quiz, handleChange, handleSubmit, error } = useGlobalContext();

  return (
    <main>
      <section className="quiz quiz-small">
        <form className="setup-form">
          <h2>setup quiz</h2>

          {/* {amount} */}
          <section className="form-control">
            <label htmlFor="amount">
              number of question
              <input
                type="number"
                name="amount"
                id="amount"
                value={quiz.amount}
                onChange={handleChange}
                className="form-input"
                min={1}
                max={50}
              />
            </label>
          </section>

          {/* {category} */}
          <section className="form-control">
            <label htmlFor="category">
              category
              <select
                name="category"
                id="category"
                className="form-input"
                value={quiz.category}
                onChange={handleChange}
              >
                <option value="sports">sports</option>
                <option value="history">history</option>
                <option value="politics">politics</option>
              </select>
            </label>
          </section>

          {/* {difficulty} */}
          <section className="form-control">
            <label htmlFor="difficulty">
              difficulty
              <select
                name="difficulty"
                id="difficulty"
                className="form-input"
                value={quiz.difficulty}
                onChange={handleChange}
              >
                <option value="easy">easy</option>
                <option value="medium">medium</option>
                <option value="hard">hard</option>
              </select>
            </label>
          </section>

          {error && (
            <p className="error">
              can&apos;t generate, please try different options
            </p>
          )}

          <button type="submit" onClick={handleSubmit} className="submit-btn">
            start
          </button>
        </form>
      </section>
    </main>
  );
};

export default SetupForm;
