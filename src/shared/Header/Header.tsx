import React, { FunctionComponent } from "react";
import "./Header.scss";

type Props = { label: string };

export const Header: FunctionComponent<Props> = ({ label }) => {
  return (
    <div className="header-bar">
      <button className="button">Go to {label}</button>
    </div>
  );
};
