import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Homepage from './Homepage'
import useApplicationData from '../hooks/useApplicationData'


export default function App() {
  const { state, dispatch } = useApplicationData()

  return (
    <Router>
      <div>
        <header className="App-Nav-bar">
          <section className="Nav-bar-left">
            <h3>Biscuiterie - Crêperie de Tahiti</h3>
          </section>
          <section className="Nav-bar-right">
            <Link className="Nav-bar-links react-links" to="/">Processus</Link>
            <Link className="Nav-bar-links react-links" to="/">Gamme</Link>
            <Link className="Nav-bar-links react-links" to="/">A propos</Link>
            <Link className="Nav-bar-links react-links" to="/contact">Contact</Link>
          </section>
        </header>
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

