import React from "react";
import { UserContext } from "./App";
import { useContext } from "react";
import "./App.css";
import UserProfile from "./UserProfile";
export default function LoginUser() {
  const { name, setName, email, setEmail, loggedIn, setLoggedIn } =
    useContext(UserContext);

  const handle = (e) => {
    e.preventDefault();
    setName(e.target.id1.value);
    setEmail(e.target.id2.value);
    console.log(name)
    console.log(email)
    setLoggedIn(true);
    e.target.id1.value=""
    e.target.id2.value=""
  };

  return (
    <div>
      <form className = "loginform" onSubmit={handle}>
        <label>Name:</label>
        <input id={"id1"} required></input>
        <label>E-mail:</label>
        <input id={"id2"} required ></input>
        <button type="submit"  >Login</button>
      </form>
      <UserProfile/>
    </div>
  );
}
