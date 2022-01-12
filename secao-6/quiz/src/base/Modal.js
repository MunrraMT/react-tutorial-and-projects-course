/* eslint-disable */

import { useGlobalContext } from './context';

const Modal = () => {
  const { isModalOpen, closeModal, correct, numberQuestions } =
    useGlobalContext();

  return (
    <section
      className={isModalOpen ? 'modal-container isOpen' : 'modal-container'}
    >
      <section className="modal-content">
        <h2>congrats!</h2>
        <p>
          You answered {((correct / numberQuestions) * 100).toFixed(0)}% of
          questions correctly
        </p>
        <p>
          {correct} correct questions out of {numberQuestions}{' '}
        </p>
        <button type="button" className="close-btn" onClick={closeModal}>
          play again
        </button>
      </section>
    </section>
  );
};

export default Modal;
