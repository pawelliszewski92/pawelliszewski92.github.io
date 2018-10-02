import React from "react";
import Form from "./common/form";
import Joi from "joi-browser";

class NewItem extends Form {
  state = {
    data: [{ photo: "", category: "", price: "", desc: "" }],
    errors: [],
    genres: []
  };

  schema = {
    category: Joi.string().required(),
    price: Joi.string().required(),
    desc: Joi.string().required()
  };

  render() {
    return (
      <div>
        <h1>New Item</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderSelect("category", "Category", this.state.genres)}
          {this.renderInput("price", "Price")}
          {this.renderInput("desc", "Description")}
          {this.renderButton("Add")}
        </form>
      </div>
    );
  }
}

export default NewItem;
