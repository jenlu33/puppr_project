import React from 'react';
import LoggedInHeader from './logged_in_header';

class UserShow extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      
      <div className="main-user-show-div">
        {<LoggedInHeader {...this.props} />}
      <br/>
      <br/>
      <br/>
      <br/>
        <div>
          <p>HELLO THIS IS A USER</p>
        </div>
        
      </div>
    )
  }
}

export default UserShow;