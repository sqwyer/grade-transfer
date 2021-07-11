import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.css';
import Nav from '../Nav/Nav';

import Button from '../Button/Button';
import OpenURL from '../../lib/openurl';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route path="/about">
            Page not yet finished...
          </Route>
          <Route path="/">
            <div className="App">
              <p>This project is still a work in progress...</p>
              <Button isFilled="true" action={() => OpenURL('https://github.com/sqwyer/grade-transfer')}>
                Source Code
              </Button>
            </div>
          </Route>
          <Route path="*">
            <h1>404</h1>
            Oopsies... you're lost!
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
