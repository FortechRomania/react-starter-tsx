import React from "react";
import { ListItemType } from "../../common.types";
import "./ListItem.scss";

export function ListItem(props: { onDelete: Function; item: ListItemType }) {
  return (
    <div className="wrapper">
      <div className="left">
        <span>{props.item.title} </span>
      </div>
      <div className="right">
        {props.item.buttons
          ? props.item.buttons.map(button => {
              return (
                <button
                  className={`button ${button.class}`}
                  onClick={() => props.onDelete(props.item)}
                >
                  {button.label}
                </button>
              );
            })
          : ""}
      </div>
    </div>
  );
}
// TODO: line 20
