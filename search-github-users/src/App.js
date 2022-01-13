// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Dashboard, Error, Login } from './base/pages';

const App = () => (
  <div>
    <Dashboard />
    <Login />
    <Error />
  </div>
);

export default App;
