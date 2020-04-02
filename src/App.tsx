import React from "react";
import "./App.scss";
import { UpdateUserName } from "./state/user/UserActions";
import { Switch, Route, useLocation, useHistory } from "react-router-dom";
import { useUserState } from "./state/user/UserHooks";
import { authDecorator } from "./decorators/authDecorator";

const Login = () => {
  const {dispatch} = useUserState();
  const { search } = useLocation()
  const history = useHistory();
  const redirectQueryParam = new URLSearchParams(search).get("redirect");

  const login = () => {
    dispatch(new UpdateUserName('User'));
    history.push(redirectQueryParam || "/");
  }

  return (<div>
      <h3>Login: </h3>
      <p> Redirecting back to: {}</p>
      <button onClick={login}>Login as User</button>
    </div>)
}

const MyAccount = () => {
    const { state } = useUserState();

    return <div>You are logged in as {state.name}</div>
}


function App() {
  return (
    <>
    <h2>Should display here if the user is authenticated or not</h2>
    <hr />
      <Switch>
        <Route path="/account" component={authDecorator(MyAccount)} />
        <Route path="/login" ><Login /></Route>
      </Switch>
    </>
  );
}

export default App;
