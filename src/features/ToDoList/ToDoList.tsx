import React from "react";
import { List } from "../../shared/List/List";
import "./ToDoList.scss";
import { ListItemButtonType, ListItemType } from "../../common.types";

export function ToDoList(props: {
  onDelete: Function;
  inProgressItems: ListItemType[];
}) {
  const buttons: ListItemButtonType[] = [
    { label: "Done", class: "green-button" },
    { label: "Delete", class: "red-button" }
  ];
  let toDoItems: ListItemType[] = props.inProgressItems.map(item => {
    item.buttons = buttons;
    return item;
  });

  return (
    <React.Fragment>
      <List items={toDoItems} onDelete={props.onDelete} />
    </React.Fragment>
  );
}
