import React, { Component } from "react";
import { List } from "../../shared/List/List";
import "./ToDoList.scss";
import { ListItemButtonType, ListItemType } from "../../common.types";

export default class ToDoList extends Component {
  render() {
    const buttons: ListItemButtonType[] = [
      { label: "Done", class: "green-button" },
      { label: "Delete", class: "red-button" }
    ];
    let toDoItems: ListItemType[] = [
      { id: 1, title: "Groceries", buttons },
      { id: 2, title: "Cleaning", buttons }
    ];

    return (
      <div className="list-wrapper">
        <List items={toDoItems} />
      </div>
    );
  }
}
