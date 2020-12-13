import React, { useReducer } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { history } from './lib/helpers/history';
import GlobalStyle from './lib/styles/GlobalStyle';
import { Context } from './lib/helpers/context';
import './app.css';

// pages
import Main from './pages/Main';
import Test from './pages/Test';
import Result from './pages/Result';
import { Helmet } from 'react-helmet';

const reducer = (state, action) => {
  switch (action.type) {
    case 'EI':
      console.log(`EI 실행 ${action.type}`);
      state.E += 1;
      return { ...state };
    case 'TF':
      console.log(`TF 실행 ${action.type}`);
      state.T += 1;
      return { ...state };
    case 'JP':
      console.log(`JP 실행 ${action.type}`);
      state.J += 1;
      return { ...state };
    default:
      console.log(state);
      console.log('default 실행');
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, { E: 0, T: 0, J: 0 });

  return (
    <Context.Provider value={{ state, dispatch }}>
      <Router history={history}>
        <GlobalStyle />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/test/:type" component={Test} />
          <Route path="/result/:type/:name" component={Result} />
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    </Context.Provider>
  );
};

export default App;
