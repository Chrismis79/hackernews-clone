import React from 'react';
import { Route, Switch } from "react-router-dom"

import Articles from './pages/Articles';
import Home from './pages/Home';
import Jobs from './pages/Jobs';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Switch>
          <Route path="/articles">
            <Articles />
          </Route>
          <Route path="/jobs">
            <Jobs />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

      </header>
    </div>
  );
}

export default App;
