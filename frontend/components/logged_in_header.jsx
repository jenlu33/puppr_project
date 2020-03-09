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
        <div className="auth-toolbar">
          <div className="loggedin-header-content">
            <Link to="/feed" className="auth-puppr-h1">puppr</Link>
            <Link onClick={logout} className="box-btn" to="/">Logout</Link>

          </div>
        </div>
      </div>
    )
  }
}

export default LoggedInHeader;