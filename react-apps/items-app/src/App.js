import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Items from "./components/items";
import NewItem from "./components/newItem";

class App extends Component {
  state = {};
  render() {
    return (
      <Switch>
        <Route path="/new" component={NewItem} />
        <Route path="/" component={Items} />
      </Switch>
    );
  }
}

export default App;
