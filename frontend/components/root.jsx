import React from 'react';
import ReactGA from 'react-ga';
import { createBrowserHistory } from "history"; 
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import App from './app';


ReactGA.initialize("UA-179294759-1");

const Root = ({store}) => {
  const history = createBrowserHistory();
  history.listen(() => {
    ReactGA.set({ page: history.location.hash }); // Update the user's current page
    ReactGA.pageview(history.location.hash); // Record a pageview for the given page
  });

  return(
    <Provider store={store}>
      <HashRouter>
        <App/>
      </HashRouter>
    </Provider>
  )
}

export default Root;