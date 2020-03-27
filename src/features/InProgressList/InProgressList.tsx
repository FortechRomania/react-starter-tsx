import React from "react";
import { List } from "../../shared/List/List";
import "./InProgressList.scss";
import { ListItemButtonType, ListItemType } from "../../common.types";

export function InProgressList(props: {
  onDelete: Function;
  onMoveItemToDone: Function;
  inProgressItems: ListItemType[];
}) {
  const buttons: ListItemButtonType[] = [
    { label: "Done", class: "green-button", action: props.onMoveItemToDone },
    { label: "Delete", class: "red-button", action: props.onDelete }
  ];
  let inProgressItems: ListItemType[] = props.inProgressItems.map(item => {
    item.buttons = buttons;
    return item;
  });

  return <List items={inProgressItems} />;
}
