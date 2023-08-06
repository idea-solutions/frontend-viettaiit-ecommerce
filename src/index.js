import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./style.scss";
import { Provider } from "react-redux";
import store from "./store";
import {  HelmetProvider } from "react-helmet-async";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </Provider>
  </React.StrictMode>
);

//
