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
      this.props.fetchUser(this.props.match.params.userId)
      this.props.displayPhotos(this.props.match.params.userId)
    }
  }

  componentWillUnmount() {
    this.props.clearPhotos();
  }

  viewPhoto(e) {
    this.props.history.push(`/photos/${e.currentTarget.id}`)
  }

  render() {
    const {photos, showUser} = this.props;
    if (!showUser) return null;
    document.title = `Puppr | ${showUser.username}`
    
    return (
      
      <div className="main-user-show-div">
        {<LoggedInHeader {...this.props} />}

        {<UserShowCover showUser={showUser} pageType={this.props.pageType}/>}

        <div className="user-photos">
          <ul className="user-photos-ul">
            {
              photos.map(photo =>
                <div key={`${photo.id}`}>
                    <img 
                      id={`${photo.id}`}
                      className="user-show-photo" 
                      src={photo.photoUrl}
                      onClick={this.viewPhoto}/>
                </div>
                )
            }
          </ul>
        </div> 
      </div>
    )
  };
};

export default UserShow;