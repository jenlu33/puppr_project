import React from 'react';
import ReactDOM from 'react-dom';
import {sign_up, log_in, log_out} from './actions/session_actions';
import configureStore from './store/store';
import Root from './components/root';


document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  // const store = configureStore();
  let store;
  if (window.currentUser) {
    const preloadedState ={
      entities: {
        users: { [window.currentUser.id]: window.currentUser}
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }


  //testing
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  // window.login = log_in;
  // window.logout = log_out;
  // window.signup = sign_up;

  ReactDOM.render(<Root store={store} />, root);
})