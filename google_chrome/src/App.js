import React from "react";
import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage";
import { Router, Route, Switch } from "react-router-dom";
import history from "./history";
import { SearchStore } from "./contexts/SearchContext";

function App() {
  return (
    <div className="App">
      <SearchStore>
        <Router history={history}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/search" exact component={SearchPage}></Route>
          </Switch>
        </Router>
      </SearchStore>
    </div>
  );
}

export default App;
