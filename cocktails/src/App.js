import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from './base/components/Navbar';
import About from './base/pages/About';
import Error from './base/pages/Error';
import Home from './base/pages/Home';
import SingleCocktail from './base/pages/SingleCocktail';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/cocktail/:id" component={SingleCocktail} />

        <Route path="*" component={Error} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
