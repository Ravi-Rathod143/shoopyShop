// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client"; // Import `createRoot`
import { Provider } from "react-redux";
import store from "./redux/store";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
