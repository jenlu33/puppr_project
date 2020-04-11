import React from 'react';
import LoggedInHeader from './logged_in_header';

class UserShow extends React.Component {
  constructor(props) {
    super(props)
    this.viewPhoto = this.viewPhoto.bind(this);
  };

  componentDidMount() {
    this.props.displayPhotos(this.props.match.params.userId);
    this.props.fetchUser(this.props.match.params.userId);
  };

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.userId !== this.props.match.params.userId) {
      this.props.fetchUser(this.props.match.userId)
    }
  }

  viewPhoto(e) {
    this.props.history.push(`/photos/${e.currentTarget.id}`)
  }

  render() {
    const {photos, showUser} = this.props;
    if (!showUser) return null;

    let photoCount = 0;
    for (let i = 0; i < photos.length; i++) {
      if (photos[i].user_id == showUser.id) {
        photoCount += 1;
      };
    }

    // const created = showUser.created_at.slice(0,4);
    // if (!created) return null;
    
    return (
      
      <div className="main-user-show-div">
        {<LoggedInHeader {...this.props} />}
      
        <div className="user-cover">
          <div className="user-show-info">
            <p className="show-username">{showUser.username}</p>
            {/* <p>User Since {created}</p> */}
          </div>
        </div>

        <div className="user-nav-bar">
          <p>Photos: {photoCount}</p>
          <p>Albums: COMING SOON</p>
        </div>

        <div className="user-photos">
          <ul className="user-photos-ul">
            {
              photos.map(photo =>
                photo.user_id == showUser.id ? (
                <div key={`${photo.id}`}>
                    <img 
                      id={`${photo.id}`}
                      className="user-show-photo" 
                      src={photo.photoUrl}
                      onClick={this.viewPhoto}/>
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