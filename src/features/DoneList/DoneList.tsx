import React from "react";
import { List } from "../../shared/List/List";
import { ListItemButtonType, ListItemType } from "../../common.types";

export function DoneList(props: { doneItems: ListItemType[] }) {
  const buttons: ListItemButtonType[] = [
    { label: "Remove", class: "red-button", action: "" }
  ];
  let DoneItems: ListItemType[] = props.doneItems.map(item => {
    item.buttons = buttons;
    return item;
  });

  return (
    <div className="list-wrapper">
      <List items={DoneItems} />
    </div>
  );
}
