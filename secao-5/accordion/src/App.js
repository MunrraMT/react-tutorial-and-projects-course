/* eslint-disable no-unused-vars */
import { useState } from 'react';

import data from './base/data';
import Question from './base/Question';

function App() {
  const [questions, setQuestions] = useState(data);

  return (
    <main>
      <section className="container">
        <h3>Perguntas e respostas sobre login</h3>
        <section className="info">
          {questions.map((question) => (
            <Question
              key={question.id}
              title={question.title}
              info={question.info}
            />
          ))}
        </section>
      </section>
    </main>
  );
}

export default App;
