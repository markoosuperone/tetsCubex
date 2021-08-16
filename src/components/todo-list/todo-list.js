import React, { Component } from "react";
import ItemAddForm from "../item-add-form/item-add-form";
import { TodoListItem } from "../todo-list-item/todo-list-item";
import "./todo-list.css";

export const TodoList = ({
  todos,
  onDeleted,
  moveUp,
  moveDown,
  hidenButton,
}) => {
  const elements = todos.map((item, i) => {
    const { id, ...itemProps } = item;
    let buttonUpStyle = "btn btn-outline-success btn-sm";
    let buttonDownStyle = "btn btn-outline-success btn-sm";
    if (i === 0) {
      buttonUpStyle += " hide";
    }
    if (todos.length - 1 === i) {
      buttonDownStyle += " hide";
    }
    return (
      <div>
        <li key={id} className="list-group-item">
          <TodoListItem
            {...itemProps}
            onDeleted={() => onDeleted(id)}
            moveUp={() => moveUp(id)}
            moveDown={() => moveDown(id)}
            hidenButton={() => hidenButton()}
            buttonUpStyle={buttonUpStyle}
            buttonDownStyle={buttonDownStyle}
          />
        </li>
      </div>
    );
  });

  return <ul className="list-group todo-list">{elements}</ul>;
};
