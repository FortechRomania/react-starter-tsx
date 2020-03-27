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
    { label: "Done", class: "green-button", action: "onMoveItemToDone" },
    { label: "Delete", class: "red-button", action: "onDelete" }
  ];
  let inProgressItems: ListItemType[] = props.inProgressItems.map(item => {
    item.buttons = buttons;
    return item;
  });

  return (
    <React.Fragment>
      <List items={inProgressItems} {...props} />
    </React.Fragment>
  );
}
