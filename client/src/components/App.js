import React, { useContext } from "react";
import "./App.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  __RouterContext
} from "react-router-dom";
import { useTransition, animated } from "react-spring";
import Homepage from "./Homepage";
import Contact from "./Contact";
import Product from "./Product";
import useApplicationData from "../hooks/useApplicationData";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  const { state, dispatch } = useApplicationData();

  const { location } = useContext(__RouterContext);
  const transitions = useTransition(location, location => location.pathname, {
    from: { position: "absolute", opacity: 0 },
    enter: { opacity: 1, trail: "O.3s" },
    leave: { opacity: 0 }
  });

  return (
    <div>
      {transitions.map(({ item, props, key }) => (
        <animated.div key={key} style={props}>
          <Switch location={item}>
            <Route exact path="/">
              <Homepage state={state} dispatch={dispatch} />
            </Route>
            <Route exact path="/contact">
              <Contact state={state} dispatch={dispatch} />
            </Route>
            <Route exact path="/product">
              <Product state={state} dispatch={dispatch} />
            </Route>
          </Switch>
        </animated.div>
      ))}
      <footer></footer>
    </div>
  );
}
