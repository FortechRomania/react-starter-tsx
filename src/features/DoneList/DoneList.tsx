import React, { FunctionComponent } from "react";
import { List } from "../../shared/List/List";
import { ListItemButtonType, ListItemType } from "../../common.types";

type Props = { doneItems: ListItemType[]; onRemove: Function };

export const DoneList: FunctionComponent<Props> = ({ doneItems, onRemove }) => {
  const buttons: ListItemButtonType[] = [
    { label: "Remove", class: "red-button", action: onRemove }
  ];
  let DoneItems: ListItemType[] = doneItems.map(item => {
    item.buttons = buttons;
    return item;
  });

  return <List items={DoneItems} />;
};
