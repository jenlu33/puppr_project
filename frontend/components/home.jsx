import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className="main-home-div">
        <h1>LOGGED IN WOOHOO</h1>

        <div className="content-container">
          <div className="main-message">
            <h1 className="main-message-h1">Find your inspiration.</h1>
            <h3 className="main-message-h3">Join the puppr community, home to tens of billions of pup photos</h3>

            <div className="start-signup">
              <button onClick={this.loginDemo} className="start-demo">Start Demo</button>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default Home;