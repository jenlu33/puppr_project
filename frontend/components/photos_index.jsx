import React from 'react';
import { Link } from 'react-router-dom';


class PhotosIndex extends React.Component {
  constructor(props) {
    super(props)
    
    this.viewPhoto = this.viewPhoto.bind(this);
  }

  componentDidMount() {
    this.props.displayPhotos();
    this.props.fetchUsers();
  }

  viewPhoto(e) {
    this.props.history.push(`/photos/${e.currentTarget.id}`)
  }

  render() {
    document.title = "Puppr | Feed"

    const { photos } = this.props;

    return(
      <div className="main-photo-index-div">

        <div className="photos-container">
            <ul className="photos-ul">
              {
                photos.reverse().map(photo => 
                  <div className="photo-box"
                      key={`${photo.id}`}>

                    <div className="photo-index-user-info">
                      <Link to={`/users/${photo.user.id}`}>{photo.user.username}</Link>
                      {/* <h2>{photo.user.username}</h2> */}
                      <h2 className="featured">Featured</h2>
                    </div>

                    <li 
                      className="photo-index-item"
                      id={`${photo.id}`}
                      onClick={this.viewPhoto}>
                      <img 
                        className="index-photo"
                        src={photo.photoUrl}/>
                    </li>

                    <div className="photo-title-container">
                      <h2 className="photo-title">{photo.title}</h2>
                  </div>
                </div>
              )}
            </ul>
        </div>
      </div>
    )
  }
}

export default PhotosIndex;