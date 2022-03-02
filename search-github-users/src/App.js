import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { PrivateRoute, Error, Dashboard, Login } from './base/pages';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />

      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Error />} />
    </Routes>
  </BrowserRouter>
);

export default App;
