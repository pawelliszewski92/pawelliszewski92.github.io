import React, { Component } from "react";
import { Link } from "react-router-dom";
import ItemsTable from "./itemsTable";

class Items extends Component {
  state = {
    sortColumn: { path: "", order: "" }
  };

  handleAddNew = () => {
    this.props.history.push("/new");
  };

  render() {
    return (
      <div>
        <button onClick={this.handleAddNew} className="btn btn-primary m-2">
          Add new item
        </button>
        <ItemsTable sortColumn={this.state.sortColumn} data={this.props.data} />
      </div>
    );
  }
}

export default Items;
