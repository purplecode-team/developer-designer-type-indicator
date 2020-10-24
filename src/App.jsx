import React from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';

// pages
import Main from './pages/Main';
import Test from './pages/Test';
import Result from './pages/Result';

const history = createBrowserHistory();

const App = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/test" component={Test} />
      <Route path="/result/:id" component={Result} />
      <Redirect from="*" to="/" />
    </Switch>
  </Router>
);

export default App;
