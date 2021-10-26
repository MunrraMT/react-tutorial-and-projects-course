import { useState } from 'react';

import { string } from 'prop-types';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);

  const handleClickShowInfo = () => {
    setShowInfo((prev) => !prev);
  };

  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" type="button" onClick={handleClickShowInfo}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showInfo && <p>{info}</p>}
    </article>
  );
};

Question.propTypes = {
  title: string.isRequired,
  info: string.isRequired,
};

export default Question;
