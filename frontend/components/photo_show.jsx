import React from 'react';
import { Link } from 'react-router-dom';


class PhotoShow extends React.Component {
  constructor(props) {
    super(props)

    this.prevPage = this.prevPage.bind(this);
  }

  componentDidMount() {
    this.props.fetchPhoto(this.props.match.params.photoId);
  }

  prevPage(e) {
    e.preventDefault();
    this.props.history.push('/');
  }

  render() {
    const {photo, photoUsers} = this.props;

    if (!photo) {
      return null
    } else {

      return (
        <div className="main-photo-show-div">
          
          <h2>a single pup</h2>
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
            <div>
              {/* {photoUsers[photo.id].username} */}
            </div>
          </div>
        </div>
      )
    }
  }
}

export default PhotoShow;