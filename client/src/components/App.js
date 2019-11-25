import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Homepage from './Homepage'
import useApplicationData from '../hooks/useApplicationData'


export default function App() {
  const { state, dispatch } = useApplicationData()

  return (
    <Router>
      <div>
        <header></header>
        <Switch>
          <Route exact path="/">
            <Homepage 
              state={state}
              dispatch={dispatch}
            />
          </Route>
        </Switch>
        <footer></footer>
      </div>
    </Router>
  );
}

