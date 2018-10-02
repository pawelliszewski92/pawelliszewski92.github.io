import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Items from "./components/items";
import NewItem from "./components/newItem";

class App extends Component {
  state = {
    newItem: {},
    data: [
      {
        id: 1,
        photo: "",
        category: "",
        price: "20 PLN",
        desc: "Action figure"
      },
      {
        id: 2,
        photo: "",
        category: "",
        price: "",
        desc: "Action Figure"
      }
    ]
  };

  handleSubmit = newItem => {
    const data = [newItem, ...this.state.data];
    this.setState({ data });
  };

  render() {
    const newItemRender = props => (
      <NewItem {...props} onSubmit={this.handleSubmit} />
    );
    const itemsRender = props => <Items {...props} data={this.state.data} />;

    return (
      <Switch>
        <Route path="/new" render={newItemRender} />
        <Route path="/" component={itemsRender} />
      </Switch>
    );
  }
}

export default App;
