import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import GreetingContainer from './containers/greeting_container';
import SignupContainer from './containers/signup_form_container';
import LoginContainer from './containers/login_form_container';
import HomeContainer from './containers/home_container';

const App = () => (
  <div>
    <Switch>
      <AuthRoute path="/login" component={LoginContainer} />
      <AuthRoute path="/signup" component={SignupContainer} />
      <Route path="/" component={GreetingContainer} />
      <ProtectedRoute exact path="/" component={HomeContainer} />
    </Switch>
  </div>
)

export default App;