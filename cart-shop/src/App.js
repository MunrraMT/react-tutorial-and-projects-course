/* eslint-disable */
import React from 'react';

import { useGlobalContext } from './base/context';
import Navbar from './base/Navbar';
import CartContainer from './base/CartContainer';

function App() {
  const { loading } = useGlobalContext();

  if (loading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
