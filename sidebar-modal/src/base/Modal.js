import { bool, func } from 'prop-types';
import { FaTimes } from 'react-icons/fa';

const Modal = ({ open, setOpen }) => {
  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  return (
    <section
      className={`${open ? 'modal-overlay show-modal' : 'modal-overlay'}`}
    >
      <section className="modal-container">
        <h3>modal</h3>
        <button type="button" className="close-modal-btn" onClick={handleClick}>
          <FaTimes />
        </button>
      </section>
    </section>
  );
};

Modal.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default Modal;
