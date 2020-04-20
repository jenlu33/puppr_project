import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import GreetingContainer from './containers/greeting_container';
import SignupContainer from './containers/signup_form_container';
import LoginContainer from './containers/login_form_container';
import PhotoContainer from './containers/photo_show_container';
import CreatePhotoContainer from './containers/photo_create_container';
import UserShowContainer from './containers/show_user_container';
import AlbumIndexContainer from './containers/albums_index_container';
import AlbumCreateContainer from './containers/album_create_container';
import AlbumShowContainer from './containers/album_show_container';
import AlbumEditContainer from './containers/album_edit_container';

import ErrorContainer from './error404'

const App = () => (
  <div>
    <Switch>
      <AuthRoute path="/login" component={LoginContainer} />
      <AuthRoute path="/signup" component={SignupContainer} />
      <ProtectedRoute path="/photos/:photoId" component={PhotoContainer}/>
      <ProtectedRoute path="/upload" component={CreatePhotoContainer} />
      <ProtectedRoute exact path="/users/:userId" component={UserShowContainer} />
      <ProtectedRoute exact path="/users/:userId/albums" component={AlbumIndexContainer} />
      <ProtectedRoute path="/album/new" component={AlbumCreateContainer} />
      {/* <ProtectedRoute path="/albums/:albumId/edit" component={AlbumEditContainer} /> */}
      <ProtectedRoute path="/albums/:albumId" component={AlbumShowContainer} />
      <Route exact path="/" component={GreetingContainer} />
      <Route component={ErrorContainer} />
    </Switch>
  </div>
)

export default App;