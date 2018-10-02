import React, { Component } from "react";
import Table from "./common/table";

class ItemsTable extends Component {
  state = {
    columns: [
      {
        path: "photo",
        label: "Photo",
        content: item => <img alt={item.category + "photo"} src={item.photo} />
      },
      { path: "category", label: "Category" },
      { path: "price", label: "Price", content: item => "€ " + item.price },
      { path: "desc", label: "Description" }
    ]
  };
  render() {
    const { columns, sortColumn, data, onSort } = this.props;
    return (
      <Table
        columns={this.state.columns}
        sortColumn={sortColumn}
        data={data}
        onSort={onSort}
      />
    );
  }
}

export default ItemsTable;
