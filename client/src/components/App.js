import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Homepage from './Homepage'
import Contact from './Contact'
import useApplicationData from '../hooks/useApplicationData'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App() {
  const { state, dispatch } = useApplicationData()

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Homepage 
              state={state}
              dispatch={dispatch}
            />
          </Route>
          <Route exact path="/contact">
            <Contact
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

