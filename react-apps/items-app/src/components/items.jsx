import React, { Component } from "react";
import { Link } from "react-router-dom";
import ItemsTable from "./itemsTable";
import Pagination from "./common/pagination";
import { getCategories } from "./../services/itemsService";

class Items extends Component {
  state = {
    sortColumn: { path: "", order: "" }
  };

  handleAddNew = () => {
    this.props.history.push("/new");
  };

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  render() {
    return (
      <div className="col">
        <button onClick={this.handleAddNew} className="btn btn-primary m-2">
          Add new item
        </button>
        <ItemsTable
          data={this.props.data}
          sortColumn={this.state.sortColumn}
          onSort={this.handleSort}
        />
      </div>
    );
  }
}

export default Items;
