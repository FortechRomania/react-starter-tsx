import React from "react";
import "./App.scss";
import { useGlobalState } from "./state/useGlobalState";
import { InProgressList } from "./features/InProgressList/InProgressList";
import { Header } from "./shared/Header/Header";
import { UpdateUserName, UpdateUserAge } from "./state/user/UserActions";

function App() {
  const { state, dispatch } = useGlobalState();

  const updateName = () => {
    dispatch(new UpdateUserName("Emanuel"));
  };

  const updateAge = () => {
    dispatch(new UpdateUserAge(30));
  };

  const deleteInProgressItem = (e: number) => {
    console.log("delete", e);
  };
  const moveItemToDone = (e: number) => {
    console.log("move item to done", e);
  };

  return (
    <div className="App">
      Current name: <b>{state.user.name}</b>
      <br />
      Current age: <b>{state.user.age}</b>
      <div className="page-wrapper">
        <Header label={"Done"}></Header>
        <div className="content">
          <InProgressList
            inProgressItems={state.toDoItems.inProgress}
            onDelete={deleteInProgressItem}
            onMoveItemToDone={moveItemToDone}
          />
          {/* <DoneList doneItems={state.toDoItems.done} /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
