import React from "react";
import "./App.scss";
import { useGlobalState } from "./state/useGlobalState";
import { UpdateUserName, UpdateUserAge } from "./state/user/UserActions";

function App() {
  const {state, dispatch} = useGlobalState();

  const updateName = () => {
    dispatch(new UpdateUserName('Emanuel'))
  }

  const updateAge = () => {
    dispatch(new UpdateUserAge(30))
  }


  return (
    <div className="App">
     <button onClick={updateName}>set name to Emanuel</button>
     <button onClick={updateAge}>set age to 30</button><br /><br />
     Current name: <b>{state.user.name}</b><br />
     Current age: <b>{state.user.age}</b>
    </div>
  );
}

export default App;

