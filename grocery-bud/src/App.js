/* eslint-disable  */
import { useEffect, useRef, useState } from 'react';

import Alert from './base/Alert';
import List from './base/List';

function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' });

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const showAlert = (show = false, msg = '', type = '') => {
    setAlert((prev) => ({ ...prev, show, msg, type }));
  };

  useEffect(() => {
    const alertTimer = setTimeout(() => {
      showAlert(false);
    }, 2000);

    return () => {
      clearTimeout(alertTimer);
    };
  }, [alert]);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      showAlert(true, 'Precisa ter um nome válido.', 'danger');
    }

    if (name && isEditing) {
      setList(
        list.map((item) => {
          return Number(item.id) === Number(editId)
            ? { ...item, title: name }
            : item;
        }),
      );
      setName('');
      setEditID(null);
      setIsEditing(false);
      showAlert(true, 'Editado com sucesso.', 'success');
    }

    if (name && !isEditing) {
      const newID = new Date().getTime().toString();
      const newItem = { id: newID, title: name };

      showAlert(true, 'Adicionado com sucesso.', 'success');
      setList((prev) => [...prev, newItem]);
      setName('');
    }
  };

  const clearList = () => {
    showAlert(true, 'Todos os items foram apagados.', 'danger');
    setList([]);
  };

  const removeItem = (id) => {
    setList(list.filter((item) => Number(item.id) !== Number(id)));
    showAlert(true, 'Item apagado com sucesso.', 'danger');
  };

  const editItem = (id) => {
    const item = list.find((item) => Number(item.id) === Number(id));

    setIsEditing(true);
    setEditID(item.id);
    setName(item.title);
  };

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && <Alert state={alert} />}
        <h3>Grocery Bud</h3>

        <section className="form-control">
          <input
            ref={inputRef}
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
          <List items={list} removeItem={removeItem} editItem={editItem} />
          <button type="button" className="clear-btn" onClick={clearList}>
            clear items
          </button>
        </section>
      )}
    </section>
  );
}

export default App;
