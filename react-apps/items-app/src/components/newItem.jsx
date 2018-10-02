import React from "react";
import Form from "./common/form";
import Joi from "joi-browser";
import { getCategories } from "./../services/itemsService";

class NewItem extends Form {
  state = {
    data: { photo: "", category: "", price: "", desc: "" },
    errors: [],
    categories: []
  };

  schema = {
    category: Joi.string().required(),
    price: Joi.string().required(),
    desc: Joi.string().required(),
    photo: Joi.required()
  };

  async componentDidMount() {
    const { data } = await getCategories();
    const categories = data.map(item => ({
      name: item.name
    }));
    this.setState({ categories });
  }

  fileSelectedHandler = event => {
    const photo = URL.createObjectURL(event.target.files[0]);
    console.log(photo);
    const data = { ...this.state.data };
    data.photo = photo;
    this.setState({ data });
  };

  doSubmit() {
    this.props.onSubmit(this.state.data);
    this.props.history.push("/");
  }

  render() {
    return (
      <div>
        <h1>New Item</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderSelect("category", "Category", this.state.categories)}
          {this.renderInput("price", "Price")}
          {this.renderInput("desc", "Description")}
          <input type="file" onChange={this.fileSelectedHandler} />
          {this.renderButton("Add")}
        </form>
      </div>
    );
  }
}

export default NewItem;
