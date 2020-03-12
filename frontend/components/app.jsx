import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import GreetingContainer from './containers/greeting_container';
import SignupContainer from './containers/signup_form_container';
import LoginContainer from './containers/login_form_container';
import PhotoContainer from './containers/photo_show_container';
import CreatePhotoContainer from './containers/create_photo_container';
import ErrorContainer from './error404'

const App = () => (
  <div>
    <Switch>
      <AuthRoute path="/login" component={LoginContainer} />
      <AuthRoute path="/signup" component={SignupContainer} />
      <ProtectedRoute path="/photos/:photoId" component={PhotoContainer}/>
      <ProtectedRoute path="/upload" component={CreatePhotoContainer} />
      {/* <Route component={ErrorContainer} /> */}
    </Switch>
      <Route exact path="/" component={GreetingContainer} />
  </div>
)

export default App;