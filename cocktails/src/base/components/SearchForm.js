import { useEffect, useRef } from 'react';
import { useGlobalContext } from '../context';

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();

  const searchValue = useRef(null);

  useEffect(() => {
    searchValue.current.focus();
  }, []);

  const handleChange = () => {
    setSearchTerm(searchValue.current.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <section className="form-control">
          <label htmlFor="name">
            search youuur favorite cocktail
            <input
              type="text"
              id="name"
              ref={searchValue}
              onChange={handleChange}
            />
          </label>
        </section>
      </form>
    </section>
  );
};

export default SearchForm;
