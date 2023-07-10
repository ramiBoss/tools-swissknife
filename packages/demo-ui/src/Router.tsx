import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import App from "./App";

function Router() {
    return (
      <BrowserRouter>
        <br />
        <Link to={"/"}>Home</Link>&nbsp;&nbsp;&nbsp;
        {/* <Link to={"/compose"}>Ideas</Link>&nbsp;&nbsp;&nbsp; */}
        <br />
        <br />
        <Switch>
          <Route path="/">
            <App/>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
  
  export default Router;