import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import "semantic-ui-css/semantic.min.css";

import Main from "./components/Main";
import RootReducer from "./reducers";

const store = createStore(RootReducer);

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById("root")
);
