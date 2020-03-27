import React from "react";
import { ListItem } from "../ListItem/ListItem";
import { ListItemType } from "../../common.types";
import "./List.scss";

export function List(props: { items: ListItemType[] }) {
  return (
    <div className="list-wrapper">
      {props.items.map(item => (
        <ListItem key={item.id} item={item} {...props} />
      ))}
    </div>
  );
}
