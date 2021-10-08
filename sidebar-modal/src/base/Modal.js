import { useContext } from 'react';

import { FaTimes } from 'react-icons/fa';

import { AppContext } from './context';

const Modal = () => {
  const { isOpenModal, toggleOpenModal } = useContext(AppContext);

  return (
    <section
      className={isOpenModal ? 'modal-overlay show-modal' : 'modal-overlay'}
    >
      <section className="modal-container">
        <h3>modal</h3>
        <button
          type="button"
          className="close-modal-btn"
          onClick={toggleOpenModal}
        >
          <FaTimes />
        </button>
      </section>
    </section>
  );
};

export default Modal;
