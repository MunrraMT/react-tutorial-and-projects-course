import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Dashboard, Error, Login } from './base/pages';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />

      <Route path="*" element={<Error />} />
    </Routes>
  </BrowserRouter>
);

export default App;
