import React, { Component } from "react";
import ReactDOM from "react-dom";
import ItemAddForm from "../item-add-form/item-add-form";
import { TodoList } from "../todo-list/todo-list";
import AppHeader from "../header/AppHeader";

export class App extends Component {
  maxId = 100;
  state = {
    todoData: [
      this.createTodoItem("Play football"),
      this.createTodoItem("Drink apple juice"),
      this.createTodoItem("Create awesome react app"),
    ],
  };
  createTodoItem(label) {
    return {
      label,
      id: this.maxId++,
    };
  }
  moveUp = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const newArray = [
        ...todoData.slice(0, idx - 1),
        todoData[idx],
        todoData[idx - 1],
        ...todoData.slice(idx + 1),
      ];
      return {
        todoData: newArray,
      };
    });
  };
  moveDown = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const newArray = [
        ...todoData.slice(0, idx),
        todoData[idx + 1],
        todoData[idx],
        ...todoData.slice(idx + 2),
      ];
      return {
        todoData: newArray,
      };
    });
  };

  onDeleted = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];
      return {
        todoData: newArray,
      };
    });
  };

  addItem = (text) => {
    this.setState(({ todoData }) => {
      const newItem = this.createTodoItem(text);
      const newArray = [...todoData, newItem];
      return {
        todoData: newArray,
      };
    });
  };
  render() {
    return (
      <div className="center font">
        <div>
          <AppHeader />
        </div>
        <TodoList
          todos={this.state.todoData}
          onDeleted={this.onDeleted}
          todosSub={this.state.todoSubData}
          moveUp={this.moveUp}
          moveDown={this.moveDown}
        />
        <ItemAddForm addItem={this.addItem} />
      </div>
    );
  }
}
