import React, { Component } from "react";
import "./todo-list-item.css";
export class TodoListItem extends Component {
  state = {
    done: false,
    important: false
  };
  onLabelClick = () => {
    this.setState(({ done }) => {
      return {
        done: !done
      };
    });
  };
  render() {
    const { label, buttonDownStyle, buttonUpStyle } = this.props;

    let todoStyle = "todo-list-item block__element_1";

    return (
      <div className="flex">
        <span className={todoStyle}>{label}</span>
        <div className="button_element">
          <button
            className="btn  btn-outline-danger btn-sm "
            onClick={this.props.onDeleted}
          >
            Remove <i className="fa fa-trash-o" aria-hidden="true" />
          </button>
          <button className={buttonUpStyle} onClick={this.props.moveUp}>
            UP
            <i class="fa fa-arrow-up" aria-hidden="true"></i>
          </button>
          <button className={buttonDownStyle} onClick={this.props.moveDown}>
            DOWN
            <i class="fa fa-arrow-down" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    );
  }
}
