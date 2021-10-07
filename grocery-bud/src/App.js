/* eslint-disable  */
import { useState } from 'react';

import Alert from './base/Alert';
import List from './base/List';

function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Hello');
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && <Alert />}
        <h3>Grocery Bud</h3>

        <section className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="e.g. eggs"
            value={name}
            onChange={handleChange}
          />

          <button type="submit" className="submit-btn">
            {isEditing ? 'edit' : 'submit'}
          </button>
        </section>
      </form>

      <section className="grocery-container">
        <List />
        <button type="button" className="clear-btn">
          clear items
        </button>
      </section>
    </section>
  );
}

export default App;
