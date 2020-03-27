import React from "react";
import { ListItemType } from "../../common.types";
import "./ListItem.scss";

export function ListItem(props: { item: ListItemType }) {
  function getButtons() {
    if (!props.item.buttons) {
      return;
    }
    return props.item.buttons.map((button: any) => {
      return (
        <button
          key={button.label}
          className={`button ${button.class}`}
          onClick={() => button.action(props.item.id)}
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
