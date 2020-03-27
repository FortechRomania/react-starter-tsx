import React from "react";
import "./App.scss";
import { useGlobalState } from "./state/useGlobalState";
import { UserActionTypes } from "./state/user/UserActions";
import ToDoList from "./features/ToDoList/ToDoList";
import { Header } from "./shared/Header/Header";
import DoneList from "./features/DoneList/DoneList";

function App() {
  const { state, dispatch } = useGlobalState();

  const updateName = () => {
    dispatch({
      type: UserActionTypes.UpdateUserName,
      name: "Emanuel"
    });
  };

  const updateAge = () => {
    dispatch({
      type: UserActionTypes.UpdateUserAge,
      age: 30
    });
  };

  return (
    <div className="App">
      <button onClick={updateName}>set name to Emanuel</button>
      <button onClick={updateAge}>set age to 30</button>
      <br />
      <br />
      Current name: <b>{state.user.name}</b>
      <br />
      Current age: <b>{state.user.age}</b>
      <div className="page-wrapper">
        <Header label={"Done"}></Header>
        <div className="content">
          <ToDoList />
          {/* <DoneList /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
