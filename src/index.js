import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import Header from "./components/Header";
import Switcher from "./components/Switcher";

function App() {
  return (
    <div className="container-fluid">
      <Switcher />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
