import { Routes, Route } from 'react-router-dom';

import Home from './base/Home';
import Movie from './base/SingleMovie';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path=":id" element={<Movie />} />
    </Routes>
  );
}

export default App;
