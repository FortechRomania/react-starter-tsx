import React from "react";
import { ListItemType } from "../../common.types";
import "./ListItem.scss";

export function ListItem(props: any) {
  function getButtons() {
    if (!props.item.buttons) {
      return;
    }
    return props.item.buttons.map((button: any) => {
      return (
        <button
          className={`button ${button.class}`}
          onClick={() => props[button.action](props.item.id)}
        >
          {button.label}
        </button>
      );
    });
  }

  return (
    <div className="wrapper">
      <div className="left">
        <span>{props.item.title} </span>
      </div>
      <div className="right">{getButtons()}</div>
    </div>
  );
}
