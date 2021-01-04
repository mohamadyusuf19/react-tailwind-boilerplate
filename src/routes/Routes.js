/* eslint-disable react/react-in-jsx-scope */
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeContainer from "../container/HomeContainer";
import PackageContainer from "../container/PackageContainer";
import Layout from "../layout/Layout";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Layout>
          <Route exact path='/' component={HomeContainer} />
          <Route exact path='/package' component={PackageContainer} />
        </Layout>
      </Switch>
    </Router>
  );
};

export default Routes;
