import React from 'react';
import LoggedInHeader from './logged_in_header';

class UserShow extends React.Component {
  constructor(props) {
    super(props)
  };

  componentDidMount() {
    this.props.displayPhotos(this.props.match.params.userId);
    this.props.fetchUser(this.props.match.params.userId);
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
    if (!this.props.showUser) return null;

    const {photos, showUser} = this.props;

    let count = 0;
    for (let i = 0; i < photos.length; i++) {
      if (photos[i].user_id == showUser.id) {
        count += 1;
      };
    }
    
    return (
      
      <div className="main-user-show-div">
        {<LoggedInHeader {...this.props} />}
      
        <div className="user-cover">
          <div className="user-show-info">
            <p className="show-username">{this.props.showUser.username}</p>
           
            <p>Photos: {count}</p>
          </div>
        </div>

        <div className="user-nav-bar">
          {/* <p>Photos: {count}</p> */}
        </div>

        <div className="user-photos">
          <ul className="user-photos-ul">
            {
              this.props.photos.map(photo =>
                photo.user_id == this.props.showUser.id ? (
                <div key={`${photo.id}`}>
                  <img className="user-show-photo" src={photo.photoUrl}/>
                </div>) : (null)
                )
            }
          </ul>
        </div>
        
      </div>
    )
  };
};

export default UserShow;