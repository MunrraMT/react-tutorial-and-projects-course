import { FaTimes } from 'react-icons/fa';

const Modal = () => (
  <section className="modal-overlay">
    <section className="modal-container">
      <h3>modal</h3>
      <button type="button" className="close-modal-btn">
        <FaTimes />
      </button>
    </section>
  </section>
);

export default Modal;
