import React from "react";
import ReactDOM from "react-dom/client";
import { RhThemeProvider, RhToastContainer } from "@rhythm-ui/react";
import App from "./App";
import "./index.css";

import { store } from "./store";
import { Provider } from "react-redux"; 

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RhThemeProvider theme="light">
      <RhToastContainer />
      <App />
    </RhThemeProvider>
  </Provider>
);
