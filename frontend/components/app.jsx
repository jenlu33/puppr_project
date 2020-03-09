import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import GreetingContainer from './containers/greeting_container';
import SignupContainer from './containers/signup_form_container';
import LoginContainer from './containers/login_form_container';
import PhotoIndexContainer from './containers/photo_index_container';
import PhotoContainer from './containers/photo_show';

const App = () => (
  <div>
    <Switch>
      <AuthRoute path="/login" component={LoginContainer} />
      <AuthRoute path="/signup" component={SignupContainer} />
      <ProtectedRoute path="/photos/:photoId" component={PhotoContainer}/>
    </Switch>
      <Route path="/" component={GreetingContainer} />
      <ProtectedRoute path="/" component={PhotoIndexContainer} />
  </div>
)

export default App;