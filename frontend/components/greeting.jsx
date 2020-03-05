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

  render() {

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
  
    return (
      <div className="main-greeting-div">
        <div className="nav-bar">
          <div className="tr"></div>
          <div className="nav-reg">
          
          <header className="main-header">
            <h1 className="puppr-h1">puppr</h1>
            {display}
          </header>
          </div>
        </div>
        
      </div>
      
    )
  }
}

export default Greeting;