import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Detail from './components/pages/Detail';

import Home from './components/pages/Home';
import Starred from './components/pages/Starred';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/starred">
        <Starred />
      </Route>
      <Route exact path="/show/:id">
        <Detail />
      </Route>
      <Route>
        <div>404 error, Page not found</div>
      </Route>
    </Switch>
  );
}

export default App;
