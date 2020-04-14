import React from 'react';
import { Link } from 'react-router-dom';
import LoggedInHeader from './logged_in_header';
import UserShowCover from './user_show_cover';

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
    
    return (
      
      <div className="main-user-show-div">
        {<LoggedInHeader {...this.props} />}

        {<UserShowCover showUser={showUser} pageType={this.props.pageType}/>}

        <div className="user-nav-bar">
          <p>Photos</p>
          <Link 
            to={`/users/${showUser.id}/albums`}
            className="nav-user-albums">
              Albums
          </Link>
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