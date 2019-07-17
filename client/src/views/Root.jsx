import React from "react";
import { Provider } from "react-redux";

import Home from "./home/home";

const Root = ({ store }) => (
  <Provider store={store}>
    <div>
      <Home />
    </div>
  </Provider>
);

export default Root;
