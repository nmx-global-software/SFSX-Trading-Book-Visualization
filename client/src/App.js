import React from "react";
import "bulma/css/bulma.css";
import axios from 'axios';

import Root from "./views/Root";
import configureStore from "./store/configure-store";

const store = configureStore();

axios.defaults.baseURL = process.env.REACT_APP_SERVER_ADDRESS;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

function App() {
  return (
    <div className="App">
      <Root store={store} />
    </div>
  );
}

export default App;
