import React from "react";
import { ListItem } from "../ListItem/ListItem";
import { ListItemType } from "../../common.types";
import "./List.scss";

export function List(props: { onDelete: Function; items: ListItemType[] }) {
  return (
    <div className="list-wrapper">
      {props.items.map(item => (
        <ListItem key={item.id} item={item} onDelete={props.onDelete} />
      ))}
    </div>
  );
}
