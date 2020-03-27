import React from "react";
import { ListItem } from "../ListItem/ListItem";
import { ListItemType } from "../../common.types";

export function List(props: { items: ListItemType[] }) {
  return (
    <div>
      {props.items.map(item => (
        <ListItem key={item.id} item={item} />
      ))}
    </div>
  );
}
