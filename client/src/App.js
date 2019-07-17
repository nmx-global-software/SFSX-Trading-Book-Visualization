import React from "react";
import "bulma/css/bulma.css";

import Root from "./views/Root";
import configureStore from "./store/configure-store";

const store = configureStore();

function App() {
  return (
    <div className="App">
      <Root store={store} />
    </div>
  );
}

export default App;
