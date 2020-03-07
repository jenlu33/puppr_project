import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import GreetingContainer from './containers/greeting_container';
import SignupContainer from './containers/signup_form_container';
import LoginContainer from './containers/login_form_container';
import PhotoContainer from './containers/photo_index_container';

// import HomeContainer from './containers/home_container';

const App = () => (
  <div>
    <Switch>
      <AuthRoute path="/login" component={LoginContainer} />
      <AuthRoute path="/signup" component={SignupContainer} />
      {/* <ProtectedRoute path="/feed" component={HomeContainer} /> */}
      <ProtectedRoute path="/feed" component={PhotoContainer} />
      <Route path="/" component={GreetingContainer} />
    </Switch>
  </div>
)

export default App;