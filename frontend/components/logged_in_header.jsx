import React from 'react';
import { Link } from 'react-router-dom';

class LoggedInHeader extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { logout } = this.props;

    return (
      <div>
        <div className="loggedin-header">
          <div className="loggedin-header-content">
            <Link to="/" className="auth-puppr-h1">puppr</Link>
            <Link onClick={logout} className="box-btn" to="/">Logout</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default LoggedInHeader;