import { BrowserRouter, Route, Routes } from 'react-router-dom';

import {
  PrivateRoute,
  Error,
  Dashboard,
  Login,
  AuthWrapper,
} from './base/pages';

const App = () => (
  <BrowserRouter>
    <AuthWrapper>
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
    </AuthWrapper>
  </BrowserRouter>
);

export default App;
