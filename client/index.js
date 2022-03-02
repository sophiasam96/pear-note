import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.jsx";
import { BrowserRouter } from 'react-router-dom';
import "./styles/styles.css";


var mountNode = document.getElementById("app");
render(
  <BrowserRouter>
    <App name="Sophia" />,
  </BrowserRouter>,
  mountNode
  );