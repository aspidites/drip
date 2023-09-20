import { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import * as api from "./api";

function App() {
  useEffect(() => {
    const doStuff = async () => {
      const [user] = await api.users.all({ limit: 4, sort: "desc" });
      console.log(user);
      await api.users.delete(user.id);
    };

    doStuff();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
