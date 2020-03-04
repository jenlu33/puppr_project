import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
  constructor(props) {
    super(props);

    this.loginDemo = this.loginDemo.bind(this);
  }

  loginDemo(e) {
    e.preventDefault();
    const demoUser = {
      username: "demo-user",
      password: "password"
    }

    this.props.login(demoUser);
  }

  //REMEMBER CLEAR ERRORS = {}

  render() {
    // const {currentUser} = this.props;

    const display = this.props.currentUser ? (
      <div className="welcome-nav">
        <h2>Welcome {this.props.currentUser.username}!</h2>
        <Link onClick={this.props.logout} className="box-btn" to="/">Logout</Link>
      </div>
    ) : (
      <nav className="nav-session">
        <div className="search-bar">
        </div>
        <ul className="nav-ul">
          <li>
            <Link to="/login" className='login'>Log In</Link>
          </li>
          <li>
            <Link to="/signup" className='box-btn'>Sign Up</Link>
          </li>
        </ul>
        
      </nav>
      
    );
    // debugger
    return (
      <div className="main-div">
        <div className="nav-bar">
          <div className="tr"></div>
          <div className="nav-reg">
          
          <header className="main-header">
            <h1 className="puppr-h1">puppr</h1>
            {display}
          </header>
          </div>
        </div>
          
        <div className="content-container">
          <div className="main-message">
            <h1 className="main-message-h1">Find your inspiration.</h1>
            <h3 className="main-message-h3">Join the puppr community, home to tens of billions of pup photos</h3>

            <div className="start-signup">
              {/* <Link to="/" className='start-demo'>Start for free</Link> */}
              <button onClick={this.loginDemo} className="start-demo">Start for free</button>
            </div>
          </div>
    
        </div>
      </div>
      
    )
  }
}

export default Greeting;