import logo from "./logo.svg";
import "./App.css";
import Theme from "./theme";
import Login from "./login";
import LoginUser from "./LoginUser";
import UserProfile from "./UserProfile";
import { useState, createContext } from "react";
export const ThemeContext = createContext();
export const UserContext = createContext();
function App() {
  const [theme, setTheme] = useState("light");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
      <div className="App">
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <Theme></Theme>
        </ThemeContext.Provider>
      <hr></hr>
      <Login></Login>
      <hr></hr>
      <UserContext.Provider value={{ name, setName, email, setEmail, loggedIn, setLoggedIn }}>
        <LoginUser />
        <UserProfile />
      </UserContext.Provider>
      </div>
    </>
  );
}

export default App;
