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

    if (!name) {
      setAlert({
        show: true,
        msg: 'Precisa ter um nome válido',
        type: 'danger',
      });
    }

    if (name && isEditing) {
      setAlert({
        show: true,
        msg: 'Editado com sucesso',
        type: 'success',
      });
    }

    if (name && !isEditing) {
      const newID = new Date().getTime().toString();
      const newItem = { id: newID, title: name };

      setAlert({
        show: true,
        msg: 'Adicionado com sucesso',
        type: 'success',
      });

      setList((prev) => [...prev, newItem]);
      setName('');
    }
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

      {list.length > 0 && (
        <section className="grocery-container">
          <List items={list} />
          <button type="button" className="clear-btn">
            clear items
          </button>
        </section>
      )}
    </section>
  );
}

export default App;
