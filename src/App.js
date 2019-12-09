import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="text-center">
      <header className="flex flex-col items-center justify-center h-screen text-2xl text-white bg-blue-900">
        <img src={logo} className="h-64 pointer-events-none App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="text-blue-300"
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
