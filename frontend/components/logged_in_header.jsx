import React from 'react';
import { Link } from 'react-router-dom';

class LoggedInHeader extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { logout, currentUser } = this.props;

    return (
      <div>
        <div className="loggedin-header">
          <div className="loggedin-header-content">
            <div className="header-left">
              <Link to="/" className="auth-puppr-h1">puppr</Link>
            </div>
            
            <div className="header-right">
              <Link className="you-btn" to={`/users/${currentUser.id}`}>You</Link>
              <Link className="upload-btn" to="/upload">.</Link>
              <Link onClick={logout} className="box-btn" to="/">Logout</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LoggedInHeader;