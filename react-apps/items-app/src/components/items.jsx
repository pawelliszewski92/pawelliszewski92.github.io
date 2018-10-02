import React, { Component } from "react";
import { Link } from "react-router-dom";
import ItemsTable from "./itemsTable";

class Items extends Component {
  state = {
    sortColumn: { path: "", order: "" },
    data: [{ photo: "", category: "", price: "20 PLN", desc: "Action figure" }]
  };
  render() {
    return (
      <div>
        <Link to="/new">
          <button className="btn btn-primary m-2">Add new item</button>
        </Link>
        <ItemsTable sortColumn={this.state.sortColumn} data={this.state.data} />
      </div>
    );
  }
}

export default Items;
