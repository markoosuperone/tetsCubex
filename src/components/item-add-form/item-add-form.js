import React, { Component, useState } from "react";
import "./item-add-form.css";
export default class ItemAddForm extends Component {
  state = {
    label: "",
  };
  onLabelChange = (e) => {
    this.setState({ label: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state.label);
    this.setState({ label: "" });
  };
  render() {
    return (
      <form className="form-inline item-add-form" onSubmit={this.onSubmit}>
        <input
          placeholder="What need to do?"
          className="form-control"
          onChange={this.onLabelChange}
          value={this.state.label}
        />
        <button className="btn-primary">Add</button>
      </form>
    );
  }
}
