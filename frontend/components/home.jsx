import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {currentUser} = this.props;

    const display = currentUser ? (
      <h1>LOGGED IN WOOHOO</h1>
    ) : (
      <div></div>
    )


    return(
      <div className="main-home-div">
        <div className="nav-bar">
          <div className="tr"></div>
          <div className="nav-reg">

            <header className="main-header">
              <h1 className="puppr-h1">puppr</h1>
             
            </header>
          </div>
        </div>

        {display}
        
      </div>
    )
  }
}

export default Home;