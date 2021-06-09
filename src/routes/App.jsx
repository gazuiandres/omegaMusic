import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import Favorites from "../pages/Favorites";

import Context from "../context/Context";
import useInitialState from "../Hooks/useInitialState";

const App = () => {
  const initialState = useInitialState();
  return (
    <Context.Provider value={initialState}>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/favorites" component={Favorites} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </Context.Provider>
  );
};

export default App;
