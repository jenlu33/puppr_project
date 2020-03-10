import React from 'react';
import { Link } from 'react-router-dom';
import LoggedInHeader from './logged_in_header';

class PhotoShow extends React.Component {
  constructor(props) {
    super(props)

    this.prevPage = this.prevPage.bind(this);
  }

  componentDidMount() {
    this.props.fetchPhoto(this.props.match.params.photoId);
    // this.props.fetchUsers()
  }

  prevPage(e) {
    e.preventDefault();
    this.props.history.push('/');
  }

  render() {
    const {photo, users} = this.props;

    if (!photo) {
      return null
    } else {

      return (
        <div className="main-photo-show-div">
          
          {<LoggedInHeader />}

          {/* <h2>a single pup</h2> */}
          <div className="photo-content-container">
            <button onClick={this.prevPage} className="back-btn">← back to activity feed</button>

            <div className="photo-content">
              <div className="single-photo-container">
                <img className="show-img" src={photo.photoUrl} alt={photo.title}/>
              </div>
            </div>

          </div>

          <div className="sub-photo-container">
            <h2>User Info Here</h2>
            <div className="profile-pic-container">
              <img className="profile-pic" src={photo.photoUrl} alt=""/>
            </div>
            <div className="photo-info">
              {photo.user.username}
              <h2>{photo.title}</h2>
              <h2>{photo.caption}</h2>
            </div>
          </div>
        </div>
      )
    }
  }
}

export default PhotoShow;