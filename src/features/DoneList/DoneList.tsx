import React, { Component } from "react";
import { List } from "../../shared/List/List";
import { ListItemButtonType, ListItemType } from "../../common.types";

export default class DoneList extends Component {
  render() {
    const buttons: ListItemButtonType[] = [
      { label: "Remove", class: "red-button" }
    ];
    let DoneItems: ListItemType[] = [
      { id: 1, title: "Shopping", buttons },
      { id: 2, title: "Cooking", buttons }
    ];

    return (
      <div className="list-wrapper">
        <List items={DoneItems} />
      </div>
    );
  }
}
