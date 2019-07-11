import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Views
import LandingPage from './views/LandingPage';
import Dashboard from './views/Dashboard';
import EmailList from './views/EmailList';
import SignUp from './views/SignUp';
import SignIn from './views/SignIn';
import NotFound from './views/NotFound';

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route
          component={LandingPage}
          exact
          path="/"
        />
        <Route
          component={Dashboard}
          exact
          path="/dashboard"
        />
        <Route
          component={EmailList}
          exact
          path="/emails"
        />
        <Route
          component={SignUp}
          exact
          path="/sign-up"
        />
        <Route
          component={SignIn}
          exact
          path="/sign-in"
        />
        <Route
          component={NotFound}
          exact
          path="/not-found"
        />
        <Redirect to="/not-found" />
      </Switch>
    );
  }
}
