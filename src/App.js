import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import Detail from './components/pages/Detail';
import Home from './components/pages/Home';
import Starred from './components/pages/Starred';

const theme = {
  mainColors: {
    blue: '#2400ff',
    gray: '#c6c6c6',
    dark: '#353535',
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
}

export default App;
