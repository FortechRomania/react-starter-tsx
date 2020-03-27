import React from "react";
import { List } from "../../shared/List/List";
import { ListItemButtonType, ListItemType } from "../../common.types";

export function DoneList(props: {
  doneItems: ListItemType[];
  onRemove: Function;
}) {
  const buttons: ListItemButtonType[] = [
    { label: "Remove", class: "red-button", action: props.onRemove }
  ];
  let DoneItems: ListItemType[] = props.doneItems.map(item => {
    item.buttons = buttons;
    return item;
  });

  return <List items={DoneItems} />;
}
