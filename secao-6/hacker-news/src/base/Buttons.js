import { useGlobalContext } from './context';

const Buttons = () => {
  const { isLoading, page, numberPages, handlePage } = useGlobalContext();

  return (
    <div className="btn-container">
      <button
        type="button"
        disabled={isLoading}
        onClick={() => handlePage('dec')}
      >
        prev
      </button>

      {isLoading ? (
        <p>Loading</p>
      ) : (
        <p>
          {Number(page) + 1} of {Number(numberPages)}
        </p>
      )}
      <button
        type="button"
        disabled={isLoading}
        onClick={() => handlePage('inc')}
      >
        next
      </button>
    </div>
  );
};

export default Buttons;
