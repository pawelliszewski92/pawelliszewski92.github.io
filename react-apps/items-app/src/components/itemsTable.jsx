import React, { Component } from "react";
import Table from "./common/table";

class ItemsTable extends Component {
  state = {
    columns: [
      { path: "photo", label: "Photo" },
      { path: "category", label: "Category" },
      { path: "price", label: "Price" },
      { path: "desc", label: "Description" }
    ]
  };
  render() {
    return (
      <Table
        columns={this.state.columns}
        sortColumn={this.props.sortColumn}
        data={this.props.data}
      />
    );
  }
}

export default ItemsTable;
