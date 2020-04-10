import React from 'react';
import LoggedInHeader from './logged_in_header';

class UserShow extends React.Component {
  constructor(props) {
    super(props)
  };

  componentDidMount() {
    this.props.displayPhotos(this.props.match.params.userId);
    // this.props.fetchUser(this.props.match.params.userId);
    // console.log(this.props.match.params);
    // console.log(this.ownProps.match.params);
    // console.log(this.props.fetchUser(this.props.match.params.userId).user);
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.userId !== this.props.match.params.userId) {
      this.props.fetchUser(this.props.match.userId)
    }
  }

  render() {
    // const userId = this.props.fetchUser(this.props.match.params.userId);
    if (!this.props.showUser) return null;
    
    return (
      
      <div className="main-user-show-div">
        {<LoggedInHeader {...this.props} />}
      
        <div className="user-cover">
          <div className="user-show-info">
            <p className="show-username">{this.props.showUser.username}</p>
            {/* this.props.user.username ? */}
            <p>Photo count here ?</p>
          </div>
        </div>

        <div className="user-nav-bar">
          <p>user nav bar stuff here</p>
        </div>

        <div className="user-photos">
          <p>THIS IS WHERE ALL USER'S PHOTOS GO</p>
        </div>
        
      </div>
    )
  };
};

export default UserShow;