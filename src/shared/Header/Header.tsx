import React from "react";
import "./Header.scss";

export function Header(props: any) {
  return (
    <div className="header-bar">
      <button className="button">Go to {props.label}</button>
    </div>
  );
}
