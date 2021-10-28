/* eslint-disable */

import { useState, useEffect } from 'react';

import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from 'react-icons/fa';

const url = 'https://randomuser.me/api/';
const defaultImage = 'https://randomuser.me/api/portraits/men/75.jpg';

function App() {
  const [loading, setLoading] = useState(false);
  const [person, setPerson] = useState(null);
  const [title, setTitle] = useState('name');
  const [value, setValue] = useState('random person');

  const getperson = async () => {
    setLoading(true);

    const response = await fetch(url);
    const data = await response.json();

    const person = data.results[0];
    const { phone, email } = person;
    const { large: image } = person.picture;
    const {
      login: { password },
    } = person;
    const { first, last } = person.name;
    const {
      dob: { age },
    } = person;
    const {
      street: { number, name },
    } = person.location;

    const newPerson = {
      image,
      phone,
      email,
      password,
      age,
      street: `${number} ${name}`,
      name: `${first} ${last}`,
    };

    setPerson(newPerson);
    setValue(newPerson.name);
    setLoading(false);
  };

  useEffect(() => {
    getperson();
  }, []);

  const handleMouseOver = (e) => {
    console.log(e.target);
  };

  return (
    <main>
      <section className="block bcg-black"></section>
      <section className="block">
        <section className="container">
          <img
            src={person ? person.image : defaultImage}
            alt="random user"
            className="user-img"
          />

          <p className="user-title">my {title} is</p>
          <p className="user-value">{value}</p>

          <footer className="values-list">
            <button
              type="button"
              className="icon"
              data-label="name"
              onMouseOver={handleMouseOver}
            >
              <FaUser />
            </button>
            <button
              type="button"
              className="icon"
              data-label="email"
              onMouseOver={handleMouseOver}
            >
              <FaEnvelopeOpen />
            </button>
            <button
              type="button"
              className="icon"
              data-label="age"
              onMouseOver={handleMouseOver}
            >
              <FaCalendarTimes />
            </button>
            <button
              type="button"
              className="icon"
              data-label="street"
              onMouseOver={handleMouseOver}
            >
              <FaMap />
            </button>
            <button
              type="button"
              className="icon"
              data-label="phone"
              onMouseOver={handleMouseOver}
            >
              <FaPhone />
            </button>
            <button
              type="button"
              className="icon"
              data-label="password"
              onMouseOver={handleMouseOver}
            >
              <FaLock />
            </button>
          </footer>

          <button type="button" className="btn" onClick={getperson}>
            {loading ? 'loading...' : 'random user'}
          </button>
        </section>
      </section>
    </main>
  );
}

export default App;
