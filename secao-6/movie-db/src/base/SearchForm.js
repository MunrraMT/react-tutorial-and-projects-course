import { useGlobalContext } from './context';

const SearchForm = () => {
  const { query, setQuery, error } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChangeQuery = (e) => {
    setQuery(e.target.value);
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <h2>search movies</h2>
      <input
        type="text"
        className="form-input"
        value={query}
        onChange={handleChangeQuery}
      />
      {error.show && <section className="error">{error.msg}</section>}
    </form>
  );
};

export default SearchForm;
