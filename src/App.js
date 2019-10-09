import "./App.css";

import React from "react";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { browserHistory } from "react-router";
import { syncHistoryWithStore } from "react-router-redux";
import { Provider } from "react-redux";
import { Router, Route } from "react-router";

import reducers from "./reducers";
import Layout from "./containers/layout";
import Fighters from "./containers/fighters";
import Dialog from "./containers/fighters";


const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

const history = syncHistoryWithStore(browserHistory, store);

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Route component={Layout}>
          <Route path="/" component={Fighters} />
        </Route>
        <Route path='fighters/:1' component={Dialog}/>
      </Router>
    </Provider>
  );
}

export default App;
