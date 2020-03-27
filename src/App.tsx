import React from "react";
import "./App.scss";
import { useGlobalState } from "./state/useGlobalState";
import { UserActionTypes } from "./state/user/UserActions";
import { ToDoList } from "./features/ToDoList/ToDoList";
import { Header } from "./shared/Header/Header";
import { DoneList } from "./features/DoneList/DoneList";
import { UpdateUserName, UpdateUserAge } from "./state/user/UserActions";

function App() {
  const { state, dispatch } = useGlobalState();

  const updateName = () => {
    dispatch(new UpdateUserName("Emanuel"));
  };

  const updateAge = () => {
    dispatch(new UpdateUserAge(30));
  };

  const deleteInProgressItem = (e: string) => {
    console.log("delete", e);
  };
  const moveItemToDone = () => {};

  return (
    <div className="App">
      {/* <button onClick={updateName}>set name to Emanuel</button>
      <button onClick={updateAge}>set age to 30</button> */}
      Current name: <b>{state.user.name}</b>
      <br />
      Current age: <b>{state.user.age}</b>
      <div className="page-wrapper">
        <Header label={"Done"}></Header>
        <div className="content">
          <ToDoList
            inProgressItems={state.toDoItems.inProgress}
            onDelete={deleteInProgressItem}
          />
          {/* <DoneList doneItems={state.toDoItems.done} /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
