import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Items from "./components/items";
import NewItem from "./components/newItem";
import { getCategories, getItems } from "./services/itemsService";

class App extends Component {
  state = {
    newItem: {},
    data: []
  };

  async componentDidMount() {
    const { data } = await getItems();
    const newData = data.map(item => ({
      photo: item.photo,
      price: item.price,
      category: item.category.name,
      desc: item.desc
    }));
    this.setState({ data: newData });
  }

  handleSubmit = newItem => {
    console.log(newItem);
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
