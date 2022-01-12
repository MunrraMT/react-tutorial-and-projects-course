/* eslint-disable */

import { useGlobalContext } from './base/context';
import Loading from './base/Loading';
import Modal from './base/Modal';
import SetupForm from './base/SetupForm';

const App = () => {
  const { waiting, loading, questions, index, correct, numberQuestions } =
    useGlobalContext();

  if (waiting) return <SetupForm />;
  if (loading) return <Loading />;

  const { question, incorrect_answers, correct_answer } = questions[index];
  const answers = [...incorrect_answers, correct_answer];

  return (
    <main>
      {/* <Modal /> */}
      <section className="quiz">
        <p className="correct-answers">
          correct answers : {Number(correct) + 1}/{numberQuestions}
        </p>
        <p className="correct-answers">question number : {Number(index) + 1}</p>

        <article className="container">
          <h2>{question}</h2>
          {/* <h2 dangerouslySetInnerHTML={{ __html: question }} /> */}
          <section className="btn-container">
            {answers.sort().map((answer) => (
              <button key={answer} type="button" className="answer-btn">
                {answer}
              </button>
            ))}
          </section>
        </article>

        <button type="button" className="next-question">
          next question
        </button>
      </section>
    </main>
  );
};

export default App;
