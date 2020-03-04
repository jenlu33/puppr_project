import React from 'react';
import { Route, Switch } from 'react-router-dom';
import GreetingContainer from './containers/greeting_container';
import SignupContainer from './containers/signup_form_container';
import LoginContainer from './containers/login_form_container';


const App = () => (
  <div>
    <Switch>
      <Route path="/login" component={LoginContainer} />
      <Route path="/signup" component={SignupContainer} />
      <Route path="/" component={GreetingContainer} />
    </Switch>
  </div>
)

export default App;