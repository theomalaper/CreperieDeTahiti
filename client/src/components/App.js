import React from "react";
import "./App.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  __RouterContext
} from "react-router-dom";
// import { useTransition, animated } from "react-spring";
import Homepage from "./Homepage";
import Contact from "./Contact";
import Product from "./Product";
import NoMatch from "./NoMatch";
import useApplicationData from "../hooks/useApplicationData";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  const { state, dispatch, SET_PRODUCT_DATA } = useApplicationData();

  // const { location } = useContext(__RouterContext);
  // const transitions = useTransition(location, location => location.pathname, {
  //   from: { position: "absolute", opacity: 0 },
  //   enter: { opacity: 1 },
  //   leave: { opacity: 0 }
  // });

  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Homepage state={state} dispatch={dispatch} />
        </Route>
        <Route exact path="/contact">
          <Contact state={state} dispatch={dispatch} />
        </Route>
        <Route path="/product/:productId/:productType">
          <Product
            state={state}
            dispatch={dispatch}
            SET_PRODUCT_DATA={SET_PRODUCT_DATA}
          />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
      <footer></footer>
    </div>
  );
}
