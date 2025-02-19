import React from "react";
import { UserContext } from "./App";
import { useContext } from "react";

export default function UserProfile() {
  const { name, email, loggedIn } = useContext(UserContext);
  
  if (loggedIn) {
    return (
      <div>
        <>
          <h3>Name: {name}</h3>
          <h3>Email: {email}</h3>
        </>
      </div>
    );
  }
}
